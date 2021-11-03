import { useEffect, useState } from "react"

const useService= () =>{
    const[service, setService] = useState([]);
    useEffect(()=>{
        fetch('https://whispering-hollows-15183.herokuapp.com/services')
        .then(res=> res.json())
        .then(data=> setService(data))
    },[])
    return[service, setService];
    
}
export default useService;