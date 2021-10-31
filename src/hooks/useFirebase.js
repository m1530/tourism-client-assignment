import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializationApp from '../firebase/firebase.init';

initializationApp();
const auth = getAuth();
const useFirebase = () => {

    const [users, setUsers] = useState({});
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(true);

    // google sign

    const signInWithGoogle = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }


    // manage user

    useEffect(() => {
        const suscribeeUser = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user);
            } else {
                setUsers({});
            }
            setLoading(false);
        });
        return suscribeeUser;
    }, []);

    // logout process
    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setUsers({})
        }).catch((error) => {
            // An error happened.
        }).finally(
            setLoading(false)
        );
    }


    return {
        signInWithGoogle, logOut, users, errors, setUsers, setErrors, loading, setLoading
    }
};

export default useFirebase;