import React from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';
import {DrawStops} from './DrawStops';


class GoogleMap extends React.Component {

  render() {
    const {stops, center, zoom} = this.props.googlemap
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyCe_5-3OmWWpruR_opeNr8kCrTWDBY3WLA',
          language: 'pl'
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {
          stops.map(
            (stop, index) => <DrawStops {...stop} text={index + 1}/>
          )
        }

      </GoogleMapReact>
    );
  }
}

const mapStateToProps = state => ({
  googlemap: state.googlemap
});

export default connect(
  mapStateToProps,
  null
)(GoogleMap)
