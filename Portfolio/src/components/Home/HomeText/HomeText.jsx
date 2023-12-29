import React from "react";
import { FiSend } from "react-icons/fi";
import { FaArrowDownLong } from "react-icons/fa6";
import './HomeText.css';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";


const HomeText = ()=>{
return (
    <div className="home-text-container">
        <div className="home-text">
            <NamePostDiscrition />
            <SayHelloBtn />
            <ScrollDown />
        </div>
    </div>

)
}

const NamePostDiscrition = ()=>{
    return (
        <div className="name-post-discription">
            <div className="name"><h1>Ahmed Ben Haj Amor  🖐️</h1></div>
            <div className="post"><p>React Devoloper</p></div>
            <div className="discription">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem quis odio aliquid molestias iure libero qui</p>
            </div>
        </div>
    )
}

const SayHelloBtn = ()=>{
    return (
        <div className="say-hello">
            <a href="#">
                <div className='say-hello-text'>Say Hello</div>
                <div className="say-hello-icon"><FiSend className='say-hello-icon'/></div>
            </a>
        </div>
    )
}

const ScrollDown = ()=>{
    return (
        <div>
            <BrowserRouter>
                <Link to='#about' smooth className="scroll-down">
                    <div className="scroll-down-text"><p>Scroll down</p></div>
                    <div className="scroll-down-icon"><FaArrowDownLong /></div>
                </Link>
            </BrowserRouter>
        </div>
        
    )
}
export default HomeText;