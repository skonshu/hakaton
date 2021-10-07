import { Button, Col, Divider, Radio, RadioChangeEvent, Row } from "antd";

import React from "react";

import { CarFilled } from '@ant-design/icons'
import { TRANSPORT_TYPE } from "../../../../constants";


interface IProps {
    isDdisableButton: boolean;
    handleStartCalc: () => void
    handleChangeMovmentType: (e: RadioChangeEvent) => void;
}

export const CalculateRoutes: React.FC<IProps> = ({ handleStartCalc, handleChangeMovmentType, isDdisableButton }) => {
    return (<>
        <Row justify="center">
            <Col md={24}>
                <Radio.Group defaultValue={TRANSPORT_TYPE.CAR} buttonStyle="solid" onChange={handleChangeMovmentType}>
                    <Radio.Button value={TRANSPORT_TYPE.CAR}><CarFilled /></Radio.Button>
                    <Radio.Button value={TRANSPORT_TYPE.BICYCLE}>Велосипед</Radio.Button>
                    <Radio.Button value={TRANSPORT_TYPE.PEDO}>Пешком</Radio.Button>
                </Radio.Group>
            </Col>
        </Row>
        <Divider />
        <Row justify="center" >
            <Col md={24}>
                <Button size="large" type="primary" onClick={handleStartCalc} disabled={isDdisableButton}>
                    Построить маршрут
                </Button>
            </Col>
        </Row>
    </>

    )
}