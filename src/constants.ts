export const MAIN_URL = 'http://84.201.139.152:8080'
// export const MAIN_URL = ''
export const GET_INITIAL_POINTS_ENDPOINT = '/compass/get-point-list'
export const START_CALC_ENDPOINT = '/compass/get-tour'
export enum TRANSPORT_TYPE {
    CAR = 'shortest',
    PEDO = 'pedestrian',
    BICYCLE = 'bicycle'
}