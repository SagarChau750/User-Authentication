import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/login";
import Signup from "./routes/signup";
import Home from "./routes/home";

function App() {
  return (

    <div className="App">
      hello

      <BrowserRouter>
        <Routes>
        <Route path="/home" element = {<Home/>}></Route>

          <Route path="/login" element = {<Login/>}></Route>
          <Route path="/signup" element = {<Signup/>}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
