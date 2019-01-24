import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 29.424349, lng: -98.491142 }}
  >
  <Marker
    position={{ lat: -34.397, lng: 150.644 }}
  />
    {//{props.isMarkerShown && <Marker position={{ lat: 29.424349, lng: -98.491142 }} />}//
  }
  </GoogleMap>
))

class Map extends Component {
  render() {
    return(
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyB2zYe9o94C1ECzcD8Kv7gQEKhAaDHuwo0"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Map