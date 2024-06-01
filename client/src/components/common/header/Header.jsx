import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './header.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
<>
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

    <Container className='text-secondary header-navs' >
        <Row className='bg-white text-secondary py-3 d-flex flex-row align-items-center'>
            <Col sm={9} as='div' className='navbar d-flex flex-row gap-3'>
                <Nav >
                    <NavDropdown className='d-flex flex-row gap-2' title='All Category'>
                        <NavDropdown.Item>Something</NavDropdown.Item>
                        <NavDropdown.Item>Something</NavDropdown.Item>
                        <NavDropdown.Item>Something</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Item  >
                        <Nav.Link className='d-flex flex-row gap-2'><i class="bi bi-geo-alt-fill"></i>Track Order</Nav.Link>
                    </Nav.Item>

                    <Nav.Item  >
                        <Nav.Link className='d-flex flex-row gap-2'><i class="bi bi-arrow-down-up"></i>Compare</Nav.Link>
                    </Nav.Item>

                    <Nav.Item  >
                        <Nav.Link className='d-flex flex-row gap-2'><i class="bi bi-telephone-outbound"></i>Customer Support</Nav.Link>
                    </Nav.Item>

                    <Nav.Item  >
                        <Nav.Link className='d-flex flex-row gap-2'><i class="bi bi-info-circle"></i>Need Help</Nav.Link>
                    </Nav.Item>

                </Nav>
            </Col>

            <Col>
            <i class="bi bi-telephone"></i> +923233937310
            </Col>
        </Row>
    </Container>
</>
  )
}

export default Header;