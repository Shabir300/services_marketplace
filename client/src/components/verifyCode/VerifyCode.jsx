import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormGroup from 'react-bootstrap/FormGroup';
import './verifyCode.scss';
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
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='verifyCodeForm p-5 border  my-5 d-flex flex-column gap-4 shadow '>

        <Row className='mb-3  text-center'>
            <span className='h5 m-0 '>Verify your Email Address</span>

            {/* <span className='mt-3 text-body-secondary fs-7'>Enter the code sent to your email</span> */}
        </Row>
        <Row>
            <FormGroup>
                <Form.Label>Verification Code</Form.Label>
                <Form.Control type='text' required />
            </FormGroup>
            <a className='resendLink'>Resend code</a>
        </Row>

        <Button className='text-white py-2 d-flex flex-row align-items-center justify-content-center gap-3' variant='primary' type='submit'>VERIFY ME<i class="bi bi-arrow-right fs-5"></i> </Button>

    </Form>
  )
};

export default Login;