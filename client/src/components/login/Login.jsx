import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormGroup from 'react-bootstrap/FormGroup';
import './login.scss';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [validated, setValidated] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const form = e.currentTarget;
        setValidated(true);
    } 

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='loginForm d-flex flex-column gap-4 '>
            <Row>
                <FormGroup>
                    <Form.Label>Email Adress</Form.Label>
                    <Form.Control type='text' required />
                </FormGroup>
            </Row>

            <Row>
                <FormGroup>

                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                        <Form.Control type={showPassword ? 'text' : 'password'} required />
                        <InputGroup.Text onClick={() => setShowPassword(!showPassword)}><i class={!showPassword ? `bi bi-eye` : `bi-eye-slash`} ></i></InputGroup.Text>
                    </InputGroup>
                    <Link to='/forgot-password' className='forgotLink'>
                      Forgot password
                    </Link>

                </FormGroup>
            </Row>

            <Button className='text-white py-2 d-flex flex-row align-items-center justify-content-center gap-3' variant='primary' type='submit'>SIGN IN <i class="bi bi-arrow-right fs-5"></i> </Button>

    </Form>
  )
};

export default Login;