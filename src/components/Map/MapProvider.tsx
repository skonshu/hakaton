import { Map } from '@2gis/mapgl/types';
import React from 'react'
export const MapContext = React.createContext({
    mapInstance: {} as Map,
    setMapInstance: (map: Map) => { },
})

export const MapProvider: React.FC = (props) => {
    const [mapInstance, setMapInstance] = React.useState({} as Map);

    return (
        <MapContext.Provider value={{ mapInstance, setMapInstance }}>
            {props.children}
        </MapContext.Provider>
    );
};