import React from 'react';
import { Button, Col, Row, Typography } from 'antd';
import { Column } from '@ant-design/charts';
import ClusteredColumnChart from './ClusteredColumnChart';



const StatsComponent = () => {
  return (
    <>
      <Row style={{ padding: '15px', backgroundColor: '#ffffff', borderRadius: '12px' }}>
        <Col xs={24} style={{ marginBottom: '2%' }}>
          <Typography className='new-arrivals-text'>Recent Stats</Typography>
        </Col>
        <Col xs={24} style={{ marginBottom: '3%' }}>
          <Row className='d-flex'>
            <Col xs={8} md={9} lg={9} xl={8}>
              <Typography className='new-arrivals-sub-text'>More than 400+ new members</Typography>
            </Col>
            <Col xs={11} md={15} lg={15} xl={11}>
              <Row className='d-flex'>
                <Col xs={3}>
                  <Button className='new-arrival-button'>Month</Button>
                </Col>
                <Col xs={3}>
                  <Button className='new-arrival-button'>Week</Button>
                </Col>
                <Col xs={3}>
                  <Button className='new-arrival-button'>Day</Button>
                </Col>
              </Row>
            </Col>
            <Col xs={24} style={{ marginTop: '3%' }}>
              <ClusteredColumnChart />
            </Col>
          </Row>
        </Col>
        <Col xs={24}></Col>
      </Row>
    </>
  );
};

export default StatsComponent;
