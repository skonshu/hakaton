import { IQueryParams } from "./interfaces"

export const convertQueryParams = (parsed: Record<string, any>) => Object.keys(parsed).reduce((acc, key) => {
    if (key === 'currentDate' && parsed.currentDate) {
        return { ...acc, currentDate: parsed.currentDate.trim() }
    }
    if (key === 'employeeId' && parsed.employeeId) {
        return { ...acc, employeeId: Number(parsed.employeeId.trim()) }
    }
    if (key === 'lat' && parsed.lat) {
        return { ...acc, lat: Number(parsed.lat.trim()) }
    }
    if (key === 'lon' && parsed.lon) {
        return { ...acc, lon: Number(parsed.lon.trim()) }
    }
    return acc
}, {} as IQueryParams)