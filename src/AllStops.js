import React from 'react';
import { connect } from 'react-redux'
import { getStops } from './state/stops'

class AllStops extends React.Component {

  componentDidMount() {
    this.props.getStops()
  }

  render() {
    const { stops } = this.props
    return (
      stops === null
        ? <p>loading...</p>
        : (
          <div>
            <h2>Przystanki</h2>
            <ul>
              {
                stops.map(
                  (stop, index) => (
                    <li key={index}>
                      {stop.lastUpdate}
                      <ul>
                        {
                          stop.routes.map(
                            (route, index) => (
                              <li key={index}>
                                {route.stopId}
                                {' / '}
                                {route.stopDesc}
                                {' / '}
                                {route.stopLat}
                                {' / '}
                                {route.stopLon}
                              </li>
                            )
                          )
                        }
                      </ul>
                    </li>
                  )
                )
              }
            </ul>
          </div>
        )
    )
  }
}

const mapStateToProps = state => ({
  stops: state.stops.data
})

const mapDispatchToProps = dispatch => ({
  getStops: () => dispatch(getStops())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStops)