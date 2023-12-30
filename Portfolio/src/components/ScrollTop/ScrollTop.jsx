import React from 'react';
import './ScrollTop.css';
import { FaLongArrowAltUp } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';

function ScrollTop() {
  return (
    <BrowserRouter>
        <Link to='#' smooth>
            <div className='scroll-top'>
                <FaLongArrowAltUp className='arrowup'/>
            </div>
        </Link>
        
    </BrowserRouter>
        
    
  )
}

export default ScrollTop;