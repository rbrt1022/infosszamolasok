import React from "react";
import Alhalo from "../Tartalom/Alhalo";

const KMH = () => {
    let alhsz = 1

    function hozzaad(){
        alhsz++
        console.log(alhsz)
        const hozzaados = document.getElementById("alhcuccos")
        hozzaados.innerHTML +=
        `<div class="csutkafeher">
            <h2><label for="alhm">`+alhsz+`. alhálózat -  Állomásoknak szánt IP címek száma: </label>
                <select class="alhm" name="alhalomeret">
                    <option value="2">2</option>
                    <option value="6">6</option>
                    <option value="14">14</option>
                    <option value="30">30</option>
                    <option value="62">62</option>
                    <option value="126">126</option>
                    <option value="254">254</option>
                </select>
            </h2>
        </div>`
    }

    function KF(){


    }
    
    return(
        <div id="Kulonbozo">
            <Alhalo />
                <div class="enyhezold">
                    <h2>Felbontandó hálózat címe: <input className="beiros" id="halo" type="text" placeholder="Írjad bé!" /></h2>
                    <div id="alhcuccos">
                        <div class="csutkafeher">
                            <h2><label for="alhm">1. alhálózat -  Állomásoknak szánt IP címek száma: </label>
                                <select className="alhm" name="alhalomeret">
                                    <option value="2">2</option>
                                    <option value="6">6</option>
                                    <option value="14">14</option>
                                    <option value="30">30</option>
                                    <option value="62">62</option>
                                    <option value="126">126</option>
                                    <option value="254">254</option>
                                </select>
                            </h2>
                        </div>
                    </div>
                    <div id="gomb" className="csutkafeher" onClick={hozzaad}><h2 id="plusz">+</h2></div>

                    <button className="gomb" onClick={KF}>Szamolj</button>
                </div>
                <div id="tablazat">{/*tablazat*/}</div>
            </div>
    )
}

export default KMH;