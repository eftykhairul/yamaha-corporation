import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const auth = getAuth();
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const [error,setError] =useState('');
    const [isLogin,setIslogin] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from||"/home"

    

    const handleRegistration = e =>{
        e.preventDefault();
        if (password.length<6){
            setError('Password Must be 6 character long')
            return;
        }
        if(isLogin){
            createNewUser(email,password);
        }
        else{
            processLogin(email,password);
        }
        
    }
    const handleGoogleLogin = () => {
        signInUsingGoogle(auth)
        .then((result) => 
        {
            setIslogin(true)
            const user = result.user
            history.push(url)
        }
            )
        .catch((err) => console.log(err))
        .finally(() => {
        setIslogin(false)
        })
};
    const processLogin =(name,email,password)=>{
        signInWithEmailAndPassword(auth,name, email, password)
        .then(result =>{
            const user =result.user;
            console.log(user);
            history.push(url);
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    const toggleRegister = e => {
        setIslogin(e.target.checked);
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }
    const createNewUser =(name,email,password) =>{
        createUserWithEmailAndPassword(auth,name,email,password)
            .then(result =>{
                const user = result.user;
                console.log(user);
                setError('')
            })
    }
    return (
        <div className='mx-3'>
            <h1>Please {isLogin? 'Register': 'Log In'} </h1>
            <form onSubmit={handleRegistration}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" required className="form-control" id="inputEmail3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" required className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onClick={toggleRegister} className="form-check-input" type="checkbox" id="gridCheck1"/>
                            <label className="form-check-label" htmlFor="gridCheck1">
                                New User?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button onClick={handleRegistration} type="submit" className="btn btn-primary"> {isLogin? 'Register': 'Log In'} </button>
            </form>
            <button onClick={signInUsingGoogle} className='btn btn-warning my-3'>Google Sign In</button>
        </div>
    );
};

export default Login;