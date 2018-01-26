const ADD_BUS_STOP = 'Busys/ADD_BUS_STOP'

export const getBus = () => dispatch => {
    fetch(
        '/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/4128329f-5adb-4082-b326-6e1aea7caddf/download/routes.json'
    ).then(
        response => response.json()
    ).then(
        resp => Object.values(resp).map(
            ({lastUpdate, routes}) => ({
                lastUpdate,
                routes: routes.map(
                    ({routeShortName, routeLongName, activationDate}) => ({routeShortName, routeLongName, activationDate})
                )
            })
        )
    ).then(
        data => dispatch({type: ADD_BUS_STOP, data})
    ).catch(
        error => console.log(error)
    )
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