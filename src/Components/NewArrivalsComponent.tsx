import { Button, Col, Row, Typography } from 'antd'
import React from 'react'

const NewArrivalsComponent = () => {

    const newArrivalItems = [

        {
            icon: '/assets/images/Rectangle 172.png',
            alt: 'ftp_icon',
            text: 'Sant Outstanding',
            description: 'FTP: bprow@bnc.cc',
            amount: '$2,000,000',
            paidStatus: 'paid',
            status: 'Approved'
        },
        {
            icon: '/assets/images/Rectangle 172 (1).png',
            alt: 'telegram_icon',
            text: 'Telegram Application',
            description: 'FTP: bprow@bnc.cc',
            amount: '$4,600,000',
            paidStatus: 'paid',
            status: 'In progress'
        },
        {
            icon: '/assets/images/Rectangle 173.png',
            alt: 'cisco_icon',
            text: 'Cisco Management',
            description: 'FTP: bprow@bnc.cc',
            amount: '$560,000',
            paidStatus: 'paid',
            status: 'Success'
        },
        {
            icon: '/assets/images/Rectangle 172 (2).png',
            alt: 'hrm_icon',
            text: 'HR Management',
            description: 'FTP: bprow@bnc.cc',
            amount: '$57,000',
            paidStatus: 'paid',
            status: 'Rejected'
        },
        {
            icon: '/assets/images/Rectangle 172 (3).png',
            alt: 'ktr_icon',
            text: 'KTR Mobile Application',
            description: 'FTP: bprow@bnc.cc',
            amount: '$45,200,000',
            paidStatus: 'paid',
            status: 'In Progress'
        },
    ]

    return (
        <>
            <Row style={{ padding: '15px', backgroundColor: '#ffffff', borderRadius: '12px' }}>
                <Col xs={24} style={{ marginBottom: '2%' }}>
                    <Typography className='new-arrivals-text'>New Arrivals</Typography>
                </Col>
                <Col xs={24} style={{ marginBottom : '3%'}}>
                    <Row className='d-flex'>
                        <Col xs={8}>
                            <Typography className='new-arrivals-sub-text'>More than 400+ new members</Typography>
                        </Col>
                        <Col xs={11}>
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
                    </Row>
                </Col>
                <Col xs={24}>
                    {newArrivalItems.map((newArrivalItem, index) => (
                        <Row>
                            <Col xs={10}>
                                <Row style={{ marginBottom: '5%' }}>
                                    <Col xs={6}>
                                        <img src={newArrivalItem.icon} alt={newArrivalItem.alt} />
                                    </Col>
                                    <Col xs={18}>
                                        <Row>
                                            <Col xs={24} className='d-flex-start'>
                                                <Typography className='sales-progress-text-2'>{newArrivalItem.text}</Typography>
                                            </Col>
                                            <Col xs={24} className='d-flex-start'>
                                                <Typography className='sales-progress-description'>{newArrivalItem.description}</Typography>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={5}>
                                <Row>
                                    <Col xs={24}>
                                        <Typography>{newArrivalItem.amount}</Typography>
                                    </Col>
                                    <Col xs={24}>
                                        <Typography>{newArrivalItem.paidStatus}</Typography>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={4}>
                                <Button>{newArrivalItem.status}</Button>
                            </Col>
                            <Col xs={5}>
                                <Row className='d-flex'>
                                    <Col xs={7}>
                                        <img src='/assets/images/Button Settings.png' alt='settings_icon' />
                                    </Col>
                                    <Col xs={7}>
                                        <img src='/assets/images/Button Edit.png' alt='settings_icon' />
                                    </Col>
                                    <Col xs={7}>
                                        <img src='/assets/images/Button Trash.png' alt='settings_icon' />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </>
    )
}

export default NewArrivalsComponent