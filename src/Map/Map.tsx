import { load } from '@2gis/mapgl';
import { useEffect } from 'react';
import React from 'react'
import { MapContext } from './MapProvider';

const MapWrapper = React.memo(
    () => {
        return <div id="map-container" style={{ width: '100%', height: '500px' }}></div>;
    },
    () => true,
);
export const Map2GIS = () => {
    const { mapInstance, setMapInstance } = React.useContext(MapContext);
    useEffect(() => {

        load().then((mapglAPI) => {
            const map = new mapglAPI.Map('map-container', {
                center: [37.621543, 55.751534],
                zoom: 13,
                key: '810c6285-76cf-4577-a0ce-775d22bc3adb-',
            });

            setMapInstance(map);
        });

        // Destroy the map on unmounted
        return () => mapInstance && mapInstance.destroy();
    }, []);

    return (
        <MapWrapper />
    )
}