import initializeFirebaseAuthentication from "../components/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initializeFirebaseAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    console.log('usefirebase', user)

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return unsubscribe;
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }

    return {
        handleGoogleSignIn,
        user,
        logOut

    }
}

export default useFirebase;