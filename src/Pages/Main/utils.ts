import { IQueryParams } from "./interfaces"

export const convertQueryParams = (parsed: Record<string, any>) => Object.keys(parsed).reduce((acc, key) => {
    if (key === 'date' && parsed.date) {
        return { ...acc, date: parsed.data.trim() }
    }
    if (key === 'employee_id' && parsed.employee_id) {
        return { ...acc, employeeId: Number(parsed.employee_id.trim()) }
    }
    if (key === 'lat' && parsed.lat) {
        return { ...acc, lat: Number(parsed.lat.trim()) }
    }
    if (key === 'lon' && parsed.lon) {
        return { ...acc, lon: Number(parsed.lon.trim()) }
    }
    return acc
}, {} as IQueryParams)