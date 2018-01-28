import React, { Component } from 'react'
import { LinePicker } from './LinePicker'
import GoogleMap from './Googlemap'
import { getAllStops } from './state/stops'
import { getStopsInTrip } from './state/stops'


class ShowTrack extends Component {

  componentDidMount() {
    this.props.getAllStops();
    this.props.getStopsInTrip();
  }

  constructor(props) {
    super(props);
    this.state = {
      line: "2",
      stopSequence: []
    };
    this.changeLine = this.changeLine.bind(this);
  }

  changeLine(newLine) {
    this.setState({
      line: newLine,
      stopSequence: []
    })
  }



  render() {

    const { dataStopsInTrip } = this.props.data_stops_in_trip;
    const { dataStops } = this.props.data_stops;


    return (
      <div className="showTrack">
        Poniższa funkcjonalność umożliwia Ci zobaczenie trasy dowolnej linii tramwajowej lub autobusowej w Gdańsku!
        <LinePicker line={this.state.line} onChange={this.changeLine}/>
        <div style={{width: '100%', height: '400px'}}>
          <GoogleMap />
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   showtrack: state.showtrack
// });
//
// export default connect(
//   mapStateToProps,
//   null
// )(ShowTrack);

export default ShowTrack;
