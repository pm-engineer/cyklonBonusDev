import {Actions} from "react-native-router-flux";

const reduxServices = (payload) => {
    return (dispatch) => {
        try {

            console.log('from_reduxServices:',payload);
            dispatch({
                type: 'SET_QR',
                payload: payload
            })

            Actions.managerHistory()
            console.log('from_reduxServices2:',payload);
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

export {
    reduxServices
}
