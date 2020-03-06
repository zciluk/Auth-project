import React from "react";
import { setUserLocation } from "../actions";
import { connect } from "react-redux";
import L from "leaflet";

import jsonHuts from "../mocks/Wiaty.json";
const hutsData = jsonHuts.features;
const greenIcon = new L.Icon({
  iconUrl:
    "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});
const customOptions = {
  maxHeight: 200
};
class MapContainer extends React.Component {
  componentDidMount() {
    this.map = L.map("map").setView([this.props.lat, this.props.long], 2);
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19
      }
    ).addTo(this.map);
    if (L.Browser.mobile) {
      this.map.removeControl(this.map.zoomControl);
    }
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.props.setUserLocation(
          position.coords.latitude,
          position.coords.longitude
        );
        this.map.setView([this.props.lat, this.props.long], 10);
        L.marker([this.props.lat, this.props.long])
          .addTo(this.map)
          .bindPopup("Your position")
          .openPopup();
      },
      err => {},
      {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
      }
    );

    hutsData.forEach(item => {
      L.marker([item.geometry.coordinates[1], item.geometry.coordinates[0]], {
        icon: greenIcon
      })
        .addTo(this.map)
        .bindPopup(
          `<p><b>${item.properties.Name}</b></p>${item.properties.description}`,
          customOptions
        );
    });
  }

  render() {
    return (
      <div
        className="ui fluid container"
        id="map"
        style={{
          minHeight: "92vh",
          minWidth: "100%",
          margin: 0,
          position: "absolute"
        }}
      ></div>
    );
  }
}

const mapStateToProps = state => {
  return { lat: state.map.latitude, long: state.map.longitude };
};
export default connect(mapStateToProps, { setUserLocation })(MapContainer);
