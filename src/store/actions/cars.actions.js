import {Actions} from "react-native-router-flux";
import {API, graphqlOperation} from 'aws-amplify';
import {createCar,deleteCar} from '../../graphql/mutations'

export const getUser = `query GetUser($id: ID!) {
    getUser(id: $id) {
        cars {
              items
                {
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

const reduxCreateCar = (input,id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type:'LOADING_START'
            })
            await API.graphql(graphqlOperation(createCar, {input}))
            const getUserInput = {id}
            const result = await API.graphql(graphqlOperation(getUser, getUserInput))
            const cars = result.data.getUser.cars.items

            dispatch({
                type: 'SET_CARS',
                payload: cars
            })
            dispatch({
                type:'MODAL_MESSAGE',
                payload:'success'
            })
            dispatch({
                type:'LOADING_STOP'
            })
            Actions.myCars()
            Actions.modalMessage('success')
        } catch (e) {
            dispatch({
                type:'LOADING_START'
            })
            dispatch({
                type:'MODAL_MESSAGE',
                payload:e
            })
            dispatch({
                type:'LOADING_STOP'
            })
            Actions.myCars()
            Actions.modalMessage(e)

        }
    }
}

const reduxDeleteCar = (userId,carId) => {
    return async (dispatch) => {
        try {
            dispatch({
                type:'LOADING_START'
            })

            const input = {
                id:carId
            }

            await API.graphql(graphqlOperation(deleteCar, {input}))

            const getUserInput = {
                id:userId
            }
            const result = await API.graphql(graphqlOperation(getUser, getUserInput))
            const cars = result.data.getUser.cars.items


            dispatch({
                type: 'SET_CARS',
                payload: cars
            })

            dispatch({
                type:'LOADING_STOP'
            })

            dispatch({
                type:'MODAL_MESSAGE',
                payload:'success'
            })

            Actions.myCars()
            Actions.modalMessage('success')

        } catch (e) {
            dispatch({
                type:'LOADING_START'
            })
            dispatch({
                type:'ERROR_MESSAGE',
                payload:e
            })
            dispatch({
                type:'MODAL_MESSAGE',
                payload:e
            })
            dispatch({
                type:'LOADING_STOP'
            })
            Actions.myCars()
            Actions.modalMessage(e)
        }
    }
}

const reduxGetCarList = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type:'LOADING_START'
            })

            const result = await API.graphql(graphqlOperation(getUser, {id}))
            console.log(result);
            Actions.myCars()

            dispatch({
                type:'LOADING_STOP'
            })

        } catch (e) {
            dispatch({
                type:'LOADING_START'
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

const reduxFirstAddCar = (payload) => {
    return async (dispatch) => {

        dispatch({
            type:'FIRST_ADD_CAR',
            payload: payload
        })

        Actions.addCar()
    }
}

export {
    reduxCreateCar,
    reduxGetCarList,
    reduxDeleteCar,
    reduxFirstAddCar
}
