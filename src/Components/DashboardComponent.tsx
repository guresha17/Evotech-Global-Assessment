import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Button, Col, Menu, Row, Typography } from 'antd';
import '../Styles/Dashboard.css';
import ButtonComponent from './ButtonComponent';

type MenuItem = Required<MenuProps>['items'][number];


function getItem(
    label: React.ReactNode,
    key: React.Key,
    // icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        // icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Applications', 'sub2', [
        getItem('-  Users', 'sub3', [getItem('Option 11', '11'), getItem('Option 12', '12')]),
        getItem('-  Contacts', 'sub4', [getItem('Option 13', '13'), getItem('Option 14', '14')]),
        getItem('-  Chat', 'sub5', [getItem('Option 15', '15'), getItem('Option 16', '16')]),
        getItem('-  Pages', 'sub6', [getItem('Option 17', '17'), getItem('Option 18', '18')]),
    ]),
];


const DashboardComponent: React.FC = () => {

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            <Row className='dashboard-main'>
                <Col xs={24}>
                    <Row className='d-flex dashboard-header'>
                        <Col xs={20} className='d-flex-container-center'>
                            {collapsed ? <></>
                                : <Typography className='dashboard-text'>DASHBOARD</Typography>}
                        </Col>
                        <Col xs={4} className='d-flex-container-center'>
                            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }} className='dashboard-collapse-button'>
                                <img src='/assets/images/Arrow-double-left-active.png' alt='collapse-arrow-image' />
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} style={{ height: "1.5rem" }}>
                </Col>
                <Col xs={24}>
                    <Row className='d-flex dashboard-header'>
                        <Col xs={4} className='d-flex-container-center'>
                            <img src='/assets/images/Layers.png' alt='layers-image' />
                        </Col>
                        <Col xs={20} className='d-flex-container-center'>
                            <Typography className='dashboard-sub-text'>Dashboard</Typography>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} className='d-flex-container-center custom-text-div'>
                        <Typography className='custom-text'>CUSTOM</Typography>
                </Col>
                <Col xs={24}>
                    <Menu
                        className='dashboard-main dashboard-menu-text'
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        inlineCollapsed={collapsed}
                        items={items}
                    />
                </Col>
            </Row>
        </>
    )
}

export default DashboardComponent