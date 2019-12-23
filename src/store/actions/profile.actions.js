import { API, graphqlOperation } from 'aws-amplify';
import { registerUser } from '../../graphql/mutations'
import { Actions } from "react-native-router-flux";

const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
    phone_number
    birthday
    bonuses
    cars {
      id
      carType
      carColor
      carModel
      carTires
    }
  }
}
`;

const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
    email
    phone_number
    birthday
    bonuses
  }
}
`;


const reduxGetUser = (id) => {

    return async (dispatch) => {
        try {
            dispatch({
                type:'LOADING_START'
            })

            const getUserInput = {
                id
            }

            const response = await API.graphql(graphqlOperation(getUser, getUserInput))
            const user = response.data.getUser


            dispatch({
                type:'SET_PROFILE',
                payload:user
            })

            dispatch({
                type:'LOADING_STOP'
            })

        } catch (e) {
            dispatch({
                type:'LOADING_STOP'
            })
            dispatch({
                type:'ERROR_MESSAGE',
                payload:e.message
            })


        }
    }
}

const reduxUpdateUser = (payload) => {

    return async (dispatch) => {
        try {
            dispatch({
                type:'LOADING_START'
            })

            console.log('payload',payload);

            const response = await API.graphql(graphqlOperation(updateUser,{input:{...payload}}))
            const user = response.data.updateUser

            if(user){
                dispatch({
                    type:'SET_PROFILE',
                    payload:user
                })
            }

            dispatch({
                type:'LOADING_STOP'
            })

            Actions.profile()

            // dispatch({
            //     type:'SUCCESS_MESSAGE',
            //     payload:"Ви успішно обновили профіль!"
            // })

        } catch (e) {

            dispatch({
                type:'LOADING_STOP'
            })
            // dispatch({
            //     type:'ERROR_MESSAGE',
            //     payload:e.message
            // })


        }
    }
}


const reduxRegisterUser = (payload) => {

    return async (dispatch) => {
        try {
            dispatch({
                type:'LOADING_START'
            })

            const getUserInput = {
                id: payload.signInUserSession.idToken.payload.sub
            }

            const  data = await API.graphql(graphqlOperation(getUser, getUserInput))

            if(!data.getUser){
                try{
                    const registerUserInput = {
                        ...getUserInput,
                        phone_number:payload.attributes.phone_number,
                        bonuses:0
                    }
                    await API.graphql(graphqlOperation(registerUser, {input: registerUserInput}))

                    const getUserInput = {
                        id: payload.signInUserSession.idToken.payload.sub
                    }

                    const response = await API.graphql(graphqlOperation(getUser, getUserInput))
                    const profile = response.data.getUser

                    dispatch({
                        type:'SET_PROFILE',
                        payload:profile
                    })

                }catch (e) {
                    console.log("User exist",e);
                }
            }

            dispatch({
                type:'LOADING_STOP'
            })



        } catch (e) {
            dispatch({
                type:'LOADING_STOP'
            })
            // dispatch({
            //     type:'ERROR_MESSAGE',
            //     payload:e.message
            // })


        }
    }
}

const reduxCleanResponse = () => {

    return  (dispatch) => {
        dispatch({
            type:'CLEAN_RESPONSE'
        })
    }
}



export {
    reduxGetUser,
    reduxUpdateUser,
    reduxRegisterUser,
    reduxCleanResponse,
}


