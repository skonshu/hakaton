import { Col, Row, Button, Alert, RadioChangeEvent, Progress } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { Map2GIS } from '../../components/Map/Map'
import { convertQueryParams } from './utils'
import { IPoint, IQueryParams } from './interfaces'
import { MainContext } from './context'
import { PointList } from './parts/PointList'
import { CalculateRoutes } from './parts/CalculateRoutes'
import axios from 'axios'
import { GET_INITIAL_POINTS_ENDPOINT, MAIN_URL, START_CALC_ENDPOINT, TRANSPORT_TYPE } from '../../constants'
import { useLocation } from 'react-router-dom';
import './styles.css'

interface IPointsResponse {
    data: {
        points: IPoint[]
    }
}

interface IPointsRequest {
    employeeId: number;
    date: string;
}
interface IPointsCalculateRequest extends IPointsRequest {
    lat: number;
    lon: number;
    movmentType: TRANSPORT_TYPE
}

export const Main = (props: any) => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [isError, setIsError] = useState(false)
    const [currentStep, setCurrentStep] = useState(1)
    const [points, setPoints] = useState<IPoint[]>([])
    const [movmentType, setMovementType] = useState(TRANSPORT_TYPE.CAR)
    const search = useLocation().search;

    const employeeId = new URLSearchParams(search).get('emploee_id');
    const lat = new URLSearchParams(search).get('lat');
    const lon = new URLSearchParams(search).get('lon');
    const currentDate = new URLSearchParams(search).get('currentDate');

    const convertedQueryParams: IQueryParams = convertQueryParams({
        employeeId,
        lat,
        lon,
        currentDate
    })

    // const convertedQueryParams =
    // {
    //     employeeId: 1125,
    //     date: '2021-10-07',
    //     lon: 37.3376426,
    //     lat: 55.7386526,
    // }
    useEffect(() => {

        setMessage('')
        setIsError(false)
        const getInitialPoints = async () => {
            try {
                setLoading(true)
                const response = await axios.post<IPointsRequest, IPointsResponse>(`${MAIN_URL}${GET_INITIAL_POINTS_ENDPOINT}`,
                    {
                        employeeId: convertedQueryParams.employeeId, date: convertedQueryParams.currentDate,
                    },
                );
                setPoints(response?.data?.points || [])
                if (Array.isArray(response?.data?.points) && response?.data?.points.length === 0) {
                    setMessage(`На сегодня точек больше нет!`)
                }

            } catch (err) {
                setMessage(`Ошибка получения точек: ${err}`)
                setIsError(true)
                setTimeout(handleCloseAlert, 5000)
            } finally {
                setLoading(false)
            }
        }
        getInitialPoints()

    }, [])


    const startCalc = async () => {
        try {
            setLoading(true)
            const response = await axios.post<IPointsCalculateRequest, IPointsResponse>(`${MAIN_URL}${START_CALC_ENDPOINT}`,
                {
                    employeeId: convertedQueryParams.employeeId,
                    lat: convertedQueryParams.lat,
                    lon: convertedQueryParams.lon,
                    date: convertedQueryParams.currentDate,
                    movmentType: movmentType
                }
            )
            setPoints(response?.data?.points || [])

        } catch (err) {
            setMessage(`Ошибка расчета маршрута: ${err}`)
            setIsError(true)
            setTimeout(handleCloseAlert, 5000)
        } finally {
            setLoading(false)
        }
    }

    const handleStartCalc = () => {
        startCalc()
    }
    const handleChangeMovmentType = (e: RadioChangeEvent) => {
        e.preventDefault()
        setMovementType(e.target.value)
    }

    const handleCloseAlert = () => {
        setMessage('')
        setIsError(false)
    }
    const handleChangeStep = (current: number) => {
        setCurrentStep(current)
    }

    return (
        <MainContext.Provider value={{
            initialUserParams: convertedQueryParams,
        }}>
            <Row>
                <Col md={24}>
                    {message &&
                        <div className="alert-message">
                            <Alert message={message}
                                type={isError ? 'error' : 'success'}
                                closable={true}
                                onClose={handleCloseAlert}
                            />
                        </div>
                    }
                </Col>
            </Row>
            <Row >
                <Col md={6} style={{ textAlign: "center" }}>
                    <Progress style={{ marginBottom: "2rem" }} strokeLinecap="square" type="circle" percent={Math.round(((currentStep + 1) / points.length) * 100)} />
                    <PointList
                        handleChangeStep={handleChangeStep}
                        loading={loading}
                        points={points}
                        currentStep={currentStep}
                    />
                </Col>
                <Col md={18} >

                    {
                        !!points.length &&
                        <>
                            <CalculateRoutes
                                handleStartCalc={handleStartCalc}
                                handleChangeMovmentType={handleChangeMovmentType}
                                isDdisableButton={loading}
                            />
                            <Map2GIS lat={convertedQueryParams.lat} lon={convertedQueryParams.lon} points={points} />
                        </>
                    }

                </Col>
            </Row>

        </MainContext.Provider>

    )
}

