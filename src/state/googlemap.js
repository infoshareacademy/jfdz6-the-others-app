const initialState = {
  center: {lat: 54.3520, lng: 18.6466},
  zoom: 11,
  stops: [{lat: 54.3500, lng: 18.6465}, {lat: 54.24356, lng: 18.33598}]
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    default:
      return state
  }
}
