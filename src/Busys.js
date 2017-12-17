import React from 'react';

const ADD_BUS_STOP = 'Busys/ADD_BUS_STOP'

export default class Busys extends React.Component {

  constructor(props) {
    super(props)
    fetch(
      'http://91.244.248.19/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/4128329f-5adb-4082-b326-6e1aea7caddf/download/routes.json'
    ).then(
      response => response.json()
    ).then(
      resp =>Object.values(resp).map(
          ({ lastUpdate, routes }) => ({
            lastUpdate,
            routes: routes.map(
              ({ routeShortName, routeLongName, activationDate }) => ({ routeShortName, routeLongName, activationDate })
            )
          })
        )
    ).then(
      data => dispatch({ type: ADD_BUS_STOP, data })
    ).catch(
      error => console.warn(error)
    )
  }

  render() {

    return (
      <h2>aaa</h2>
    )
  }
}

const initialState = {
  data: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case ADD_BUS_STOP:
  return {
    ...state,
    data: action.data,
   }
    default:
      return state
  }
}