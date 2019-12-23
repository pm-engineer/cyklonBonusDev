
const initialState = {
    services: [],
    qrCode: null,
}


const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_QR':
            return {
                ...state,
                qrCode: action.payload,
            }
        case "DELL_QR":
            return {
                ...state,
                qrCode:null
            }

        case "SET_SERVICES":
            return {
                ...state,
                services: action.payload,
            }

        default:
            return state;
    }
}



export default servicesReducer;
