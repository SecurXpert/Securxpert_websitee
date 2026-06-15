"use client";

import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const offices = [
  {
    id: 1,
    name: "Hyderabad HQ",
    lat: 17.4477519,
    lng: 78.3616521,
    address: "Third Floor, PR R One Towers, Plot No 59, DLF Rd, near Radisson Hotel, Jayabheri Enclave, Gachibowli, Hyderbad, Hyderabad, Telangana 500032",
  },
  {
    id: 2,
    name: "UK Office",
    lat: 51.507351,
    lng: -0.127758,
    address: "London, UK", 
  },
];

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

export default function OfficeMap() {
  const openGoogleMaps = (lat, lng) => {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
  };

  return (
    <div className="w-full relative mt-16 rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100">
      <MapContainer
        center={[35, 30]}
        zoom={2.5}
        className="h-[500px] w-full"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {offices.map((office) => (
          <Marker
            key={office.id}
            position={[office.lat, office.lng]}
            icon={customIcon}
          >
            <Popup className="rounded-xl">
              <div className="text-center p-1">
                <h3 className="font-bold text-[#2C2F8D] text-lg mb-1">
                  {office.name}
                </h3>
                <p className="text-slate-500 text-sm mb-3">{office.address}</p>
                <button
                  onClick={() => openGoogleMaps(office.lat, office.lng)}
                  className="bg-[#3D62EB] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full"
                >
                  View Location
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Overlay Badge like the image */}
      <div className="absolute bottom-6 left-6 z-[1000] bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-xl shadow-lg border border-slate-100/50 flex items-center gap-2">
        <span className="font-bold text-[#2C2F8D]">2 Locations</span>
        <span className="text-slate-400">•</span>
        <span className="text-slate-500">Global Presence</span>
      </div>
    </div>
  );
}
