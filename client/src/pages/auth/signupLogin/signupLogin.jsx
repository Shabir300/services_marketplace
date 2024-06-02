import {useState} from 'react';
import Header from '../../../components/common/header/Header'
import SignUp from '../../../components/signUp/SignUp';
import Footer from '../../../components/common/footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import './signupLogin.scss';
import Login from '../../../components/login/Login';

const Signup = () => {

  const [form, setForm] = useState('');

  return (
    <>
        <Header />
        
          <Container fluid className='signupLoginForm pt-3 pb-5 border  my-5 d-flex flex-column gap-4 shadow'>

            <Nav variant='tabs' justify>
              <Nav.Item onClick={() => setForm('sign In')} className='h5 m-0'>
                <Nav.Link >Sign In</Nav.Link>
              </Nav.Item>
              <Nav.Item onClick={() => setForm('sign Up')} className='h5 m-0'>
                <Nav.Link>Sign Up</Nav.Link>
              </Nav.Item>
            </Nav>

            {form === 'sign In' ? <Login /> : <SignUp />}

          </Container>

        <Footer />
    </>
  )
}

export default Signup