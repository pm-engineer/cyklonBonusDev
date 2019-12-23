import {reset} from 'redux-form';


const reduxClearMassages = () => {

    return (dispatch) => {
        dispatch({
            type:'MODAL_MESSAGE',
            payload:''
        })
    }


}

const reduxResetForm = (payload) => {

    return (dispatch) => {
        dispatch(reset(payload));
    }
}

export {
    reduxClearMassages,
    reduxResetForm
}

