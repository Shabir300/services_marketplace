import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './footer.scss';

const Footer = () => {
  return (
   <Container fluid className='footer d-flex flex-col align-items-center py-5 py-md-6 px-md-7'>
    <Row className='gy-5'>
        <Col xs={12} sm={6} lg={3} className='px-3'>
            <Image src='/static/LogoBlack.png' />

            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>

            <p><strong>info@kinbo.com</strong></p>
        </Col>

        <Col xs={6} lg={3} className='d-flex flex-column gap-2 footer-links'>
            <span className='h7 text-white'>TOP CATEGORY</span>
            <span>Computer & Laptop</span>
            <span>Computer & Laptop</span>
            <span>Computer & Laptop</span>
            <span>Computer & Laptop</span>
            <span>Computer & Laptop</span>
            <span>Computer & Laptop</span>
            <span>Computer & Laptop</span>

        </Col>

        <Col xs={6} lg={3} className='d-flex flex-column gap-2 footer-links'>
            <span className='h7 text-white'>Quick links</span>
            <span>Computer & Laptop</span>
            <span>Computer & Laptop</span>
            <span>Computer & Laptop</span>
            <span>Computer & Laptop</span>
            <span>Computer & Laptop</span>
            <span>Computer & Laptop</span>
            <span>Computer & Laptop</span>

        </Col>

        <Col  xs={12} sm={6} lg={3} className='d-flex flex-column gap-2 '>
            <span className='h7 text-white border-0'>Popular Tag</span>
            <div className='footer-tags-links d-flex flex-row gap-2 flex-wrap'>
                <span>Computer &</span>
                <span>Computer & Laptop</span>
                <span>Computer & </span>
                <span>Computer & Laptop</span>
                <span>Computer & Laptop</span>
                <span>Computer & </span>
                <span>Computer & Laptop</span>
            </div>

        </Col>

    </Row>

    <Row>

    </Row>
   </Container>
  )
}

export default Footer