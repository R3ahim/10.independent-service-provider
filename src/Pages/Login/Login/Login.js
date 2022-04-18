import React from 'react';

import { useSendEmailVerification, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import google from '../../img/social/google.png'
import github from '../../img/social/github.png'
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const location = useLocation();
      let from = location.state?.from?.pathname ||'/';
    const handleLogin = event=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail()
    const resetPassword = async (event) => {
        const email = event.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }
    const navigate = useNavigate()
    if (user) {
        navigate(from, { replace: true });
    }
    return (


        <div className='container w-50 mx-auto'>
           
        <h2 className='text-primary text-center mt-2'>Please Login With</h2>
        <SocialLogin></SocialLogin>
        <Form onSubmit={handleLogin} className={'w-50 mx-auto'}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <p></p>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
                    
                <p>New to user <Link to={'/register'} className='text-primary text-decoration-none '>Please Register</Link></p>
                <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
           
            </Form>
           
            <ToastContainer />
</div>


    );
};

export default Login;