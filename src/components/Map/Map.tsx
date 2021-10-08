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
    isDestroy: boolean;
}

const MapWrapper = React.memo(
    () => {
        return <div id="map-container" style={{ width: '100%', height: '500px' }}></div>;
    },
    () => true,
);

export const Map2GIS: React.FC<IProps> = ({ lat, lon, points, isDestroy }) => {
    const { mapInstance, setMapInstance } = React.useContext(MapContext);
    const [pointMarkers, setPointMarkers] = React.useState<Marker[]>([])


    if (isDestroy && pointMarkers.length) {
        pointMarkers.forEach(m => {
            m && m.destroy?.()
        })
    }

    useEffect(() => {

        let userMarker: Marker;
        load().then((mapglAPI) => {
            const map = new mapglAPI.Map('map-container', {
                center: [lon, lat],
                zoom: 13,
                key: '810c6285-76cf-4577-a0ce-775d22bc3adb',
            });

            userMarker = new mapglAPI.Marker(map, {
                coordinates: [lon, lat],
            });

            setMapInstance(map);

            if (points.length) {
                points.forEach((point, index) => {
                    const marker = new mapglAPI.Marker(map, {
                        coordinates: [point.lon, point.lat],
                        icon: 'https://docs.2gis.com/img/mapgl/marker.svg',
                        label: {
                            text: String(index + 1),
                            fontSize: 28,
                            color: '#1411ee',
                            offset: [0, 25]
                        }
                    });

                    pointMarkers.push(marker)
                })
                setPointMarkers(pointMarkers)
            }
        });

        // Destroy the map on unmounted
        return () => {
            mapInstance && mapInstance.destroy?.();
            userMarker && userMarker.destroy?.()
            pointMarkers.forEach(pointMarker => pointMarker && pointMarker.destroy?.())
        }
    }, [points, isDestroy]);

    return (
        <MapWrapper />
    )
}