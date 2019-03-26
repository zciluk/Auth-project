import React from 'react';
import { setUserLocation } from '../actions';
import {connect } from 'react-redux';
import L from 'leaflet';
class MapContainer extends React.Component {
    
    componentDidMount () {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.props.setUserLocation(position.coords.latitude, position.coords.longitude);
                
                this.map = L.map('map').setView([this.props.lat, this.props.long], 13);
                L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 19
                
            }).addTo(this.map);
            L.marker([this.props.lat, this.props.long]).addTo(this.map)
            .bindPopup('Your position')
               .openPopup();
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            } 
        )
    }
     /*   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map); */

    /*L.marker([this.props.lat, this.props.long]).addTo(this.map)
    .bindPopup('Your position')
    .openPopup();
    }*/


    render() {
        
        
        return <div id="map" style={{minHeight: "92vh", minWidth: "100vw", padding: 0, margin: 0 }} ></div>;

    }

}

const mapStateToProps = (state) => {
    return { lat: state.map.latitude, long: state.map.longitude }
}
 export default connect(mapStateToProps, { setUserLocation } )(MapContainer);