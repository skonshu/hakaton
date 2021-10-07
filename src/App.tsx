import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';


import './index.css';
import 'antd/dist/antd.css';
import { Map2GIS } from './Map/Map';
import { SelectUserRoutes } from './SelectUserRoutes/SelectUserRoutes';
import { Footer } from 'antd/lib/layout/layout';
import logo from './assets/logo.png'

const { Header, Content } = Layout;

export const App = () => (
    <Layout>
        <Header className="header">
            <img src={logo} alt="torchlight in the sky" className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">Расчет оптимального маршрута</Menu.Item>
            </Menu>
        </Header>

        <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Главная</Breadcrumb.Item>
            </Breadcrumb>
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                }}
            >
                <Row >
                    <Col md={6}>
                        <SelectUserRoutes />
                    </Col>
                    <Col md={18}>
                        <Map2GIS />
                    </Col>
                </Row>
            </Content>
        </Layout>
        <Footer />
    </Layout>
)