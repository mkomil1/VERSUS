
import React from "react"
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs"
import "./style.css"


function Headercha () {
     
         return (
            <header>
           <div className="header">
           <div className="header_top">
                <div className="container">
                <div className="row">
                <div id="portfolio" className="navbar">
                    <a href="#" className="logo">VERSUS</a>
                    <div className="mg">
                    <BsList className="svg"/>
                       <ul className="ul">
                       <BsX className="menu-x"/>
                        <li>
                            <a href="#portfolio" className="active">Portfolio</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    </div>
                 
                                
                </div>

                </div>

                </div>
            </div>
            <div className="header_main">
                <div className="container">
                    <div className="row">
                       <div className="he-me-blok">
                       <h1>We build beautiful web and <br /> mobile apps.</h1>
                        <button className="btn">Get a quote</button>
                       </div>
                    </div>
                </div>
            </div>
           </div>
        </header>
         )
  
 }
 export default Headercha;

window.onload = function () {
    const  svgg = document.querySelector(".svg")
    const ull = document.querySelector(".ul")
    const menu_x = document.querySelector(".menu-x")
    svgg.addEventListener('click' , function () {
        ull.style.right = "0"
        // ull.style.display = "block"
        svgg.style.opacity = "0"   
    })

    
    menu_x.addEventListener('click' , function () {
        ull.style.right = "-100%"
        svgg.style.opacity = "1"   
          
        // ull.style.display = "none"

    })
}