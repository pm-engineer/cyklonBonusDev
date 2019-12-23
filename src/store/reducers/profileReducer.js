const initialState = {
    userProfile: null
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SET_PROFILE":
            return {
                ...state,
                userProfile: action.payload,
            }
        case "SET_MANAGER_SERVICES":
            return {
                ...state,
                userProfile:{
                    ...state.userProfile,
                    services:action.payload
                }
            }


        default:
            return state;
    }
}



export default profileReducer;
