import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './header.scss';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  return (
    <Container fluid className='bg-secondary text-white py-3 '>
        <Row  className='border-bottom pb-2 border-info-subtle px-md-7'> 
            <Col > 
                Welcome to Clicon online eCommerce store. 
            </Col>
            <Col className='d-flex flex-row gap-4 justify-content-end'>
                <span>Eng</span>
                <span>Urdu</span>
            </Col>
        </Row>

        <Row  className='pt-3 d-flex flex-row align-items-center gap-sm-3'>
            <Col className='d-flex flex-row justify-content-between'>
                <Image style={{height: '48px', width: '177px'}} src='/static/Logo.png' />

                <Dropdown className='d-md-none header-dropdown'>
                    <Dropdown.Toggle as='button' className='bg-transparent border-0 text-white d-flex flex-row align-items-center'><i class="bi bi-list"></i></Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className='d-flex flex-row align-items-center gap-2'> <i class="bi bi-cart2"></i>Cart</Dropdown.Item>
                        <Dropdown.Item className='d-flex flex-row align-items-center gap-2'>  <i class="bi bi-heart"></i>Favorites</Dropdown.Item>
                        <Dropdown.Item className='d-flex flex-row align-items-center gap-2'>   <i class="bi bi-person-circle"></i>Account</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>

            <Col md={6}>
                <InputGroup >
                    <Form.Control
                        placeholder='Search for anything...'
                    />
                    <InputGroup.Text ><i class="bi bi-search"></i></InputGroup.Text>
                </InputGroup>
            </Col>

            <Col className='d-md-flex flex-row gap-4 justify-content-center d-none'>
                <i class="bi bi-cart2"></i>
                <i class="bi bi-heart"></i>
                <i class="bi bi-person-circle"></i>
            </Col>
        </Row>
    </Container>
  )
}

export default Header;