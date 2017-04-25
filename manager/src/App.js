import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import reducers  from './reducers';
import ReduxThunk from 'redux-thunk';
import Router from './Router';


class App extends Component{

   componentWillMount(){
     var config = {
   apiKey: 'AIzaSyBSY5I4yrh0pedovqpFUD-tFwSGDNxBqNk',
   authDomain: 'anager-d53a8.firebaseapp.com',
   databaseURL: 'https://manager-d53a8.firebaseio.com',
   projectId: 'manager-d53a8',
   storageBucket: 'manager-d53a8.appspot.com',
   messagingSenderId: '694603895039'
 };
 firebase.initializeApp(config);
   }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router/>
      </Provider>
    );
  }
}

export default App;
