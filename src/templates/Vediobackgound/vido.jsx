import kll from "../../assets/kll.mp4"
import { Navbar } from "../Navbar/Navbar"

import "./vido.css"
export const Navbar1=()=>{
    return (
        <div className="vid" >
            <div className="overlay"></div>
            <video src={kll} autoPlay muted loop/>
            <div className="content">
                
             <Navbar/>
             <div className="vidcatnetbt">
                <span>WORK HARDER, GET STRONGER</span>
                <span>EASY WITH OUR  <span className="gym">GYM</span></span> 
                <button>BECOME A MEMBER</button>
             </div>

            </div>
            
        </div>
    )
}