import React, { Component } from 'react'
import { LinePicker } from './LinePicker'
import GoogleMap from './Googlemap'

class ShowTrack extends Component {

  constructor(props) {
    super(props);
    this.state = { line: 2 };
    this.changeLine = this.changeLine.bind(this);
  }

  changeLine(newLine) {
    this.setState({
      line: newLine
    })
  }

  

  render() {
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
