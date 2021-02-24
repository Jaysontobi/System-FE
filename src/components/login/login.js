import React from 'react';
import { Layout, Row, Col, Typography, message } from 'antd';

import '../../App.css';
import LoginForm from './loginForm';
import UserAction from '../user/userAction'

const version = process.env.REACT_APP_VERSION


const Login = () => {
    const {Content} = Layout;
    let {
        login,
        loginCounter
      } = UserAction({});
    
    const loginUser = async (credentials) => {
        login(credentials);
    }

    return (
        <Layout className="login">
            <Content className="contentLogin">
                <div className="text-aqua text-center">
                    <span className="fs-23">Welcome to</span>
                    <Typography.Title className="poppins center">
                        Sto. Nino The Shepherd School
                    </Typography.Title>
                </div>
                <Row className="center">
                    <Col xs={{ span: 20 }} sm={{ span: 18 }} md={{ span: 10 }} lg={{ span: 6 }}>
                        <LoginForm login={loginUser}/>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default Login;