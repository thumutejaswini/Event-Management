import './Navbar.css';
import { Routes, Route, Link } from "react-router-dom";

import Form from '../Form/Form';
import Get from '../Form/Get/Get';
import Prgtheme from '../Prgtheme/Prgtheme';
import Mode from '../Mode/Mode';
import Home from '../Home/Home';
import Coordinater from '../Coordinater/Coordinater';
function Navbar() {
    return (
        <>

            <div className="navbar">
                <div className="clou">
                    <h2>Event Management</h2>
                    {/* <img src="https://www.freepnglogos.com/uploads/cloud-clipart/clipart-clouds-picture-images-0.png"></img> */}
                    
                </div>
                <nav>
                    <ul>
                    <li><Link to="/Home">HOME</Link></li>
                    <li><Link to="/Form">FORM</Link></li>
                        <li><Link to="/Get">GET</Link></li>
                        <li><Link to="/Mode">Activity</Link></li>
                        <li><Link to="/Prgtheme">Program Theme</Link></li>
                        <li><Link to="/Coordinater">Academic</Link></li>
                        <li><Link to="/">LOGIN</Link></li>
                    </ul></nav>
            </div>
         

         

            <Routes>

            <Route exact path='/Home' element={<Home />}></Route>
                 <Route exact path='/Get' element={<Get />}></Route>
                <Route exact path='/Form' element={<Form />}></Route>
                 <Route exact path='/Mode' element={<Mode />}></Route>
                <Route exact path='/Prgtheme' element={<Prgtheme />}></Route>
                <Route exact path='/Coordinater' element={<Coordinater />}></Route>

                 {/*<Route exact path='/Login' element={<Login />}></Route>  */}
            </Routes>
           

        </>
    )

}
export default Navbar;