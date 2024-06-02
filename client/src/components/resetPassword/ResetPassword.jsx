import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormGroup from 'react-bootstrap/FormGroup';
import './resetPassword.scss';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Login = () => {

    const [validated, setValidated] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [inputs, setInputs] = useState({
        password: '',
        confirmPassword: ''
    });

    const [passwordMatch, setPasswordMatch] = useState(true);

    const handlePasswordChange = (e) => {
        setInputs(prev => {
            const updatedInputs = {...prev , [e.target.name]: e.target.value};
            
            if(updatedInputs.password !== updatedInputs.confirmPassword) {
                setPasswordMatch(false);
            } else {
                setPasswordMatch(true);
            };

            return updatedInputs;
        });

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const form = e.currentTarget;
        setValidated(true);
    } 

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='resetPasswordForm p-5 border  my-5 d-flex flex-column gap-4 shadow '>

        <Row className='mb-3  text-center'>
            <span className='h5 m-0 '>Reset Password</span>

            <span className='mt-3 text-body-secondary fs-7'>Enter the email address or mobile phone number associated with your Clicon account.</span>
        </Row>
        <Row>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <InputGroup>
                    <Form.Control type={showPassword ? 'text' : 'password'} placeholder='8 + characters' required onChange={handlePasswordChange} name='password' />    
                    <InputGroup.Text onClick={() => setShowPassword(!showPassword)}><i class={!showPassword ? `bi bi-eye` : `bi-eye-slash`} ></i></InputGroup.Text>
                </InputGroup>
            </Form.Group>
        </Row>

        <Row>
            <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control type={showConfirmPassword ? 'text' : 'password'} placeholder='' required isInvalid={!passwordMatch} onChange={handlePasswordChange} name='confirmPassword'  />
                    <InputGroup.Text onClick={() => setShowConfirmPassword(!showConfirmPassword)}><i class={!showConfirmPassword ? `bi bi-eye` : `bi-eye-slash`} ></i></InputGroup.Text>
                    <Form.Control.Feedback type='invalid'>Passwords must match!</Form.Control.Feedback>
                </InputGroup>
                
            </Form.Group>
        </Row>


        <Button className='text-white py-2 d-flex flex-row align-items-center justify-content-center gap-3' variant='primary' type='submit'>RESET PASSWORD <i class="bi bi-arrow-right fs-5"></i> </Button>

    </Form>
  )
};

export default Login;