import { Col, Row } from 'antd'
import React from 'react'
import DashboardComponent from './DashboardComponent'
import MainPageComponent from './MainPageComponent'

const MainComponent : React.FC = () => {
    return (
        <>
            <Row style={{ height : "100vh ", width : "100vw"}}>
                <Col xs={4} md={5} lg={5} xl={4}>
                    <DashboardComponent />
                </Col>
                <Col xs={20} md={19} lg={19} xl={20}>
                    <MainPageComponent />
                </Col>
            </Row>
        </>
    )
}

export default MainComponent
