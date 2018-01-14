import React from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux'
import googleMap from './state/googlemap';


export class GoogleMap extends React.Component {

  componentWillMount() {
    this.props = googleMap;
  }

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyCe_5-3OmWWpruR_opeNr8kCrTWDBY3WLA',
          language: 'pl'
        }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      </GoogleMapReact>
    );
  }
}

const mapStateToProps = state => ({
  googlemap: state.googlemap
})

export default connect(
  mapStateToProps,
  null
)(GoogleMap)

