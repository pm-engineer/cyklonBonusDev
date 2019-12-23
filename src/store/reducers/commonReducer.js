const initialState = {
    loading: false,
    modalMessage:'',
    errorMessage:'',
    userConfirmed:'',
    user_name:''
}

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADING_START":
            return {
                ...state,
                loading: true
            }
        case "LOADING_STOP":
            return {
                ...state,
                loading: false
            }
        case "MODAL_MESSAGE":
            return {
                ...state,
                modalMessage:action.payload
            }
        case "ERROR_MESSAGE":
            return {
                ...state,
                errorMessage:action.payload
            }
        case "SET_USER":
            return {
                ...state,
                userConfirmed: false,
                user_name: action.payload
            }

        default:
            return state;
    }
}

export default commonReducer;
