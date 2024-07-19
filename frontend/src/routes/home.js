import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="home">
                this is home page.
            </div>
            <div className="btn">
                <Link to="/login" > <button>Login</button></Link>
                <Link to="/signup" > <button>Signup</button></Link>
            </div>
        </>
    )
}

export default Home;