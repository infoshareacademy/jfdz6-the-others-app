const ADD_ALL_STOPS = 'ADD_ALL_STOPS';

export const getStops = () => dispatch => {
    // fetch(
    //     'http://91.244.248.19/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/cd4c08b5-460e-40db-b920-ab9fc93c1a92/download/stops.json'
    // )
    fetch('../public/stops.json')
  .then(response => response.json()).then(
        resp => Object.values(resp).map(
            ({lastUpdate, stops}) => ({
                lastUpdate,
                stops: stops.map(
                    ({stopId, stopDesc, stopLat, stopLon}) => ({stopId, stopDesc, stopLat, stopLon})
                )
            })
        )
    ).then(
        data => dispatch({type: ADD_ALL_STOPS, data})
    ).catch(
        error => console.log(error)
    )
}

const initialState = {
    data: null
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_ALL_STOPS:
            return {
                ...state,
                data: action.data,
            }
        default:
            return state
    }
}