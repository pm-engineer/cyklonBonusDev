import { API, graphqlOperation, Auth } from 'aws-amplify';
import { Actions } from "react-native-router-flux";
import {registerUser} from "../../graphql/mutations";

const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
    phone_number
    birthday
    discount
    carWashes
    cars {
        items{
          id
          carType
          carColor
          carModel
          carTires
          }
    }
  }
}
`;

export const getManager = `query GetManager($id: ID!) {
  getManager(id: $id) {
    id
    orders(sortDirection:DESC) {
      items {
        id
        total
        createdAt
        user{
          name
          phone_number
        }
        service{
         title
        }
      }
      nextToken
    }
    services
  }
}
`;
const reduxSignIn = (payload) => {
    return async (dispatch) => {

        console.log('payload sign in',payload);
        try {
            dispatch({
                type:'LOADING_START'
            })

            //Sign in user
            const user = await Auth.signIn(payload.phone, payload.password)

            if(user.attributes['custom:user_group']==='user'){
                    dispatch({
                        type: 'SET_ROLE_TO_USER',
                    })

                const getProfile = async (id) => {

                    const getUserInput = {
                        id
                    }

                    return await API.graphql(graphqlOperation(getUser, getUserInput))
                }

                //Get profile from DynamoDB
                const userProfile = await getProfile(user.signInUserSession.idToken.payload.sub)

                //Check if user profile exist in Dynamo DB
                if(!userProfile.data.getUser) {
                    //IF NO then create profile
                    try {
                        const registerUserInput = {
                            id: user.signInUserSession.idToken.payload.sub,
                            phone_number: user.attributes.phone_number,
                            discount:0,
                            carWashes:0,
                            totalSpent:0
                        }

                        await API.graphql(graphqlOperation(registerUser, {input: registerUserInput}))

                        const response = await getProfile(user.signInUserSession.idToken.payload.sub)
                        const profile = response.data.getUser


                        //then put profile to redux
                        dispatch({
                            type: 'SET_PROFILE',
                            payload: profile
                        })
                        dispatch({
                            type: 'SET_CARS',
                            payload: profile.cars.items
                        })

                    } catch (e) {
                        console.log("User exist", e);
                    }
                }else{
                    //IF YES then put profile to redux

                    const response = await getProfile(user.signInUserSession.idToken.payload.sub)
                    const profile = response.data.getUser
                    console.log('profile',profile);

                    dispatch({
                        type: 'SET_PROFILE',
                        payload: profile
                    })
                    dispatch({
                        type: 'SET_CARS',
                        payload: profile.cars.items
                    })
                }

            }else{

                dispatch({
                    type: 'SET_ROLE_TO_MANAGER',
                })



                const getUserInput = {
                    id:user.signInUserSession.idToken.payload.sub
                }

                const response = await API.graphql(graphqlOperation(getManager, getUserInput))

                dispatch({
                    type:'SET_ORDERS',
                    payload:response.data.getManager.orders.items
                })

                console.log('response.data.getManager',response.data.getManager);

                //then put profile to redux
                dispatch({
                    type: 'SET_PROFILE',
                    payload: response.data.getManager
                })

                // const response =  await API.graphql(graphqlOperation(listServices))
                //
                // console.log(response);
            }
            dispatch({
                type:'AUTH_USER_SUCCESS',
                user,
                userToken: user.signInUserSession.accessToken.jwtToken,
            })
            dispatch({
                type:'LOADING_STOP'
            })
        } catch (e) {
            console.log('Error when sign-in',e);
            dispatch({
                type:'LOADING_START'
            })
            dispatch({
                type:'MODAL_MESSAGE',
                payload:e
            })
            dispatch({
                type:'ERROR_MESSAGE',
                payload:e
            })
            dispatch({
                type:'LOADING_STOP'
            })
            Actions.modalMessage(e.code)
        }
    }
}

const reduxSignUp = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({
                type:'LOADING_START'
            })
            console.log(payload);

            const response = await Auth.signUp({
                username:payload.phone,
                password:payload.password,
                attributes:{
                    name:payload.phone,
                    phone_number:payload.phone,
                    'custom:user_group': 'user'
                }
            })

            dispatch({
                type:'SET_EXIST_CODE',
                username:response.user.username,
                login:payload.phone,
                password:payload.password,
            })


            dispatch({
                type:'SET_AUTH_DATA',
                username:response.user.username,
                login:payload.phone,
                password:payload.password,
            })

            dispatch({
                type:'LOADING_STOP'
            })

            Actions.verify()

        } catch (e) {
            dispatch({
                type:'MODAL_MESSAGE',
                payload:e
            })
            dispatch({
                type:'ERROR_MESSAGE',
                payload:e
            })
            dispatch({
                type:'LOADING_STOP'
            })
            Actions.modalMessage(e.code)
        }
    }
}

const reduxVerify = (payload) => {

    return async (dispatch) => {
        try {
            dispatch({
                type:'LOADING_START'
            })

            console.log('payload',payload);

            // To verify attribute with the code
            await Auth.confirmSignUp(payload.username, payload.code)

            dispatch({
                type:'LOADING_STOP'
            })


        } catch (e) {
            dispatch({
                type:'LOADING_STOP'
            })
            dispatch({
                type:'ERROR_MESSAGE',
                payload:e
            })
            dispatch({
                type:'LOADING_STOP'
            })


        }
    }
}

const reduxResetPassword = (username, code, new_password) => {

    return async (dispatch) => {
        try {
            dispatch({
                type:'LOADING_START'
            })
            await Auth.forgotPasswordSubmit(username, code, new_password)

            dispatch({
                type:'LOADING_STOP'
            })
            dispatch({
                type:'MODAL_MESSAGE',
                payload:'success'
            })
            Actions.modalMessage('success')
        } catch (e) {

            dispatch({
                type:'ERROR_MESSAGE',
                payload:e
            })
            dispatch({
                type:'LOADING_STOP'
            })

            Actions.modalMessage(e.code)
            Actions.resetPassword({sent:false})
        }
    }
}

const reduxSentCode = (payload) => {

    return async (dispatch) => {
        try {
            dispatch({
                type:'LOADING_START'
            })

            await Auth.forgotPassword(payload.phone)

            dispatch({
                type:'LOADING_STOP'
            })
            Actions.resetPassword({sent:true,username:payload.phone})
        } catch (e) {
            console.log(e);
            dispatch({
                type:'ERROR_MESSAGE',
                payload:e
            })
            dispatch({
                type:'LOADING_STOP'
            })

            Actions.modalMessage(e.code)
        }
    }
}

const reduxLogOut = () => {
    return async (dispatch) => {
        dispatch({
            type:'LOADING_START'
        })
        dispatch({ type:'LOGOUT_USER' })
        await Auth.signOut()
        dispatch({
            type:'LOADING_STOP'
        })
    }
}

export {
    reduxSignIn,
    reduxLogOut,
    reduxSignUp,
    reduxVerify,
    reduxResetPassword,
    reduxSentCode
}


