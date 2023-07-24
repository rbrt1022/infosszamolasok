import React from "react";
//import "../../CSS/"
//import Egyenlo from "./Alhalo/Egyenlo";
// import EMH from "../Alhalo/EM";
// import IPALH from "../Alhalo/IPinAlh";
import { Link } from "react-router-dom";
//import { Routes, Route, HashRouter, useRoutes } from "react-router-dom";



const Alhalo = () => {
    return ( 
        <div id="Alhalo">
            <h1>Alhálózatszámítás</h1>
            <div id="alhbelsomenu">
                <Link to="/alh/em" className="feherlink">Egyenlő méretű alhálózatok számítása</Link>
                <Link to="/alh/ipinalh" className="feherlink">Alhálózati cím kiderítése</Link>
                <Link to="/alh/km" className="feherlink">Különböző méretű alhálózatok számítása</Link>
            </div>
            {/* <HashRouter basename="/alh">
                <Routes>
                    <Route path="/alh/em" element={<EM />}/>
                    <Route path="/alh/ipinalh" element={<IPALH />}/>
                </Routes>
          
            </HashRouter> */}
        </div>
    );
}
 
export default Alhalo;