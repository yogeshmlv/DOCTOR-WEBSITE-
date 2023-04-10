import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import expertDentist from '../../../Images/experienceddentist.png';
import Certificate from '../../../Images/Certificate.jpg';
import './Dentist.css';

const Dentist = () => {
    return (
        <section className='expert-dentist'>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <img src={expertDentist} alt="expertDentist" className="img-fluid" />
                        <img src={Certificate} alt="expertDentist" className="img-fluid" />
                    </Col>
                    <Col lg={6}>
                        <div className="expertDentist-txt mt-5 mt-lg-0">
                            <h2>Experienced Homeopathist</h2>
                            <p>AUDE SAPERE is a multidimensional, multi-specialty homoeopathy concept founded by Dr. Anoop Agrahari, a renowned homoeopathic physician from Gorakhpur. Our team consists of experienced and specialized homoeopathic doctors who are dedicated to serving the suffering humanity.
                                We are proud to house the best homoeopathic doctors in Uttar Pradesh, and our services are rapidly expanding across India. Our homoeopathic consultations are available in three ways: online, offline, and remotely (via mediator assistant doctors). We offer treatment for innumerable disorders based on strict homoeopathic principles.
                                At AUDE SAPERE, we are committed to curing the patient, not just treating the symptoms. We understand that each person is unique, and we strive to identify and treat the underlying causes of their illness. We believe that true healing occurs when the mind, body, and spirit are in harmony.</p>
                            <p>We take pride in providing compassionate care to our patients and their families. We understand that illness can cause anxiety and agony, and we are here to alleviate suffering in any way we can. Our ultimate goal is to help our patients achieve optimal health and wellbeing.
                                If you're seeking a natural, holistic approach to healthcare, AUDE SAPERE is here to help. Contact us today to learn more about our services and how we can help you on your path to wellness.</p>

                            <h2>Certifications</h2>
                            <p>This certificate is awarded to Predictive Homeopathy Mumbai,India
                                in recognition of their dedication to creating informative and accurate content for their medical website.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Dentist;