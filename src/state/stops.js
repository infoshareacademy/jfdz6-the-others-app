const ADD_ALL_STOPS = 'ADD_ALL_STOPS'
const ADD_STOPS_IN_TRIP = 'ADD_STOPS_IN_TRIP'

export const getAllStops = () => dispatch => {
  fetch(
    '/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/cd4c08b5-460e-40db-b920-ab9fc93c1a92/download/stops.json'
  ).then(
    response => response.json()
  ).then(
    resp => Object.values(resp).map(
      ({lastUpdate, stops}) => ({
        lastUpdate,
        stops: stops.map(
          ({stopShortName, stopDesc, stopLat, stopLon}) => ({stopShortName, stopDesc, stopLat, stopLon})
        )
      })
    )
  ).then(
    data_stops => dispatch({type: ADD_ALL_STOPS, data_stops})
  ).catch(
    error => console.log(error)
  )
}

export const getStopsInTrip = () => dispatch => {
  fetch(
    '/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/0f2de200-e78b-4183-ae0d-071d7f07fc3f/download/stopsintrips.json'
  ).then(
    response => response.json()
  ).then(
    resp => Object.values(resp).map(
      ({lastUpdate, stopsInTrip}) => ({
        lastUpdate,
        stopsInTrip: stopsInTrip.map(
          ({routeId, tripId, stopId, stopSequence}) => ({routeId, tripId, stopId, stopSequence})
        )
      })
    )
  ).then(
    data_stops_in_trip => dispatch({type: ADD_STOPS_IN_TRIP, data_stops_in_trip})
  ).catch(
    error => console.log(error)
  )
}

const initialState = {
  data_stops: null,
  data_stops_in_trip: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_ALL_STOPS:
      return {
        ...state,
        data_stops: action.data_stops
      }
    case ADD_STOPS_IN_TRIP: {
      return {
        ...state,
        data_stops_in_trip: action.data_stops_in_trip
      }
    }
    default:
      return state
  }
}