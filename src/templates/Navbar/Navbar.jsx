import "./navbar.css"
export const Navbar=()=>{
    return (
        <div className="navbar">
            <div className="left">
                <span>TRANING </span><span className="sword">STUDIO</span>

            </div>
            <div className="Right">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CLASSES</li>
                    <li>SCHEDULES</li>
                    <li>CONTACT</li>
                   <button>SIG NUP</button>
                </ul>
            </div>
            

        </div>
    )
}