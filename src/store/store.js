import { createStore, applyMiddleware,compose  } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import rootReducer from './reducers/rootReducer'
import thunk from "redux-thunk";


const persistConfig = {
    key:'root',
    storage: AsyncStorage,
    whitelist: ["authReducer", "profileReducer","carsReducer","ordersReducer"]
}


const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));


// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {
    store,
    persistor,
};
