import { useEffect, useState } from "react";
import Axios from "axios";

function Contact()
{
    const [name,setName]=useState("Janice");
    const handleClick = () => {
        setName("Ravi");
    }
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then()
        .catch((res)=>{
            if(res.status === 200)
            {
                console.log(res);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err))
    },[])

    return(
        <div>
            <h1>The owner of this page is {name}</h1>
            <button onClick={handleClick}>Change owner</button>
        </div>
    )
}

export default Contact;