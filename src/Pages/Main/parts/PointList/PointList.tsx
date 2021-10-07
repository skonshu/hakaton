import { Skeleton, Steps } from "antd";

import React from "react";
import { IPoint } from "../../interfaces";
import './styles.css'
const { Step } = Steps;

interface IProps {
    loading: boolean;
    currentStep: number;
    handleChangeStep: (current: number) => void;
    points: IPoint[]
}



export const PointList: React.FC<IProps> = ({
    loading,
    currentStep,
    handleChangeStep,
    points
}) => {


    return (
        <div className="container">
            {loading && <Skeleton loading={loading} paragraph={{ rows: 6 }} />}
            <Steps current={currentStep} onChange={handleChangeStep} direction="vertical">

                {
                    points.map(point => <Step key={point.id} title={point.pointName} description={point.address} />)
                }
            </Steps>

        </div>
    )
}