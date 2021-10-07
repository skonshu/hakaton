import { Map } from '@2gis/mapgl/types';
import React from 'react';
export declare const MapContext: React.Context<{
    mapInstance: Map;
    setMapInstance: (map: Map) => void;
}>;
export declare const MapProvider: React.FC;
