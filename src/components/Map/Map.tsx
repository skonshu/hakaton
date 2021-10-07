import { load } from '@2gis/mapgl';
import { useEffect } from 'react';
import React from 'react'
import { MapContext } from './MapProvider';
import { Marker } from '@2gis/mapgl/types';
import { IPoint } from '../../Pages/Main/interfaces';
interface IProps {
    lat: number;
    lon: number;
    points: IPoint[];
}

const MapWrapper = React.memo(
    () => {
        return <div id="map-container" style={{ width: '100%', height: '500px' }}></div>;
    },
    () => true,
);

export const Map2GIS: React.FC<IProps> = ({ lat, lon, points }) => {
    const { mapInstance, setMapInstance } = React.useContext(MapContext);
    useEffect(() => {

        let userMarker: Marker;
        let pointMarkers: Marker[];
        load().then((mapglAPI) => {
            const map = new mapglAPI.Map('map-container', {
                center: [lon, lat],
                zoom: 13,
                key: '810c6285-76cf-4577-a0ce-775d22bc3adb-',
            });

            userMarker = new mapglAPI.Marker(map, {
                coordinates: [lon, lat],
            });

            setMapInstance(map);

            if (points.length) {
                points.forEach(point => {
                    const marker = new mapglAPI.Marker(map, {
                        coordinates: [point.lon, point.lat],
                    });
                    pointMarkers.push(marker)
                })
            }
        });

        // Destroy the map on unmounted
        return () => {
            mapInstance && mapInstance.destroy();
            userMarker && userMarker.destroy()
            pointMarkers.forEach(pointMarker => pointMarker && pointMarker.destroy())
        }
    }, []);

    return (
        <MapWrapper />
    )
}