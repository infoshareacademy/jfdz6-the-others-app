import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'
import firebase from 'firebase'
import auth from './state/auth'


// Initialize Firebase
const config = {
  apiKey: "AIzaSyBBbVqRgegNjQMmLZcjbR6rkzidESL-6ms",
  authDomain: "theothers-isa.firebaseapp.com",
  databaseURL: "https://theothers-isa.firebaseio.com",
  projectId: "theothers-isa",
  storageBucket: "theothers-isa.appspot.com",
  messagingSenderId: "38766158029"

};
firebase.initializeApp(config);

const reducer = combineReducers({
  auth,
  data:[]
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  persistState([]/* config*/),
)

const store = createStore(
  reducer,
  enhancer
)

store.dispatch({ type: 'RESET' })

window.store = store

export default store