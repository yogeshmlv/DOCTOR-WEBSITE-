import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import client from '../../../Images/testi1.png';
import './Testimonial.css';

const Testimonial = () => {

    useEffect(() => {
        AOS.init({
                duration: 2000,
            });
        AOS.refresh();
      }, []);
    return (
        <section className="testimonial-wrapper">
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="section-title">
                            <h1>Testimonials</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col md={6} lg={4} sm={12}>
                        <div className="client-box text-center" data-aos="fade-right">
                            <div className="client-img">
                                <img src={client} alt="" />
                            </div>
                            <h3 className="mt-4">Yogesh Singh</h3>
                            <span>Software Engineer</span>
                        </div>
                    </Col>
                    <Col md={6} lg={8} sm={12}>
                        <div className="review-item text-start" data-aos="zoom-out">
                            <h5>Awesome Work</h5>
                            <p>“I have been struggling with chronic migraines for years, trying various medications and treatments with little success. But since I started seeing a homeopath and taking the remedies prescribed to me, my migraines have decreased in frequency and intensity. Not only that, but I also feel more balanced and energized overall. Homeopathy has truly been a game-changer for me, and I highly recommend it to anyone seeking a natural, holistic approach to healthcare.”</p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Testimonial;