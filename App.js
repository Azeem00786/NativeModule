import React from 'react';
import { createStore,combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'
import PlacesNavigator from './navigations/PlacesNavigator';
import placesReducer from './store/places-reducer';
import { init } from './helpers/db';

init().then(
  ()=>{
    console.log('connection to database successfull')
  }
).catch(err=>{
  console.log('Connection to database failed')
  console.log(err)
})

const rootReducer = combineReducers({
  places:placesReducer
})
const store=createStore(rootReducer, applyMiddleware(ReduxThunk))
export default function App() {
  return (
    <Provider store={store}>
    <PlacesNavigator/>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
