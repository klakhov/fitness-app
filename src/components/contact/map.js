import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB6Jj5CDBHeryYsC7Fb9jj8d47PMqfXq0g"
    });

    const [map, setMap] = React.useState(null);

    const containerStyle = {
        width: '600px',
        height: '400px'
    };

    const center = {
        lat: 56.32089,
        lng: 44.04284
    };
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
        setTimeout(()=>{map.setCenter(center)}, 1000);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { <Marker position={center}/> }
            <></>
        </GoogleMap>
    ) : <></>
}

export default Map;