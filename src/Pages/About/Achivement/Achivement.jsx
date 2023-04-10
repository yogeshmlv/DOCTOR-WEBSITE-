import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Achivement.css';

const Achivement = () => {
    return (
        <section className="achivement-wrap text-white">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} lg={6} sm={12}>
                        <div className="section-title">
                            <h1>Our Achievement</h1>
                        </div>
                        <div className="achivement-txt">
                            <p className="w-75">At AUDE SAPERE, we believe that disease is not just an isolated physical condition, but rather a manifestation of an underlying inner disturbance. We view symptoms as a message from the body, indicating that there is an imbalance that needs to be addressed.
                                Unlike conventional medicine, which often focuses on suppressing symptoms with medication, we strive to identify and treat the root cause of the illness. By addressing the underlying disturbance, we can provide a permanent solution that promotes long-term healing and wellbeing.</p>
                            <div className="more-tool">
                                <Link to="/login"><button className="theme-btn btn-fill">Appoinment</button></Link>
                                <a href="https://www.youtube.com/@audesapere-op6zp/videos" target="_blank" className="watchBtn"><button className="theme-btn btn-unfill"><FontAwesomeIcon className="play-btn" icon={faPlayCircle} /><span>Watch Vedio</span></button></a>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <Row className="achivement-funfact text-white">
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>22 +</span>
                                    <p>Patients</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>5+</span>
                                    <p>Homeopathist</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>25 +</span>
                                    <p>Awards</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>2+</span>
                                    <p>Branch</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Achivement;