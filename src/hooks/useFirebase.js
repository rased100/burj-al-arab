import initializeFirebaseAuthentication from "../components/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


initializeFirebaseAuthentication();

// const useFirebase = () =>{

//     return{

//     }
// }



const handleGoogleSignIn = () => {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
        })
}

export default handleGoogleSignIn;