import React from "react";
import { useState } from "react";
import Alhalo from "../Tartalom/Alhalo";

const EM = () => {
    let [cimosztaly, ujcimosztaly] = useState(' ');

    function EF() {
        //Halocim bekerese
        const alhcinput = document.getElementById("halo");
        const alhc = alhcinput.value;
        console.log("Alhálózati cím bekérve:"+alhcinput);
        console.log("Alhálózati cím:"+alhc);
        //Oktetek szétvágása
        let oktetek = alhc.split(".");
        let oktet1 = Number(oktetek[0]);
        let oktet2 = Number(oktetek[1]);
        let oktet3 = Number(oktetek[2]);
        let oktet4 = Number(oktetek[3]);
        console.log("Alhálózati cím oktetekre darabolva: "+oktet1+" pont "+oktet2+" pont "+oktet3+" pont "+oktet4)
        //Cimosztaly meghatarozasa
        /*
        //A
        if(oktet1 < 128 && oktet1 > 0)
        {
            if(oktet1===10)
                ujcimosztaly("A");
            else
                ujcimosztaly("A (Nem privát címtartomány, nem oszthatsz innen IP-t)")
        }
        //B
        else if(oktet1 < 192 && oktet1 > 127)
        {
            if(oktet1===172 && oktet2 < 32 && oktet2 > 15)
                ujcimosztaly("B");
            else
                ujcimosztaly("B (Nem privát címtartomány, nem oszthatsz innen IP-t)")
        } 
        
        //C
        else*/ if(oktet1 > 191 && oktet1 < 224)
        {
            if(oktet1===192 && oktet2===168)
                ujcimosztaly("C");
            else
                ujcimosztaly("C (Nem privát címtartomány, nem oszthatsz innen IP-t)")
        } 
        else
            //ujcimosztaly("Ez nem privát címtartomány, nem oszthatsz innen IP-t")
            ujcimosztaly("Jelenleg csak C osztályú privát IP címtatomyánt tudok kezelni, az okozott kellemetlenségekért elnézést kérek!")
        
        //Alh méret, prefix és alhálózati maszk meghatározása
        let halokszama = Number(document.getElementById("haloksz").value)
        console.log("Egyenlő méretű alhálózatok száma: "+halokszama)
        let alhm = [0,128,192,224,240,248,252,254,255]
        const /*prefixA = 8, prefixB = 16,*/ prefixC = 24
        let prefix = 0, hosztokszama = 0, eredetihosztokszama = 0, amuugyhosztokszama = 0
        let alhalomoktet2=0,alhalomoktet3=0, alhalomoktet4=0
        //let szamlalo = 1
        let acthalok
        for (let i = 0; i < 33; i++) {
            if (halokszama <= Math.pow(2,i)) {
                console.log("Lefut")
                acthalok = Number(Math.pow(2,i));
                if (cimosztaly === 'C') {
                    prefix = prefixC+i
                    console.log("/"+prefix)
                    alhalomoktet2=255;
                    alhalomoktet3=255;
                    alhalomoktet4=alhm[i]
                    hosztokszama = Math.pow(2,(32-prefix))-2
                    console.log("Állomások száma: "+hosztokszama)
                    eredetihosztokszama = 254-oktet4
                    //amuugyhosztokszama = Math.round(eredetihosztokszama/(i+1))
                    // let amuugyhosztokszama = eredetihosztokszama/(i+1)
                }
                i=33
            }
            
        }
        console.log("Kiléptem")

        //Előzetes információk
        let tab = document.getElementById("tablazat")
        tab.innerHTML = 
        `<div class="enyhezold">
            <h3>Beírt cím osztálya:`+cimosztaly+`</h3>
            <h3>Prefix: /`+prefix+`</h3>
            <h3>Alhálózati maszk: 255.`+alhalomoktet2+`.`+alhalomoktet3+`.`+alhalomoktet4+`</h3>
            <h3>Állomások száma alhálózatra bontás NÉLKÜL: `+eredetihosztokszama+`</h3>
            <h3>Állomások száma: `+hosztokszama+`</h3>
            <h3>Alhálózatok száma: `+halokszama+`</h3>
        </div>`

        //Alhálózat meghatározása
        let okt1 = [oktet1], okt2 = [oktet2], okt3 = [oktet3], okt4 = [oktet4]
        let sorszam
        for (let index1 = 0; index1 < halokszama+1; index1++) {
            console.log(index1)
            sorszam = (index1+1)+". alhálózat"
            if (index1 === 0) {
                okt4[1] = okt4[0]+1
                okt4[2] = okt4[0]+hosztokszama
                okt4[3] = okt4[0]+hosztokszama+1
            }
            else if (index1 > 0 && index1 < halokszama) {
                okt4[0] = oktet4+((hosztokszama+2)*index1)
                okt4[1] = okt4[0]+1
                okt4[2] = okt4[0]+hosztokszama
                okt4[3] = okt4[0]+hosztokszama+1
            }
            else if (index1 === halokszama) {
                console.log("Ide belép")
                if (halokszama !== acthalok) {
                    console.log(acthalok, halokszama, acthalok-halokszama)
                    okt4[0] = oktet4+((hosztokszama+2)*index1)
                    okt4[1] = okt4[0]+1

                    //Kísérleti jellegű
                    //okt4[2] = okt4[0]+((hosztokszama+2)*(acthalok-halokszama))
                    //okt4[3] = okt4[0]+((hosztokszama)*(acthalok-halokszama))+1
                    okt4[2] = 254
                    okt4[3] = 255

                    //okt4[2] = oktet4+((hosztokszama)*(index1+(acthalok-halokszama)))
                    //okt4[3] = oktet4+((hosztokszama)*index1)
                    sorszam = "Felesleg"
                    
                }
            }

            if (okt4[0]>255) {
                //okt3[0] += 
            }

            if (index1 === 0) {
                tab.innerHTML += 
                `<div class="enyhezold">
                    <h3>`+sorszam+`</h3>
                    <h3>Alhálózatcím: `+okt1[0]+`.`+okt2[0]+`.`+okt3[0]+`.`+okt4[0]+`</h3>
                    <h3>Első IP: `+okt1[0]+`.`+okt2[0]+`.`+okt3[0]+`.`+okt4[1]+`</h3>
                    <h3>Utolsó IP: `+okt1[0]+`.`+okt2[0]+`.`+okt3[0]+`.`+okt4[2]+`</h3>
                    <h3>Szórási cím: `+okt1[0]+`.`+okt2[0]+`.`+okt3[0]+`.`+okt4[3]+`</h3>
                </div>`
            }
            else if (index1 > 0 && index1 < halokszama) {
                tab.innerHTML += 
                `<div class="enyhezold">
                    <h3>`+sorszam+`</h3>
                    <h3>Alhálózatcím: `+okt1[0]+`.`+okt2[0]+`.`+okt3[0]+`.`+okt4[0]+`</h3>
                    <h3>Első IP: `+okt1[0]+`.`+okt2[0]+`.`+okt3[0]+`.`+okt4[1]+`</h3>
                    <h3>Utolsó IP: `+okt1[0]+`.`+okt2[0]+`.`+okt3[0]+`.`+okt4[2]+`</h3>
                    <h3>Szórási cím: `+okt1[0]+`.`+okt2[0]+`.`+okt3[0]+`.`+okt4[3]+`</h3>
                </div>`
            }
            else if (index1 === halokszama) {
                console.log("Ide belép")
                if (halokszama !== acthalok) {
                    tab.innerHTML += 
                    `<div class="enyhezold">
                        <h3>`+sorszam+`</h3>
                        <h3>Alhálózatcím: `+okt1[0]+`.`+okt2[0]+`.`+okt3[0]+`.`+okt4[0]+`</h3>
                        <h3>Első IP: `+okt1[0]+`.`+okt2[0]+`.`+okt3[0]+`.`+okt4[1]+`</h3>
                        <h3>Utolsó IP: `+okt1[0]+`.`+okt2[0]+`.`+okt3[0]+`.`+okt4[2]+`</h3>
                        <h3>Szórási cím: `+okt1[0]+`.`+okt2[0]+`.`+okt3[0]+`.`+okt4[3]+`</h3>
                    </div>`
                    
                }
            }
            

            console.log("Aktuális hálók: "+acthalok)
                    console.log("FH által beírt hálók: "+halokszama)
        }
    }



    return ( 
        <div>
            <Alhalo />
            <div id="Egyenlo" >
                <div class="enyhezold">
                <h2>Felbontandó hálózat címe: <input className="beiros" id="halo" type="text" placeholder="Írjad bé!" /></h2>
                <h2>Egyenlő nagyságú alhálózatok száma: <input className="beiros" id="haloksz" placeholder="Írjad bé!" type="text" /></h2>
                <button className="gomb" onClick={EF}>Szamolj</button>
                </div>
                <div id="tablazat">{/*tablazat*/}</div>
                
            </div>
        </div> 
    );
}
 
export default EM;
