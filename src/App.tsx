import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './index.css';
import 'antd/dist/antd.css';
import { Footer } from 'antd/lib/layout/layout';
import logo from './assets/logo.png'
import { Main } from './Pages/Main/Main';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const { Header, Content } = Layout;

export const App = () => (
    <Router >
        <Layout>
            {/* <Header className="header">
                <img src={logo} alt="torchlight in the sky" className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>

                    <Menu.Item key="1">Расчет оптимального маршрута</Menu.Item>

                </Menu>
            </Header> */}

            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Link to="/">Главная</Link></Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                    }}
                >
                    <Switch>
                        <Route component={Main} />
                    </Switch>
                </Content>
            </Layout>
            <Footer />
        </Layout>
    </ Router>
)