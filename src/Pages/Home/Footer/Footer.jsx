import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg">
            <Container>
                <Row className="text-white">
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Practices</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">For Patients</NavLink>
                                <NavLink className="footer-link">FAQ's</NavLink>
                                <NavLink className="footer-link">About</NavLink>
                                <NavLink className="footer-link">Contact Us</NavLink>
                                <NavLink className="footer-link">Blog</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Resources</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">New Patients</NavLink>
                                <NavLink className="footer-link">Meet the Team</NavLink>
                                <NavLink className="footer-link">Patient Form</NavLink>
                                <NavLink className="footer-link">Insurance</NavLink>
                                <NavLink className="footer-link">Account Login</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Centers</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link"> PEPPEGANJ(Main Branch)</NavLink>
                                <NavLink className="footer-link"> GORAKHPUR</NavLink>
                                <NavLink className="footer-link"> ALLAHABAD</NavLink>
                                <NavLink className="footer-link"> KANPUR</NavLink>
                                <NavLink className="footer-link"> SAHARANPUR</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Our Address</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Ward No. 10, Main Market</NavLink>
                                <NavLink className="footer-link">Peppeganj, Gorakhpur</NavLink>
                                <NavLink className="footer-link">Phone: +91 9598593661</NavLink>
                                <NavLink className="footer-link">Email:audesaperemdms@gmail.com</NavLink>
                                <NavLink className="footer-link">Whatsapp : 9598593661</NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copy-right text-center text-white">
                <p className='mb-0'> Copyright &copy; 2023 - <span className="developer">AUDE SAPERE</span> | All Rights Reserved</p>
                <p>Devloped By <span  className="developer">Yogesh Singh</span></p>
            </div>
        </div>
    );
};

export default Footer;