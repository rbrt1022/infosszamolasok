import React from "react";
import Alhalo from "../Tartalom/Alhalo";

const KMH = () => {
    let alhsz = 1
    
    function bubbleSort(arr) {
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
          for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
              var temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
          }
        }
      }
      
      // Példa használat:
      var myArray = [254, 16, 126, 2, 30, 2, 126]; // A saját változód, amit rendezni szeretnél
      console.log("Eredeti sorrend: " + myArray); // Kiírja az eredeti sorrendet
      bubbleSort(myArray); // Hívjuk meg a bubbleSort függvényt a tömbön
      console.log("Rendezett sorrend: " + myArray); // Kiírja a rendezett sorrendet
      

    function hozzaad(){
        //alhsz -> alhálózatok száma
        alhsz++
        console.log(alhsz)
        const hozzaados = document.getElementById("alhcuccos")
        hozzaados.innerHTML +=
        `<div class="csutkafeher">
            <h2><label for="alhm`+alhsz+`">`+alhsz+`. alhálózat - Állomásoknak szánt IP címek száma: </label>
                <select id="alhm`+alhsz+`" name="alhalomeret">
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
        //Alhálózatok méretének beolvasása, csökkenő sorba rendezése
        var alhmt = [0]
        for (let i = 0; i < alhsz; i++) {
            let alhm = document.getElementById(`alhm`+Number(i+1))
            console.log(alhm)
            alhmt[i] = Number(alhm.value)
            //console.log("Az alhm-nek a(z)"+i+". eleme: "+alhm[i])
        }
        console.log("Eredeti sorrend: " + alhmt); // Kiírja az eredeti sorrendet
        bubbleSort(alhmt); // Hívjuk meg a bubbleSort függvényt a tömbön
        console.log("Rendezett sorrend: " + alhmt); // Kiírja a rendezett sorrendet

        //Inputok kiolvasása - Hálócím
        const alhcinput = document.getElementById("halo");
        const alhc = alhcinput.value;

        //Oktetek szétvágása
        let oktetek = alhc.split(".");
        let oktet1 = Number(oktetek[0]);
        let oktet2 = Number(oktetek[1]);
        let oktet3 = Number(oktetek[2]);
        let oktet4 = Number(oktetek[3]);

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
            

            

            //Alh kiszámolása
            // let haloIP="", elsoIP="", utolsoIP="", szorasiIP=""
            //Címek - Deklarálások
            let oktet4h = oktet4, oktet3h = oktet3
            let oktet4e = oktet4, oktet3e = oktet3
            let oktet4u = oktet4, oktet3u = oktet3
            let oktet4s = oktet4, oktet3s = oktet3
            
            //Hálózatok számának megadása
            let halokszama = alhsz

            //Előre deklarált változó, ami a kövi kálózatnak mondja meg mennyi volt az előző, annyival kell növelni
            let jegyezdmegakovatkezonek

            for (let index = 0; index < halokszama; index++) {
            //Halózatméret meghatározás
            let allomasokszama = alhmt[index]
            console.log("Kiosztható IP címek száma: "+allomasokszama)
            let halomeret = allomasokszama+2
            console.log(halomeret)            
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

            //Alh kiszámolás - Csapó 2
            let haloIP, elsoIP,utolsoIP,szorasiIP
            //Halózati cím
            console.log("Utolsó oktet:", oktet4h);
            if (index !== 0) {
                oktet4h += jegyezdmegakovatkezonek
            }
            if (oktet4h > 255) {
                oktet3h+=Math.floor(oktet4h/256)
                oktet4h%=256                
            }
            haloIP=oktet1+"."+oktet2+"."+oktet3h+"."+oktet4h

            //Első cím
            console.log("Utolsó oktet:", oktet4e);
            if (index !== 0) {
                oktet4e += jegyezdmegakovatkezonek
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
            // if (index !== 0) {
            //     oktet4u += jegyezdmegakovatkezonek
            // }
            // else{
                oktet4u = oktet4h+halomeret-2
            // }
            if (oktet4u > 255) {
                oktet3u+=Math.floor(oktet4u/256)
                oktet4u%=256                
            }
            utolsoIP=oktet1+"."+oktet2+"."+oktet3u+"."+oktet4u

            //Szórási cím
            console.log("Utolsó oktet:", oktet4s);
            // if (index !== 0) {
            //     oktet4s += jegyezdmegakovatkezonek
            // }
            // else{
                oktet4s = oktet4h+halomeret-1
            // }
            if (oktet4s > 255) {
                oktet3s+=Math.floor(oktet4s/256)
                oktet4s%=256                
            }
            szorasiIP=oktet1+"."+oktet2+"."+oktet3s+"."+oktet4s

                let cuccos =
                `<div class="enyhezold">
                    <h3>Alhálózati maszk: `+maszk+`</h3>
                    <h3>Prefix (előtaghossz): /`+prefix+`</h3>
                    <h3>A hálózat kioszható címeinek száma: `+allomasokszama+` db<h3>
                    <div class="bordazott">
                        <h3>`+Number(index+1)+`. alhálózat</h3>
                        <h3>Alhálózati cím: `+haloIP+`<h3>
                        <h3>Első kiosztható IP: `+elsoIP+`<h3>
                        <h3>Utolsó kiosztható IP: `+utolsoIP+`<h3>
                        <h3>Szórási cím: `+szorasiIP+`<h3>
                    </div>
                </div>`

                if (index===0) {
                    tab.innerHTML=cuccos
                }
                else{
                    tab.innerHTML+=cuccos
                }

                jegyezdmegakovatkezonek = halomeret
                console.log("Ezt jegyeztem meg a következőnek: "+jegyezdmegakovatkezonek)
            }
            
        }
    
    }
    
    return(
        <div id="Kulonbozo">
            <Alhalo />
                <div className="enyhezold">
                    <h2>Felbontandó hálózat címe: <input className="beiros" id="halo" type="text" placeholder="Írjad bé!" /></h2>
                    <div id="alhcuccos">
                        <div className="csutkafeher">
                            <h2><label htmlFor="alhm1">1. alhálózat - Állomásoknak szánt IP címek száma: </label>
                                <select id="alhm1" name="alhalomeret">
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