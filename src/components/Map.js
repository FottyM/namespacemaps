import React, {Component} from 'react'
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps"

const Map = (props) => {

    const markers = props.markers;

    return(
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 59.436961, lng: 24.753575 }} >
            { markers.map ( marker => {
                const lng = marker.address.location.coordinates[0];
                const lat = marker.address.location.coordinates[1];
                console.log(lat,lng)
                return(
                    <Marker key={marker.id} position={{ lat, lng}} />
                )
            }) }
        </GoogleMap>
    )
}

export default withGoogleMap(Map);
