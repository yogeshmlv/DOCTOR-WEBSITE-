import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // import useHistory hook
import './Appoinment.css';
import emailjs from '@emailjs/browser'; // update the import statement for emailjs
const Appoinment = () => {
    const navigate = useNavigate(); // initialize useHistory hook

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_tj3z8jh', 'template_8fd6i8c', e.target, 'f6p0SeThxbE5Readv')
            .then(res => {
                console.log(res);
                navigate('/Thank');  // redirect to Thank page
            })
            .catch(err => console.log(err))
    };

    return (
        <section className="appoinment-wrapper">
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <div className="section-title">
                            <h1 className="mt-5">Request Appointment/Your Quaries</h1>
                        </div>
                        <div className="appoinment-form">
                            <form action="#" className="row" onSubmit={sendEmail}>
                                <Col md={6} lg={6}>
                                    <input type="text" name='name' placeholder="Name" required />
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="email" name='email' placeholder="Email" required />
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="tel" name='phone' placeholder="Phone" pattern="[0-9]{10}" required />
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="text" name='subject' placeholder="Subject" required />
                                </Col>
                                <Col md={12} lg={12}>
                                    <textarea name="Message" id="" cols="30" rows="10" placeholder="Message" required></textarea>
                                </Col>
                                <button className="theme-btn btn-fill form-btn mt-5" type="submit">Submit</button>
                            </form>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Appoinment;
