import React from "react";
import Alhalo from "../Tartalom/Alhalo";

const EMH = () => {
    function EF()
    {
        //Inputok kiolvasása - Hálócím
        const alhcinput = document.getElementById("halo");
        const alhc = alhcinput.value;
        //Input - Alhálózatok száma
        const halokszama = Number(document.getElementById("haloksz").value)
        //Input - Felhasználható IP-k
        const allomasokszama = Number(document.getElementById("alhm").value)
        let halomeret = allomasokszama+2
        //Oktetek szétvágása
        let oktetek = alhc.split(".");
        let oktet1 = Number(oktetek[0]);
        let oktet2 = Number(oktetek[1]);
        let oktet3 = Number(oktetek[2]);
        let oktet4 = Number(oktetek[3]);
        //Prefix, címosztály és maszk meghatározása
        //let alhm = [0,128,192,224,240,248,252,254,255]
        //Kitöltendő táblázat bekérése
        const tab = (document.getElementById("tablazat"))
        //Hálózatcím kiszűrése
        let joazalhalo = false
        if (oktet4 % 4 === 0 && oktet1<256 && oktet2<256 && oktet3<256 && oktet4<256 && oktet1>=0 && oktet2>=0 && oktet3>=0 && oktet4>=0) {
            joazalhalo = true
        }
        else
        {
            tab.innerHTML = 
                `<div class="enyhezold">
                    <h3>Nem érvényes alhálózati cím</h3>
                </div>`
        }

        let prefix = "", maszk = "" 
        if (joazalhalo === true) {
            //Alapinformációk meghatározása
            switch (allomasokszama) {
                case 2: 
                    
                        prefix = "30"
                        maszk = "255.255.255.252"

                    
                    break;
                case 6: 
                    
                        prefix = "29"
                        maszk = "255.255.255.248"

                    
                    break;
                case 14: 
                    
                        prefix = "28"
                        maszk = "255.255.255.240"

                    
                    break;
                case 30: 
                    
                        prefix = "27"
                        maszk = "255.255.255.224"

                    
                    break;
                case 62: 
                    
                        prefix = "26"
                        maszk = "255.255.255.192"

                    
                    break;
                case 126: 
                    
                        prefix = "25"
                        maszk = "255.255.255.128"

                    
                    break;
                case 254: 
                    
                        prefix = "24"
                        maszk = "255.255.255.0"

                    
                    break;
                default:
                    break;
            
                // default:
                //     tab.innerHTML += 
                //     `<div class="enyhezold">
                //         <h3>Ez az opció nem létezik jelen esetben.</h3>
                //     </div>`
                //    break;
            }

            tab.innerHTML =
            `<div class="enyhezold" id="alapinfo">
                <h3>Alhálózati maszk: `+maszk+`</h3>
                <h3>Prefix (előtaghossz): /`+prefix+`</h3>

            </div>`

            //Alh kiszámolása
            // let haloIP="", elsoIP="", utolsoIP="", szorasiIP=""
            //Címek - Deklarálások
            let oktet4h = oktet4, oktet3h = oktet3
            let oktet4e = oktet4, oktet3e = oktet3
            let oktet4u = oktet4, oktet3u = oktet3
            let oktet4s = oktet4, oktet3s = oktet3
            
            for (let index = 0; index < halokszama; index++) {
            //Alh kiszámolás - Csapó 2
            let haloIP, elsoIP,utolsoIP,szorasiIP
            //Halózati cím
            console.log("Utolsó oktet:", oktet4h);
            if (index !== 0) {
                oktet4h += halomeret
            }
            if (oktet4h > 255) {
                oktet3h+=Math.floor(oktet4h/256)
                oktet4h%=256                
            }
            haloIP=oktet1+"."+oktet2+"."+oktet3h+"."+oktet4h

            //Első cím
            console.log("Utolsó oktet:", oktet4e);
            if (index !== 0) {
                oktet4e += halomeret
            }
            else if (index===0){
                oktet4e++
            }
            if (oktet4e > 255) {
                oktet3e+=Math.floor(oktet4e/256)
                oktet4e%=256                
            }
            elsoIP=oktet1+"."+oktet2+"."+oktet3e+"."+oktet4e

            //Utolsó cím
            console.log("Utolsó oktet:", oktet4u);
            if (index !== 0) {
                oktet4u += halomeret
            }
            else{
                oktet4u += allomasokszama
            }
            if (oktet4u > 255) {
                oktet3u+=Math.floor(oktet4u/256)
                oktet4u%=256                
            }
            utolsoIP=oktet1+"."+oktet2+"."+oktet3u+"."+oktet4u

            //Szórási cím
            console.log("Utolsó oktet:", oktet4s);
            if (index !== 0) {
                oktet4s += halomeret
            }
            else{
                oktet4s += halomeret-1
            }
            if (oktet4s > 255) {
                oktet3s+=Math.floor(oktet4s/256)
                oktet4s%=256                
            }
            szorasiIP=oktet1+"."+oktet2+"."+oktet3s+"."+oktet4s

                if (index===0) {
                    tab.innerHTML +=
                    `<div class="enyhezold">
                        <h3>`+Number(index+1)+`. alhálózat</h3>
                        <h3>Alhálózati cím: `+haloIP+`<h3>
                        <h3>Első kiosztható IP: `+elsoIP+`<h3>
                        <h3>Utolsó kiosztható IP: `+utolsoIP+`<h3>
                        <h3>Szórási cím: `+szorasiIP+`<h3>
                    </div>`
                }
                tab.innerHTML +=
                `<div class="enyhezold">
                    <h3>`+Number(index+1)+`. alhálózat</h3>
                    <h3>Alhálózati cím: `+haloIP+`<h3>
                    <h3>Első kiosztható IP: `+elsoIP+`<h3>
                    <h3>Utolsó kiosztható IP: `+utolsoIP+`<h3>
                    <h3>Szórási cím: `+szorasiIP+`<h3>
                </div>`
            }
        }
    }
    

    return ( 
        <div>
            <Alhalo />
            <div id="Egyenlo" >
                <div class="enyhezold">
                    <h2>Felbontandó hálózat címe: <input className="beiros" id="halo" type="text" placeholder="Írjad bé!" /></h2>
                    <h2>Egyenlő nagyságú alhálózatok száma: <input className="beiros" id="haloksz" placeholder="Írjad bé!" type="number" /></h2>
                    <h2><label for="alhm">Állomásoknak szánt IP címek száma: </label>
                        <select id="alhm" name="alhalomeret">
                            <option value="2">2</option>
                            <option value="6">6</option>
                            <option value="14">14</option>
                            <option value="30">30</option>
                            <option value="62">62</option>
                            <option value="126">126</option>
                            <option value="254">254</option>
                        </select></h2>
                    <button className="gomb" onClick={EF}>Szamolj</button>
                </div>
                <div id="tablazat">{/*tablazat*/}</div>
            </div>
        </div> 
    );
}

 
export default EMH;
