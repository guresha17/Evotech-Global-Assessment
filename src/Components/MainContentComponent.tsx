import { Col, Row, Typography, Select, Steps } from 'antd'
import React from 'react'
import '../Styles/MainContent.css'
import TrackingComponent from './TrackingComponent'
import SalesProgressComponent from './SalesProgressComponent'
import NewArrivalsComponent from './NewArrivalsComponent'
import StatsComponent from './StatsComponent'
import MiscellaneousComponent from './MiscellaneousComponent'

const MainContentComponent: React.FC = () => {

    const tabsContent = [

        {
            icon: '/assets/images/Library.png',
            alt: 'library_icon',
            text: 'SaaS Application'
        },
        {
            icon: '/assets/images/Layout-4-blocks (1).png',
            alt: 'layout_icon',
            text: 'Main Categories'
        },
        {
            icon: '/assets/images/Movie-lane.png',
            alt: 'video_icon',
            text: 'Video Tutorials'
        },
        {
            icon: '/assets/images/Equalizer (1).png',
            alt: 'equalizer_icon',
            text: 'Sales Statistics'
        },
        {
            icon: '/assets/images/Shield-check.png',
            alt: 'shield_icon',
            text: 'ABC Security'
        }

    ]

    const tabsContent2 = [

        {
            icon: '/assets/images/ecm007.png',
            alt: 'gift_icon',
            text: 'Great Gifts'
        },
        {
            icon: '/assets/images/teh008.png',
            alt: 'layout_icon',
            text: 'Great Gifts'
        },
        {
            icon: '/assets/images/teh004.png',
            alt: 'layout_icon',
            text: 'Great Gifts'
        },
        {
            icon: '/assets/images/abs025.png',
            alt: 'flower_icon',
            text: 'Great Gifts'
        },
        {
            icon: '/assets/images/ecm002.png',
            alt: 'layout_icon',
            text: 'Great Gifts'
        },
        {
            icon: '/assets/images/gen002.png',
            alt: 'layout_icon',
            text: 'Great Gifts'
        }
    ]

    return (
        <>
            <Row className='main-content-div'>
                <Col xs={24}>
                    <Row>
                        <Col xs={24} md={24} lg={24} xl={16}>
                            <Row>
                                <Col xs={24} style={{ marginBottom: '5%' }}>
                                    <Row className='d-flex'>
                                        {tabsContent.map((tabContent, index) => (
                                            <Col key={index} xs={4} className='d-flex-center'>
                                                <Row className='d-flex-center tab-item '>
                                                    <Col xs={24} className='d-flex-container'>
                                                        <img src={tabContent.icon} alt={tabContent.alt} className='tab-content-icon'/>
                                                    </Col>
                                                    <Col xs={24}>
                                                        <Typography className='tab-text'>{tabContent.text}</Typography>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        ))}
                                    </Row>
                                </Col>
                                <Col xs={24} className='mb'>
                                    <Row className='d-flex'>
                                        <Col xs={11}>
                                            <Row style={{ backgroundColor: "#ffffff", borderRadius: "12px", height: "23.3rem" }}>
                                                <Col xs={24}>
                                                    <Row className='d-flex categories-div'>
                                                        <Col xs={24} style={{ marginBottom: "7%" }}>
                                                            <Row className='d-flex'>
                                                                <Col xs={6} md={9}>
                                                                    <Typography className='font-white'>Categories</Typography>
                                                                </Col>
                                                                <Col xs={6} md={9}>
                                                                    <Select
                                                                        defaultValue="export"
                                                                        className='select-comp'
                                                                        options={[
                                                                            { value: 'export', label: 'Export' },
                                                                            { value: 'lucy', label: 'Lucy' },
                                                                            { value: 'Yiminghe', label: 'yiminghe' },
                                                                        ]}
                                                                    />
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col xs={24}>
                                                            <img src='/assets/images/Vector 6.png' alt='vector-img' style={{ width: '100%' }} />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col xs={24}>

                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={12}>
                                            <TrackingComponent />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                        <Col xs={24} md={24} lg={24} xl={8}>
                            <Row className='d-flex'>
                                {tabsContent2.map((tabContent, index) => (
                                    <Col key={index} xs={8} md={8} lg={4} xl={12} className='d-flex-center' style={{ marginBottom: '7%' }}>
                                        <Row className='d-flex-center tab-item-2'>
                                            <Col xs={24} className='d-flex-container'>
                                                <img src={tabContent.icon} alt={tabContent.alt} />
                                            </Col>
                                            <Col xs={24}>
                                                <Typography className='tab-text'>{tabContent.text}</Typography>
                                            </Col>
                                        </Row>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>

                </Col>
                <Col xs={24}>
                    <Row className='d-flex'>
                        <Col xs={24} md={24} lg={24} xl={7} className='mb'>
                            <SalesProgressComponent />
                        </Col>
                        <Col xs={24} md={24} lg={24} xl={16} className='mb'>
                            <NewArrivalsComponent />
                        </Col>
                    </Row>
                </Col>
                <Col xs={24}>
                    <Row className='d-flex'>
                        <Col xs={24} md={24} lg={24} xl={16} className='mb'>
                            <StatsComponent />
                        </Col>
                        <Col xs={24} md={24} lg={24} xl={7} className='mb'>
                            <MiscellaneousComponent />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default MainContentComponent