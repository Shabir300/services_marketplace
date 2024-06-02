import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormGroup from 'react-bootstrap/FormGroup';
import './forgotPassword.scss';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Login = () => {

    const [validated, setValidated] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const form = e.currentTarget;
        setValidated(true);
    } 

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='forgotPasswordForm p-5 border  my-5 d-flex flex-column gap-4 shadow '>

        <Row className='mb-3  text-center'>
            <span className='h5 m-0 '>Forgot Password</span>

            <span className='mt-3 text-body-secondary fs-7'>Enter the email address or mobile phone number associated with your Clicon account.</span>
        </Row>
        <Row>
            <FormGroup>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='text' required />
            </FormGroup>
        </Row>

        <div className='d-flex flex-column gap-2'>
            <div className='d-flex flex-row gap-1 align-items-center'>
                <span className='text-body-secondary'>Already have an account?</span> 
                <Link to='/auth' className='text-decoration-none'>Login</Link>
            </div>

            <div className='d-flex flex-row gap-1 align-items-center'>
                <span className='text-body-secondary'>Don't have an account?</span>
                <Link to='/auth' className='text-decoration-none'>Sign up</Link>
            </div>
        </div>


        <Button className='text-white py-2 d-flex flex-row align-items-center justify-content-center gap-3' variant='primary' type='submit'>SEND CODE <i class="bi bi-arrow-right fs-5"></i> </Button>

    </Form>
  )
};

export default Login;