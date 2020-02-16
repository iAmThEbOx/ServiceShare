import React from 'react';
import * as http from '../../services/http';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-map-react';

class MapWrapper extends React.Component {
    state={
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    }
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={11}
                style={{width: '80vw', height: '80vh'}}
                initialCenter={this.props.location}
            >
                
            </Map>
        )
    }
    
    onMarkerClick = (props, marker, e) => {
        this.setState({
            showingInfoWindow: true,
            activeMarker: marker,
            selectedPlace: props,
        });
    }

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
            });
        }
    }

    getMarkers() {
        http.filterEvents(this.props).map(i =>
            <Marker
                onClick={this.onMarkerClick}
                name={this.props.title}
                />
        )
    }

    
}

export default GoogleApiWrapper({
    BootstrapURLKeys: {key: 'AIzaSyA3mPv3TdBjVZgkCI3jVQPP_9E5_YdDn8s', language: 'en'}
})

// {events, type, minDate, maxDate, distance, location}