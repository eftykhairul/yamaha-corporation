import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,} from "firebase/auth";
import { useEffect, useState } from "react";



import initializeAuthentication from "../components/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const [admin,setAdmin]=useState(false);
    const signInUsingGoogle = (location,history)=>{
        if (user=== 0){
            return;
        }
        const googleProvider = new GoogleAuthProvider();
        setIsLoading(true);
        signInWithPopup(auth,googleProvider)
            .then(result => {
                const user =result.user;
                setUser(result.user);
                saveUser(user.email,user.displayName)
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
    const saveUser = (email,displayName) => {
        const user = {email,displayName}
        // console.log(user)
        fetch('https://whispering-hollows-15183.herokuapp.com/users',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    useEffect(()=>{
        fetch(`https://whispering-hollows-15183.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))

    },[user.email])
    const logOut=()=>{
        setIsLoading(true);
        signOut(auth)
            .then(()=>{} )
            .finally(()=>setIsLoading(false));
    }
    return{
        user,signInUsingGoogle,isLoading,logOut,admin
    }
}
export default useFirebase;