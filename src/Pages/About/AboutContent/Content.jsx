import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Content.css';

const Content = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12} lg={8} lg={{ order: 2 }} className="text-center">
                        <div className="section-title">
                            <h2>Understanding of human as a whole before understanding disease</h2>
                        </div>
                        <p className=" m-auto content-inner">
                        AUDE SAPERE is a multidimensional and multi-specialty homoeopathy concept founded by Dr. Anoop Agrahari. Our experienced and specialist homoeopathic doctors are dedicated to serving suffering humanity. We offer homoeopathic consultations in various ways, including online, offline, and via a mediator assistant doctor in remote areas. We focus on curing patients by addressing the root cause of their illness, and our commitment is to alleviate the suffering, anxiety, and agony of our patients and their families.

                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Content;