import firebase from 'firebase'

const SET_USER = 'auth/SET_USER'
const ERROR = 'auth/ERROR'
const LOG_OUT = 'auth/LOG_OUT'


const initialState = {
  data: null,
  error: null
}

let unsubscribe = null
export const enableSync = () => dispatch => {
  dispatch(disableSync())
  unsubscribe = firebase.auth().onAuthStateChanged(
    user => {
      return dispatch({ type: SET_USER, data: user })
    }
  )
}

export const disableSync = () => dispatch => {
  if (unsubscribe !== null) {
    unsubscribe()
  }
}

export const signUp = (email, password, username) => dispatch => {
  firebase.auth().createUserWithEmailAndPassword(
    email,
    password
  ).then(
    (user) => {
      user.updateProfile({displayName: username, photoURL: ""}).then(
        () => dispatch({type: SET_USER, data: {...user}})
      ).catch( console.warn )
    }
  ).catch(
    error => dispatch({type: ERROR, error})
  )
}

export const logIn = (email, password) => dispatch => {
  firebase.auth().signInAndRetrieveDataWithEmailAndPassword(
    email,
    password
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
