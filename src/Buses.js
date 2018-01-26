import React from 'react';
import { connect } from 'react-redux'
import { getBus } from './state/buses'

class Buses extends React.Component {

  componentDidMount() {
    this.props.getBus()
  }

  render() {
    const { buses } = this.props
    return (
      buses === null
        ? <p>loading...</p>
        : (
          <div>
            <h2>Bus routes</h2>
            <ul>
              {
                buses.map(
                  (bus, index) => (
                    <li key={index}>
                      {bus.lastUpdate}
                      <ul>
                        {
                          bus.routes.map(
                            (route, index) => (
                              <li key={index}>
                                {route.routeShortName}
                                {' / '}
                                {route.routeLongName}
                                {' / '}
                                {route.activationDate}
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
  buses: state.buses.data
})

const mapDispatchToProps = dispatch => ({
  getBus: () => dispatch(getBus())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buses)