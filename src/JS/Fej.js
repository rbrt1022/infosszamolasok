import React from "react";
import "../CSS/Fej.css";
import { Link } from 'react-router-dom';

function megjelen()
{
    const menu = document.getElementById('menusor');
    if(menu.className==="eltunik")
    menu.className = "megjelenjeeel";
    else
    menu.className = "eltunik";
    const tartalom = document.getElementById('tartalom');
    if(tartalom.className==="zartmenu")
    tartalom.className = "nyitottmenu";
    else
    tartalom.className = "zartmenu";
}

const Fej = () => {
    return ( 
        <nav id="fejlec">
            <h1 id="cim" onClick={megjelen}>In<u>fos</u>szamolasok</h1>
            <div id='menusor' className="eltunik">
                <Link to="/" className='menuelem'>Kezdőlap</Link>
                <Link to="/sza" className='menuelem'>Számrendszer átváltó</Link>
                <Link to="/alh" className='menuelem'>Alhálózatszámítás</Link>
            </div>
        </nav>
    );
}
 
export default Fej;
