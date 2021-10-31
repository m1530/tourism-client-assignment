import React from 'react';
import useAuth from '../../hooks/useAuth';
import google from '../../images/login/google.png';
import { useLocation, useHistory } from 'react-router-dom';

const Login = () => {
    const { signInWithGoogle, setUsers, setLoading, setErrors } = useAuth();
    const location = useLocation();
    const history = useHistory();
    //redirect url
    let redirect = location.state?.from || '/';
    // google signin
    const googleLogIn = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redirect);
                setUsers(result.user);
            }).catch((error) => {
                setErrors(error.message);
            }).finally(
                setLoading(false)
            );
    }
    return (
        <div className="container">
            <div className="card p-5 mt-4">
                <h1 className="text-center">Welcome to Holidays Tour</h1>
                <button
                    onClick={googleLogIn}
                    className="btn btn-light mt-3 w-50 mx-auto border border-secondary"
                >
                    <img
                        width="26px"
                        src={google}
                        alt="github-icon"
                    /> Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;