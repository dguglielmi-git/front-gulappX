// import React, { useState, useEffect } from "react";
// import {
//     withGoogleMap,
//     withScriptjs,
//     GoogleMap,
//     Marker,
//     InfoWindow
// } from "react-google-maps";



// function Map({ globalState }) {
//     console.log("global", globalState.geo[0])
//     return (
//         <GoogleMap
//             defaultZoom={10}
//             defaultCenter={{ lat: globalState.geo[0], lng: globalState.geo[1] }}
//         >

//             <Marker
//                 position={{
//                     lat: globalState.geo[0],
//                     lng: globalState.geo[1]
//                 }}
//             />
//         </GoogleMap>
//     );
// }

// const MapWrapped = withScriptjs(withGoogleMap(withGlobalState(Map)));

// function MapContainer() {
//     return (
//         <div style={{ width: "1200px", height: "300px" }}>
//             <MapWrapped
//                 googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBrhzWJdc39KNMGzUNLte74u8jEcv-6lqw`}
//                 loadingElement={<div style={{ height: `100%` }} />}
//                 containerElement={<div style={{ height: `100%` }} />}
//                 mapElement={<div style={{ height: `100%` }} />}
//             />
//         </div>
//     );
// }


// export default withGlobalState(MapContainer);


import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";


const MyMapComponent = compose(
    withProps({
        /**
         * Note: create and replace your own key in the Google console.
         * https://console.developers.google.com/apis/dashboard
         * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
         */
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyBrhzWJdc39KNMGzUNLte74u8jEcv-6lqw&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `300px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={14} defaultCenter={{ lat: props.geo[0], lng: props.geo[1] }}>
        <Marker position={{ lat: props.geo[0], lng: props.geo[1] }} />
        <Marker position={{ lat: -34.617360, lng: -58.381640 }} />
    </GoogleMap>
));

export default MyMapComponent;