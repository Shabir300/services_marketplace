import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './signup.scss'

const SignUp = () => {

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

    console.log('inputs', inputs)

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

       const form = event.currentTarget;

       if (inputs.password !== inputs.confirmPassword) {
            // setValidated(true);
            setPasswordMatch(false);
       } else {
        setPasswordMatch(true);
        setValidated(true )
       }

    };


    console.log('password match: ', passwordMatch)

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='signupForm  py-5 border  my-5 d-flex flex-column gap-4 shadow-md'>

        <Row className='w-auto mx-auto'>
            <span className='h2'>Sign Up</span>
        </Row>

        <Row>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='' required />
            </Form.Group>
        </Row>

        <Row>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='text' placeholder='' required />
            </Form.Group>
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

        <Row>
            <Form.Group>
                <Form.Check
                    required
                    label='Agree to terms & conditions'
                    feedbackType='invalid'
                    feedback='You must agree before submitting'
                />
            </Form.Group>
        </Row>

        <Button className='text-white py-2 d-flex flex-row align-items-center justify-content-center gap-3' variant='primary' type='submit'>SIGN UP <i class="bi bi-arrow-right fs-5"></i> </Button>
        
    </Form>
  )
}

export default SignUp;