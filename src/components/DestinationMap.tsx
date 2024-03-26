import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet/dist/leaflet.css";
import * as Leaflet from "leaflet";
import "./DestinationMap.css";

export const testSearch = async () => {
  // setup
  const provider = new OpenStreetMapProvider();

  // search
  const results = await provider.search({ query: "บางกะปิ, กรุงเทพมหานคร" });
  console.log(results);
};

export const DestinationMap = () => {
  // useEffect(() => {
  //   const callTestSearch = async () => {
  //     await testSearch();
  //   };
  //   callTestSearch();
  // }, []);
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      className=""
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>This is a popup</Popup>
      </Marker>
    </MapContainer>
  );
};
