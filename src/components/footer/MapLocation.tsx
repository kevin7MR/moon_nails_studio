"use client";
import { Link } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

const center: [number, number] = [20.6793, -103.3551];

export default function MapLocation() {
    useEffect(() => {
        // Fix leaflet default icon issue in Next.js
        // @ts-ignore
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
            iconRetinaUrl:
                "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
            shadowUrl:
                "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        });
    }, []);

    return (
        <MapContainer
            center={center}
            zoom={16}
            style={{ height: "300px", width: "100%", borderRadius: "10px", marginTop: "20px" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
                <Popup>
                    Moon Nails Studio <br /> Av. Juan Manuel 1380
                    <br />
                    <Link
                        href={`https://www.google.com/maps/search/?api=1&query=${center[0]},${center[1]}`}
                        target="_blank"
                        rel="noopener"
                    >
                        Ver en Google Maps
                    </Link>
                </Popup>
            </Marker>
        </MapContainer>
    );
}
