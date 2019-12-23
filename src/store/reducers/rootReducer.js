import { combineReducers } from 'redux';

import authReducer from './authReducer';
import commonReducer from './commonReducer';
import carsReducer from "./carsReducer";
import servicesReducer from "./servicesReducer";
import profileReducer from "./profileReducer";
import ordersReducer from "./ordersReducer";

import { reducer as formReducer } from 'redux-form'


// Redux: Root Reducer
const appReducer = combineReducers({
    authReducer,
    commonReducer,
    carsReducer,
    servicesReducer,
    profileReducer,
    ordersReducer,
    form: formReducer
});


const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_USER') {
        state = {}
    }

    return appReducer(state, action)
}

// Exports
export default rootReducer;
