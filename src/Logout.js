import React from 'react';
import {connect} from 'react-redux';
import {logOut} from './state/auth';

const Logout = ({shouldBeVisible, logOut}) => (
  shouldBeVisible &&
  <button
    onClick={logOut}
  >
    Log out
  </button>
)

export default connect(
  state => ({
    shouldBeVisible: state.auth.data !== null
  }),
  dispatch => ({
    logOut: () => dispatch(logOut())
  })
)(Logout);