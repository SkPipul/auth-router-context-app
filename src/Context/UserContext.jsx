import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firbase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({children}) => {
const [user, setUser] = useState({});
const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const signInWithGoogle = () => {
        return signInWithPopup( auth, googleProvider)
    }

    const authInfo = {user, loading, createUser, signIn, logOut, signInWithGoogle};

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            console.log('this is the current user', currentUser);
        })

        return () => {
            unsubscribe();
        }

    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;