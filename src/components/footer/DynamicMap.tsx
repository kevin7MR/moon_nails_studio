"use client";

import dynamic from "next/dynamic";

const MapLocation = dynamic(() => import("./MapLocation"), {
    ssr: false,
    loading: () => <p>Cargando mapa...</p>,
});

export default function DynamicMap() {
    return <MapLocation />;
}
