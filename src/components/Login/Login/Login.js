import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const auth = getAuth();
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const [error,setError] =useState('');
    const [isLogin,setIslogin] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState({});
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
            processLogin(email,password,location,history);
        }
        
    }

    const processLogin =(name,email,password, location, history)=>{
        signInWithEmailAndPassword(auth,name, email, password)
        .then(result =>{
            const user =result.user;

            // history.push(url);
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    const toggleRegister = e => {
        setIslogin(e.target.checked);
        e.preventDefault();
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value);
        e.preventDefault();
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value)
        e.preventDefault();
    }
    const createNewUser =(email,password,name) =>{
        createUserWithEmailAndPassword(auth,email,password,name)
            .then(result =>{
                const user = result.user;
                console.log(user);
                const newUser={email,displayName:name};
                setUser(newUser);
                saveUser(email, name);
                // console.log(email)
                const destination = location.state?.from || '/';
                history.push(destination);
                setError('')
            })
    }

    const saveUser = (email,name) => {
        const user = {email,name}
        // console.log(user)
        fetch('https://whispering-hollows-15183.herokuapp.com/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()

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