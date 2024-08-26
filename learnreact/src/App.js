import React, { useState } from "react"
import Nav from "./Nav";
import Home from "./Home";
import Main from "./Main";
import Pricing from "./Pricing";
import Stories from "./Stories";
import Footer from "./Footer";


function App(){
    const [show,setShow]=useState(false);

    return(
        <div className=" overflow-x-hidden " >
        <Nav 
        show={show}
        setShow={setShow}
        />
        <Home
        show={show}
        />
        <Main/>
        <Pricing/>
        <Stories/>
        <Footer/>
        </div>
    )
}
export default App;