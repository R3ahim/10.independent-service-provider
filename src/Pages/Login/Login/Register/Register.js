import React from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth'
import auth from '../../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [sendEmailVerification, sending, error1] = useSendEmailVerification(
        auth
    );
    const location = useLocation();
    let from = location.state?.from?.pathname || '/checking';
    const handleSubmit =event=>{

       event.preventDefault()

       const name = event.target.name.value;
       const email = event.target.email.value;
       const password =event.target.password.value;

       createUserWithEmailAndPassword(email,password)
      
   }
   const navigate = useNavigate()
   if (user) {
       navigate(from, { replace: true });
   }

   

    return (
        <div>
            <div className='w-50 mx-auto'>
                <SocialLogin></SocialLogin>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' id="exapleInputName" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>

                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button  onClick={ async () => {
                    await sendEmailVerification();
                    alert('Sent email')
                }} type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default Register;