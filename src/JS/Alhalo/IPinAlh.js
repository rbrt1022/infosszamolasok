//import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";
import Alhalo from "../Tartalom/Alhalo";

const IPALH = () => {
    function ALHM() {
        //Hibaüzenet konstanst érték
        const hibauzenet = "Hiba!"
        //Adatok kinyerése
        const IP = document.getElementById("ip").value
        const MASZK = document.getElementById("maszk").value
        //OKtetekre bontás
        const IPoktetek = IP.split(".");
        const MASZKoktetek = MASZK.split(".");
        //IP Oktetek átváltása kettesbe
        let IPoktetekBIN = ["0"], BINIP = "0", MASZKoktetekBIN = ["0"], BINMASZK = "0";
        let negativ = false
        for (let index = 0; index < 4; index++)
        {
            let szam2 = IPoktetek[index];
            let uszam2 = szam2;
            let kettes = "";
            for(let i=0;i<szam2.length;i++)
            {
                if(Number(IPoktetek[index]) > 255 || !(szam2[i] === '0' || szam2[i] === '1' || szam2[i] === '2' || szam2[i] === '3' || szam2[i] === '4' || szam2[i] === '5' ||szam2[i] === '6' || szam2[i] === '7' || szam2[i] === '8' || szam2[i] === '9'))
                {
                    negativ = true;
                }
            }
            if(negativ === false)
            {
                
                while(szam2 !== 0)
                {
                    if(szam2 % 2 === 0)
                    {
                        kettes = "0" + kettes;
                        szam2 = szam2/2;
                    }
                    else if(szam2 % 2 === 1)
                    {
                        kettes = "1" + kettes;
                        szam2--;
                        szam2 = szam2/2;

                    }
                    if(szam2 === 1)
                    {
                        kettes = "1" + kettes;
                        szam2--;
                    }
                    console.log(kettes);
                }
                if(uszam2 < 128)
                {
                    kettes = "0" + kettes;
                    if(uszam2 < 64)
                    {
                        kettes = "0" + kettes;
                        if(uszam2 < 32)
                        {
                            kettes = "0" + kettes;
                            if(uszam2 < 16)
                            {
                                kettes = "0" + kettes;
                                if(uszam2 < 8)
                                {
                                    kettes = "0" + kettes;
                                    if(uszam2 < 4)
                                    {
                                        kettes = "0" + kettes;
                                        if(uszam2 < 2)
                                        {
                                            kettes = "0" + kettes;
                                            if(uszam2 > 1)
                                            {
                                                kettes = "0" + kettes;
                                            }
                                        }
                                    }
                                }
                            }
                            
                            
                        }
                    }
                }
                IPoktetekBIN[index] = kettes;
                BINIP = IPoktetekBIN[0]+"."+IPoktetekBIN[1]+"."+IPoktetekBIN[2]+"."+IPoktetekBIN[3]
            }
            else{
                //negativ = true;
                BINIP = hibauzenet
            }
        }
        //Maszk Oktetek átváltása kettesbe
        for (let index = 0; index < 4; index++)
        {
            let szam2 = MASZKoktetek[index];
            let kettes = "";
            let uszam2 = szam2;
            for(let i=0;i<szam2.length;i++)
            {
                if(!(MASZKoktetek[index] === '0' || MASZKoktetek[index] === '128' || MASZKoktetek[index] === '192' || MASZKoktetek[index] === '224' || MASZKoktetek[index] === '240' || MASZKoktetek[index] === '248' || MASZKoktetek[index] === '252' || MASZKoktetek[index] === '254' || MASZKoktetek[index] === '255'))
                {
                    negativ = true;
                }
            }
            if(negativ === false)
            {
            //Kettesbe váltás próba
            while(szam2 !== 0)
            {
                if(szam2 % 2 === 0)
                {
                    kettes = "0" + kettes;
                    szam2 = szam2/2;
                }
                else if(szam2 % 2 === 1)
                {
                    kettes = "1" + kettes;
                    szam2--;
                    szam2 = szam2/2;

                }
                if(szam2 === 1)
                {
                    kettes = "1" + kettes;
                    szam2--;
                }
                console.log(kettes);
            }
            if (uszam2 == 0) {
                kettes = "00000000"
            }
            MASZKoktetekBIN[index] = kettes;
            BINMASZK = MASZKoktetekBIN[0]+"."+MASZKoktetekBIN[1]+"."+MASZKoktetekBIN[2]+"."+MASZKoktetekBIN[3]
            }
            else{
                //negativ = true;
                BINMASZK = hibauzenet
            }
        }
        
        const tablazat = document.getElementById("tablazat2")

        //ÉS művelet meghatározása
        let IPESMASZKBIN = ""
        for (let i = 0; i < 35; i++)
            {
                if (BINIP[i] == "1" && BINMASZK[i] == "1")
                {
                    IPESMASZKBIN = IPESMASZKBIN + "1"
                    console.log("Igavóóóót!")
                }
                else if (BINIP[i] == "." && BINMASZK[i] == ".")
                {
                    IPESMASZKBIN = IPESMASZKBIN + "."
                    console.log("Pontocskaaa")
                }
                else
                {
                    IPESMASZKBIN = IPESMASZKBIN + "0"
                    console.log("Hamisvooot")
                }
            }

        //BINÁRIS kiíratás
        tablazat.innerHTML = 
        `<div class="enyhezold">
            <h3>IP cím binárisan: <span class="binary">`+BINIP+`</span></h3>
            <h3>Alhálózati maszk binárisan: <span class="binary">`+BINMASZK+`</span></h3>
            <h3>ÉS művelet után binárisan: <span class="binary">`+IPESMASZKBIN+`</span></h3>
        </div>`;

        //IPESMASZKBIN átalakítása decimális számrendszerbe
        let bit = "0";
        let helyiertekosszeg = 0;
        let tizes = [0,0,0,0]
        let IPESMASZKBINOKT = IPESMASZKBIN.split("."), IPESMASZKOKT = [""]
        let IPESMASZK = ""
        let hossz = 8;
        for (let index = 0; index < 4; index++) {
            console.log("Új oktet")
            for(let i=0; i<hossz; i++)
            {
                //console.log(i);
                bit = IPESMASZKBINOKT[index][i];
                console.log("Bitem:"+bit);
                //tizes += bit*Math.pow(2,hossz-i);
                //console.log(bit*Math.pow(2,hossz-i-1));
                if(bit === "0" || bit === "1")
                {
                helyiertekosszeg = bit*Math.pow(2,hossz-i-1);
                tizes[index]+=helyiertekosszeg;
                console.log(helyiertekosszeg);
                console.log(tizes[index]);
                //ujszam2(tizes);
                }
                /*else
                {
                ujszam2("Hiba! Nem várt karakter");
                jelzo=true;
                break;
                }*/
                
            }
            IPESMASZKOKT[index] = tizes[index]
            
        }
        IPESMASZK = IPESMASZKOKT[0]+"."+IPESMASZKOKT[1]+"."+IPESMASZKOKT[2]+"."+IPESMASZKOKT[3]

        //Meghatározni hány IP cím fér bele az alhálózati tartományba
        let alhbits = MASZKoktetekBIN[0]+MASZKoktetekBIN[1]+MASZKoktetekBIN[2]+MASZKoktetekBIN[3]
        console.log(alhbits)
        let nullaosszeszamlalo = 0
        for (let index = 0; index < 32; index++) {
            if (alhbits[index]==="0") {
                nullaosszeszamlalo++;
            }
        }
        console.log("Összeszámolt nullák: "+nullaosszeszamlalo)
        let alhmeret = Math.pow(2,nullaosszeszamlalo);
        
        //IP-k meghatározása
        let ElsoIP = IPESMASZKOKT[0]+"."+IPESMASZKOKT[1]+"."+IPESMASZKOKT[2]+"."+(Number(IPESMASZKOKT[3])+1)
        let UtolsoIP,SzorasiIP

        //Erre jelenleg nincs még szükség, korlátozva van /24-re és fölé
        // if(alhmeret>256)
        // {
        //     let rendezetlenutsooktet = Number(IPESMASZKOKT[3])+alhmeret-2, rendezettusooktet
        //     IPESMASZKOKT[2] += (rendezetlenutsooktet)%256
        //     while(rendezetlenutsooktet > 256)
        //     {
        //         console.log(rendezetlenutsooktet)
        //         rendezetlenutsooktet -=246;
        //     }
        //     console.log(rendezetlenutsooktet)

        //     UtolsoIP = IPESMASZKOKT[0]+"."+IPESMASZKOKT[1]+"."+IPESMASZKOKT[2]+"."+rendezetlenutsooktet
        //     SzorasiIP = IPESMASZKOKT[0]+"."+IPESMASZKOKT[1]+"."+IPESMASZKOKT[2]+"."+Number(rendezetlenutsooktet+1)
        // }
        // else
        // {
            UtolsoIP = IPESMASZKOKT[0]+"."+IPESMASZKOKT[1]+"."+IPESMASZKOKT[2]+"."+(Number(IPESMASZKOKT[3])+alhmeret-2)
            SzorasiIP = IPESMASZKOKT[0]+"."+IPESMASZKOKT[1]+"."+IPESMASZKOKT[2]+"."+(Number(IPESMASZKOKT[3])+alhmeret-1)
        // }

        
        console.log("Alhálózat mérete: "+alhmeret)
        
        //IP 255-re rendezése
        //Emlékezz hogy próbáld meg a alhmeretet elosztva 256-tal

        //ÉS művelet utáni Decimális kiíratás -> Alhálózati cím
        //ÉS művelet utáni Decimális kiíratás -> Első cím, utolsó cím, szórási
        tablazat.innerHTML += 
        `<div class="enyhezold">
            <h3>Alhálózati cím: `+IPESMASZK+`</h3>
            <h3>Első cím: `+ElsoIP+`</h3>
            <h3>Utolsó cím: `+UtolsoIP+`</h3>
            <h3>Szórási cím: `+SzorasiIP+`</h3>
        </div>`;
    }
    return ( 
        <div>
            <Alhalo />
            <div id="IPalh">
                <div className="enyhezold">
                    <h2>IP cím: <input className="beiros" id="ip" type="text" placeholder="Írjad bé!" /></h2>
                    {/* <h2>Alhálózati maszk: <input className="beiros" id="maszk" placeholder="Írjad bé!" type="text" /></h2> */}
                    <h2><label for="maszk">Alhálózati maszk: </label>
                    <select id="maszk" name="alhalo">
                        <option value="255.255.255.0">255.255.255.0</option>
                        <option value="255.255.255.128">255.255.255.128</option>
                        <option value="255.255.255.192">255.255.255.192</option>
                        <option value="255.255.255.224">255.255.255.224</option>
                        <option value="255.255.255.240">255.255.255.240</option>
                        <option value="255.255.255.248">255.255.255.248</option>
                        <option value="255.255.255.252">255.255.255.252</option>

                    </select></h2>
                    <button className="gomb" onClick={ALHM}>Szamolj</button>
                </div>
                <div id="tablazat2" className="tablazat"></div>
                
            </div>
        </div> 
    );
}
 
export default IPALH;