import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,} from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../components/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const signInUsingGoogle = ()=>{
        if (user=== 0){
            return;
        }
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
            .then(result => {
                setUser(result.user);
                sessionStorage.setItem('email',result.user.email);
                sessionStorage.setItem('name', result.user.name);
        })
        .finally(()=> setIsLoading(false));

    }
    

    //state change observer
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({}) 
            }
            setIsLoading(false);
        });
        return ()=> unsubscribed;
    },[])

    const logOut=()=>{
        setIsLoading(true);
        signOut(auth)
            .then(()=>{} )
            .finally(()=>setIsLoading(false));
    }

    return{
        user,signInUsingGoogle,isLoading,logOut,
    }
}
export default useFirebase;