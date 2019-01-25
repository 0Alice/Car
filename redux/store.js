import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {combineReducers} from 'redux';
import yReducer from './reducer';


const reducer = combineReducers({
  reducerY: yReducer, //pierwsze to klucz którego używam w widokach, a drugie to nazwa reducera z pliku reducer.js
});

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 
 };
 
 const pReducer = persistReducer(persistConfig, reducer);
 
 export const store = createStore(pReducer);
 export const persistor = persistStore(store);



/*
store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))
store.dispatch(updateUser({foo: 'baz'}))
*/
/*
store.dispatch(addContact({name: 'jordan h', phone: '1234567890'}))
store.dispatch(addContact({name: 'jordan h', phone: '1234567890'}))
store.dispatch(addContact({name: 'david m', phone: '5050505050'}))
*/
//console.log(store.getState());

//export default store;
