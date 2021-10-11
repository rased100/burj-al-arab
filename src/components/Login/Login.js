import React, { useContext } from 'react';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const { handleGoogleSignIn } = useAuth();
    return (
        <div className="d-flex justify-content-center">
            <div className="text-center mt-3">
                <h2>Login-Please</h2><br />
                <input type="email" placeholder="enter email" /><br />
                <input type="password" placeholder="enter password" /><br /><br />
                <input className="btn btn-info" type="submit" value="Submit" />
                <div>----------------------</div>
                <p>or</p>
                <button onClick={handleGoogleSignIn} className="btn btn-primary">sign in with google</button>
            </div>
        </div>
    );
};

export default Login;