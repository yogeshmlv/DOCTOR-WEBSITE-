import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import serviceDetailImg from '../../../Images/service-details-promo1.png';
import serviceDetailImg2 from '../../../Images/service-details-promo2.png';
import './Detail.css';

const Detail = () => {
    return (
        <>
            <section className="healing p-5">
                <Container>
                    <Row className="align-items-center p-5">
                        <Col lg={6} sm={12} xs={12}>
                            <div className="expertDentist-txt mt-5 mt-lg-0">
                                <h2 className="fw-bold">Experience quick and effective recovery with personalized homeopathic</h2>
                                <p>At AUDE SAPERE, our experienced and highly trained homoeopathic doctors use a personalized approach to help our patients achieve optimal health and wellbeing. By carefully assessing each patient's unique needs and symptoms, we develop customized treatment plans that address the underlying causes of illness, rather than simply masking symptoms.</p>
                                <p>Our commitment to patient-centered care and holistic healing has helped us achieve a reputation as one of the best homoeopathic clinics in UP and beyond. With our focus on natural remedies and individualized treatment plans, we help our patients achieve quick and long-lasting recovery from a wide range of health conditions.

                                    If you're looking for a natural and effective approach to healthcare that can promote quick recovery, AUDE SAPERE is here to help. Contact us today to learn more about our approach to homeopathy and how we can help you achieve optimal health and wellbeing..</p>
                            </div>
                        </Col>
                        <Col lg={6} sm={12} xs={12}>
                            <img src={serviceDetailImg} alt="expertDentist" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="healing p-5 footer-bg">
                <Container>
                    <Row className="align-items-center p-5">
                        <Col lg={6} sm={12} xs={12}>
                            <img src={serviceDetailImg2} alt="expertDentist" className="img-fluid pt-xs-5" />
                        </Col>
                        <Col lg={6} sm={12} xs={12}>
                            <div className="expertDentist-txt mt-5 mt-lg-0">
                                <h2 className="fw-bold text-white">Composite or Mercury?</h2>
                                <p className="text-white">Composite is a popular material used in modern dentistry as it is a safer and more durable alternative to traditional mercury amalgam fillings. Similarly, in homeopathy, composite remedies are often preferred over mercury-based remedies due to concerns about toxicity and side effects.</p>
                                <p className="text-white">At AUDE SAPERE, our experienced and highly trained homoeopathic doctors use safe and natural composite remedies to treat a wide range of health conditions. By carefully selecting the best remedies for each patient's unique needs and symptoms, we are able to provide effective treatment without the risks associated with mercury-based remedies.
                                    Our commitment to patient-centered care and natural healing has helped us achieve a reputation as one of the best homoeopathic clinics in UP and beyond. Whether you are looking for relief from chronic health conditions, acute illnesses, or simply want to achieve optimal health and wellbeing, we are here to help.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Detail;