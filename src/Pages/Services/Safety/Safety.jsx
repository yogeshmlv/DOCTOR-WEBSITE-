import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Safety.css';

const Safety = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12} lg={8} lg={{ order: 2 }} className="text-center">
                        <div className="section-title">
                            <h1>Safety First</h1>
                        </div>
                        <p className="w-50 m-auto content-inner">At AUDE SAPERE, we prioritize safety above all else in our approach to homeopathy. We understand that many patients come to us seeking natural and non-invasive alternatives to traditional medical treatments, and we take our responsibility to provide safe and effective remedies very seriously.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6}>
                        <div className="vedio-item">
                            <div className="vedio-bg-img">
                                <a href="https://www.youtube.com/watch?v=cdYSX7JxO6Q&t=767s"><FontAwesomeIcon icon={faPlayCircle} className="vedio-play-btn" /></a>
                            </div>
                            <h5>The Importance Of Complete Process</h5>
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <div className="vedio-item">
                            <div className="vedio-bg-img img2">
                                <a href="https://www.youtube.com/watch?v=cdYSX7JxO6Q&t=767s"><FontAwesomeIcon icon={faPlayCircle} className="vedio-play-btn" /></a>
                            </div>
                            <h5>Safety First</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Safety;