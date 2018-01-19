import firebase from 'firebase'

const SET_USER = 'auth/SET_USER'
const ERROR = 'auth/ERROR'
const LOG_OUT = 'auth/LOG_OUT'


const initialState = {
  data: null,
  error: null
}

export const signUp = (email, password, username) => dispatch => {
  firebase.auth().createUserWithEmailAndPassword(
    email,
    password
  ).
  then(
    user => {
      firebase.database().ref('/users/' + user.uid).set(username)}
  ).then(
    data => dispatch({type: SET_USER, data})
  ).catch(
    error => dispatch({type: ERROR, error})
  )
}

export const logIn = (email, password) => dispatch => {
  firebase.auth().signInWithEmailAndPassword(
    email,
    password
  ).then(
    data => dispatch({type: SET_USER, data})
  ).catch(
    error => dispatch({type: ERROR, error})
  )
}


export const logOut = () => dispatch => {
  firebase.auth().signOut().then(
    () => dispatch({type: LOG_OUT})
  ).catch(
    error => dispatch({type: ERROR, error})
  )
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'RESET':
      return {
        ...state,
        error: null
      }
    case SET_USER:
      return {
        ...state,
        data: action.data,
        error: null
      }
    case LOG_OUT:
      return initialState
    case ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}
