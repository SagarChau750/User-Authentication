import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const Signup = ()=>{
    const [passwordVisible , setPasswordVisible] = useState(false);
    const [input, setInput] = useState({
        username:"", password:""
    });

    const handleChange = (event)=>{
        const {name, value} = event.target;

        setInput( (prev) =>({
            ...prev,
            [name] : value
        }));
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        try{
            const response = await axios.post('http://localhost:8000/signup', input);
           console.log(response.data);
            
        }
        catch(error){
            console.log("registratin failed");
            console.log(error);
        }
        setInput({
            username : "", password:""
        })
    }





    const togglePassword = () =>{
        setPasswordVisible(!passwordVisible);
    }
    return(
        <form onSubmit={handleSubmit}>
                <label>Enter Username: 
                    <input type="text"
                    required
                    onChange={handleChange}
                    name="username"
                    value={input.username}
                    
                    />
                </label>

                <label>Enter Password: 
                    <input type={passwordVisible  ? "text" : "password"}
                     required
                     onChange={handleChange}
                     name="password"
                     value={input.password}/>
                    <span onClick={togglePassword} style={{cursor:'pointer', marginLeft:'6px'}}>
                        <FontAwesomeIcon icon = {passwordVisible ? faEyeSlash : faEye}/>
                    </span>
                </label>
                <button type = "submit">Register</button>
            </form>
    )
};
export default Signup;