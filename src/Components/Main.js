
import React from "react"
import "./style.css"
import "./style.css"

import rasm1 from "./Img/od.png"
import rasm2 from "./Img/on.png"
import rasm3 from "./Img/of.png"
import rasm4 from "./Img/rasm4.png"
import rasm5 from "./Img/rasm5.png"
import rasm6 from "./Img/rasm6.png"
import rasm7 from "./Img/rasm7.png"
import rasm8 from "./Img/rasm8.png"
import rasm9 from "./Img/rasm9.png"


function Book () {
    return (
   <main id="about">
            <h1>Latest Work</h1>

       <div className="container">
         
           <div className="row     justify-content-sm-start justify-content-center">
             <div className="mabo col-lg-4 col-md-4 col-sm-6 col-11">       
            <img src={rasm1} alt="" />    
             </div>
             <div className="mabo col-lg-4 col-md-4 col-sm-6 col-11">
             <img src={rasm2} alt="" />             
             </div>
             <div className="mabo col-lg-4 col-md-4 col-sm-6 col-11">
             <img src={rasm3} alt="" />
             </div>
             <div className="mabo col-lg-4 col-md-4 col-sm-6 col-11">
             <img src={rasm4} alt="" />
             </div>
             <div className="mabo col-lg-4 col-md-4 col-sm-6 col-11">
             <img src={rasm5} alt="" />
             </div>
             <div className="mabo col-lg-4 col-md-4 col-sm-6 col-11">
             <img src={rasm6} alt="" />
             </div>
             <div className="mabo col-lg-4 col-md-4 col-sm-6 col-11">
             <img src={rasm7} alt="" />
             </div>
             <div className="mabo col-lg-4 col-md-4 col-sm-6 col-11">
             <img src={rasm8} alt="" />
             </div>
             <div className="mabo col-lg-4 col-md-4 col-sm-6 col-11">
             <img src={rasm9} alt="" />
             </div>
           </div>
       </div>
   </main>

    )
}

export default Book;

