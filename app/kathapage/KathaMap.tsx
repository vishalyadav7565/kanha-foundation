"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

const markers = [
  { name: "Prayagraj", coordinates: [81.8463, 25.4358] },
  { name: "Varanasi", coordinates: [83.0104, 25.3176] },
  { name: "Ayodhya", coordinates: [82.1998, 26.7922] },
];

export default function KathaMap() {
  return (
    <div className="max-w-5xl mx-auto py-16">

      <h2 className="text-3xl font-bold text-center mb-10">
        Katha Locations
      </h2>

      <ComposableMap projection="geoMercator">

        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#FFE4C4"
                stroke="#FFF"
              />
            ))
          }
        </Geographies>

        {markers.map((marker, i) => (
          <Marker key={i} coordinates={marker.coordinates}>
            <circle r={6} fill="orange" />
            <text y={-10} textAnchor="middle" className="text-sm">
              {marker.name}
            </text>
          </Marker>
        ))}

      </ComposableMap>
    </div>
  );
}