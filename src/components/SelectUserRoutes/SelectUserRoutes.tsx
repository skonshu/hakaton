import { Alert, Button, Form, List, Select, Space } from 'antd'
import { useForm } from 'antd/lib/form/Form'

import React, { useState } from 'react'
interface Option {
    label: string;
    value: string | number;
}

const PointOptions1: Option[] = [
    { label: 'Точка 1', value: '55.111111' },
    { label: 'Точка 2', value: '55.333111' },
    { label: 'Точка 3', value: '55.441111' },
    { label: 'Точка 4', value: '55.551111' },
]
const PointOptions2: Option[] = [
    { label: 'Точка 1111', value: '76.111111' },
    { label: 'Точка 22222', value: '77.333111' },
    { label: 'Точка 33333', value: '77.441111' },
    { label: 'Точка 44444', value: '77.551111' },
]

const userOptions = [
    { label: 'Петров Иван Иванович', value: 1 },
    { label: 'Смирнов Василий Иванович', value: 2 },
]

export const SelectUserRoutes: React.FC = () => {
    const [form] = useForm()
    const [routesList, setRoutesList] = useState<Array<{ position: number; title: string }>>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [pointOptions, setPointOptions] = useState<Option[]>([])
    const handleCalculate = () => {
        form.validateFields().then((values) => {
            onSubmit(values)
        })
    }
    const onCloseAlert = () => {
        setError('')
    }

    const onSubmit = (values: Record<string, string[]>) => {
        setError('');
        setRoutesList([])
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            if (values.points) {
                setRoutesList(values.points.map((title, position) => ({ title, position: position + 1 })))
            } else {
                setError('Ошибка расчета')
            }
        }, 2000)
    }

    const onChangeSelectUser = (value: number) => {
        form.resetFields(['points'])
        if (value === 1) {
            setPointOptions(PointOptions1)
        } else if (value === 2) {
            setPointOptions(PointOptions2)
        }

    }

    return (<div style={{ marginRight: '2rem' }}>
        <Form
            form={form}
            onFinish={onSubmit}
            layout="vertical"
        >
            <Form.Item
                name="users"
                label="Сотрудник">

                <Select

                    placeholder="выбор сотрудника"
                    options={userOptions}
                    allowClear={true}
                    onChange={onChangeSelectUser}
                />
            </Form.Item>
            <Form.Item name="points" label="Точки">
                <Select
                    allowClear={true}
                    placeholder="выбор точек"
                    mode="multiple"
                    options={pointOptions}
                />
            </Form.Item>
            <Button type="primary" htmlType="submit" onClick={handleCalculate} size="large"
                loading={loading}
                disabled={loading}>
                <Space>
                    {`Расчитать маршрут`}
                </Space>
            </Button>

            <List style={{ marginTop: '2rem' }}>
                {routesList.map(route => <List.Item.Meta avatar={route.position} title={route.title} />)}
            </List>

            {error &&
                <Alert message={error} type="error" closable={true} onClose={onCloseAlert} />
            }
        </Form>
    </div>)
}