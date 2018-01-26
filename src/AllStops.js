import React from 'react';
import { connect } from 'react-redux'
import { getAllStops } from './state/stops'

class AllStops extends React.Component {

  componentDidMount() {
    this.props.getAllStops()
  }

  render() {
    const { stops } = this.props
    return (
      stops === null
        ? <p>loading...</p>
        : (
          <div>
            <h2>Stops</h2>
            <ul>
              {
                stops.map(
                  (stop, index) => (
                    <li key={index}>
                      {stop.lastUpdate}
                      <ul>
                        {
                          stop.stops.map(
                            (stop, index) => (
                              <li key={index}>
                                {stop.stopShortName}
                                {' / '}
                                {stop.stopDesc}
                                {' / '}
                                {stop.stopLat}
                                {' / '}
                                {stop.stopLon}
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
  getAllStops: () => dispatch(getAllStops())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStops)