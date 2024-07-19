import React from "react";
import { useState } from "react";
import axios from 'axios';

const Login = () => {
    const [input, setInput] = useState({
        username: "",
        password: ""
    });
    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        setInput((prev) => ({
            ...prev,
            [name]: value
        }))

        // setInput (values =>({...values,[name] : value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login', input);
            const { success, message } = response.data;
            if (success) {
                console.log("login successfully");
            }
            else {
                console.log(message);
            }
        }
        catch (error) {
            console.log(error);
            console.log("login faled")
        }
        setInput({
            username: "",
            password: ""
        });


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter Username:
                    <input type="text"
                        name="username"
                        value={input.username}
                        required
                        onChange={handleChange} />
                </label>

                <label>Enter Password:
                    <input type="password"
                        name="password"
                        value={input.password}
                        required
                        onChange={handleChange} />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
};
export default Login;