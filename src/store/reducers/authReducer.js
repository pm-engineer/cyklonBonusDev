const initialState = {
    user: null,
    verifyName: null,
    authPassword: null,
    authLogin: null,
    userToken: null,
    existCode: false,
    role: null
}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case "AUTH_USER_SUCCESS":
            return {
                ...state,
                user: action.user,
                userToken: action.userToken
            }

        case "AUTH_USER_FAIL":
            return {
                ...state,
                user:null
            }

        case "SET_EXIST_CODE":
            return {
                ...state,
                existCode:true
            }

        case "SET_AUTH_DATA":
            return {
                ...state,
                verifyName:action.username,
                authPassword: action.password,
                authLogin: action.login,
            }
        case "SET_ROLE_TO_USER":
            return {
                ...state,
                role:'user'
            }
        case "SET_ROLE_TO_MANAGER":
            return {
                ...state,
                role:'manager'
            }


        default:
            return state;
    }
}



export default authReducer;
