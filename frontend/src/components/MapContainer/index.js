import React, { useState } from 'react';

import './index.css';

import {
    GoogleApiWrapper,
    Map,
    InfoWindow,
    Marker,

} from 'google-maps-react';

const LoadingMapContainer = () => (
    <div>Mapa está carregando...</div>
);

const MapPointerLabelContainer = (currentLocationName) => (
    <div>
        <h1 style={{ color: '#7159c1' }}>{currentLocationName}</h1>
    </div >
);

const containerStyle = {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': '',
    width: '100%',
    height: '100%'
}



const MapContainer = ({ google }) => {
    const [showingInfoWindow, setShowingInfoWindow] = useState(false);
    const [activeMarker, setActiveMarker] = useState({});
    const [selectedPlace, setSelectedPlace] = useState('');

    const onMarkerClick = ({ name }, marker, e) => {
        setSelectedPlace(name);
        setActiveMarker(marker);
        setShowingInfoWindow(true);
    };

    const onMapClick = () => {
        if (showingInfoWindow) {
            setShowingInfoWindow(false);
            setActiveMarker(null);
        }
    };

    return (
        <section className="map-container">
            <Map
                containerStyle={{ position: 'relative', height: '100%', width: '100%' }}
                initialCenter={{
                    lat: -30.013799,
                    lng: -51.107678,
                }}
                zoom={15}
                google={google}
                onClick={onMapClick}
                children={[
                    <Marker
                        name={'Estamos aqui'}
                        onClick={onMarkerClick} />,
                    <InfoWindow
                        marker={activeMarker}
                        visible={showingInfoWindow}
                        children={MapPointerLabelContainer(selectedPlace)} />
                ]}
            />
        </section>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAYNyuxgUmtG755oqFY5tmQ5btUJEXeTyw',
    LoadingContainer: LoadingMapContainer,

})(MapContainer)

export {
    MapContainer,
}

