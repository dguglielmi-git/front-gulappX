import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBrhzWJdc39KNMGzUNLte74u8jEcv-6lqw&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: props.geo[0], lng: props.geo[1] }}
  >
    <Marker position={{ lat: props.geo[0], lng: props.geo[1] }} />
    <Marker position={{ lat: -34.61736, lng: -58.38164 }} />
  </GoogleMap>
));

export default MyMapComponent;
