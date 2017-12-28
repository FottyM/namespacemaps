import React, {Component} from 'react'
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps"

const Map = (props) => {
    return(
        <GoogleMap defaultZoom={14} defaultCenter={{ lat: 59.436961, lng: 24.753575 }} >
            { props.isMarkerShown && <Marker position={{ lat: 59.440302, lng: 24.730345}} />}
            { props.isMarkerShown && <Marker position={{ lat: 59.440302, lng: 24.740345}} />}
            { props.isMarkerShown && <Marker position={{ lat: 59.440302, lng: 24.750345}} />}
        </GoogleMap>
    )
}

export default withGoogleMap(Map);
