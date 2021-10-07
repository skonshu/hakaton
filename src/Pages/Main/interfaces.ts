export interface IQueryParams {
    currentDate: string;
    employeeId: number;
    lat: number
    lon: number
}

export interface IPoint {
    id: number;
    address: string;
    lat: number;
    lon: number;
    pointName: string;
}

export interface IMainContext {
    initialUserParams?: IQueryParams;
    initialPoints?: IPoint[];
    calculatedPoints?: IPoint[];
}