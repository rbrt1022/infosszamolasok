import React from "react";

const CustomSize = () => {

    return ( 
        <div>
            <div className="feher alh">Javascript-tel megoldani</div>
            <div id="CustomSize">
                <h2>Felbontandó hálózat címe: <input className="beiros" id="halo" type="text" placeholder="Írjad bé!" /></h2>
                <h2>Állomások száma: <input className="beiros" id="haloksz" placeholder="Írjad bé!" type="text" /></h2>
                <button className="gomb" onClick={Calc}>Szamolj</button>
                <h3>Beírt cím osztálya: {cimosztaly}</h3>
                <div id="tablazat">{tablazat}</div>
                
            </div>
        </div> 
    );
}
 
export default CustomSize;