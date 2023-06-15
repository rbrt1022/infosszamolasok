import React from "react";
import { useState } from "react";

const Egyenlo = () => {
    let [cimosztaly, ujcimosztaly] = useState(' ');
    //let [emaszk, ujemaszk] = useState(' ');
    //let [alhalocim, ujalhalocim] = useState(' ');
    //let [elsoip, ujelsoip] = useState(' ');
    //let [utolso, ujutolsoip] = useState(' ');
    //let [szoras, ujszoras] = useState(' ');
    let [tablazat, ujtab] = useState(<h2>Számolás helye</h2>);
    function EF() {
        //Nullára definiálni a változókat
        //Deklarálni változót a táblázat kimenetéhez
        let szamolt1 = "";
        //táblázat beolvasása
        const tab = document.getElementById("tablazat");
        //oktetek beolvasása
        const halo = document.getElementById("halo");
        let halocim = halo.value;
        //Alhálózatcím okteteinek tördelése
        let oktetek = halocim.split(".");
        let oktet1 = [Number(oktetek[0])];
        let oktet2 = [Number(oktetek[1])];
        let oktet3 = [Number(oktetek[2])];
        let oktet4 = [Number(oktetek[3])];
        //Dekl - Alh IP címek
        let alhokt2 = Number(oktetek[1]), alhokt3 = oktetek[2], alhokt4 = oktetek[3]
        //Alhálózati maszk meghatározásához szükséges változó
        let alhm = [128,192,224,240,248,252,254,255]
        //Utolsó oktetek
        //címosztály meghatározása
        //A
        if(oktet1 < 128 && oktet1 > 0)
        {
            if(oktet1==10)
                ujcimosztaly("A");
            else
                ujcimosztaly("A (Nem privát címtartomány, nem oszthatsz innen IP-t)")
        }
        //B
        else if(oktet1 < 192 && oktet1 > 127)
        {
            if(oktet1==172 && oktet2 < 32 && oktet2 > 15)
                ujcimosztaly("B");
            else
                ujcimosztaly("B (Nem privát címtartomány, nem oszthatsz innen IP-t)")
        } 
        //C
        else if(oktet1 > 191 && oktet1 < 224)
        {
            if(oktet1==192 && oktet2==168)
                ujcimosztaly("C");
            else
                ujcimosztaly("C (Nem privát címtartomány, nem oszthatsz innen IP-t)")
        } 
        else
            ujcimosztaly("Ez nem privát címtartomány, nem oszthatsz innen IP-t")

        //AlhMaszk meghatározása
        let haloksz = document.getElementById('haloksz');
        let halokszolv = haloksz.value;
        let actualalhsz,alhmeret = 0,prefix, allomasszam=0, alhalomoktet2 =0,alhalomoktet3=0, alhalomoktet4=0
        let oktet2m
        let oktet21 = 0,oktet22 = 0,oktet23 = 0,oktet24 = 0,oktet31 = 0,oktet32 = 0,oktet33 = 0,oktet34 = 0,oktet41 = 0,oktet42 = 0,oktet43 = 0,oktet44 = 0,oktet12 = 0,oktet13 = 0,oktet14 = 0
        let oktetk1 = 0, oktetk2 = 0,oktetk3 = 0,oktetk4 = 0
        if (halokszolv > 0)
        {
            
        
            if (oktet4 % 4 === 0 && oktet2 < 256 && oktet3 < 256 && oktet4 < 256) {
                
                if (cimosztaly === "A")
                {
                    if(halokszolv === 1)
                    {
                        tab.innerHTML = 
                            `<div>
                                <h3>Prefix: /8</h3>
                                <h3>Alhálózati maszk: 255.0.0.0</h3>
                                <h3>Állomások száma: `+(Math.pow(2,24)-2)+`</h3>
                                <h3>Alhálócím: 10.0.0.0</h3>
                                <h3>Első ip: 10.0.0.1</h3>
                                <h3>Utolsó ip: 10.255.255.254</h3>
                                <h3>Szórási cím: 10.255.255.255</h3>
                                
                            </div>`
                        
                    }
                    else if (halokszolv > 1) 
                    {
                        //Folyt itt valamit xd
                        //alhokt3=Number(oktet3);
                        //alhokt4=0
                        //let igaz=0

                        for (let i = 0; i < 24; i++) {
                            if (Math.pow(2,i) >= halokszolv) 
                            {
                                actualalhsz = Math.pow(2,i);
                                alhmeret = Math.pow(2,24-i);
                                prefix = 8+i;
                                allomasszam = (Math.pow(2,24-i)-2);
                                if (i<8) {
                                    alhalomoktet2=alhm[i];
                                }
                                else if (i>=8 && i<=15) {
                                    alhalomoktet2=255;
                                    alhalomoktet3=alhm[i]
                                }
                                else if (i>=16 && i<=23) {
                                    alhalomoktet2=255;
                                    alhalomoktet3=255;
                                    alhalomoktet4=alhm[i]
                                }
                                break;
                            }
                        }

                        alhmeret-=oktet4
                        
                        //Előzetes információk
                        tab.innerHTML = 
                            `<div>
                                <h3>Prefix: /`+prefix+`</h3>
                                <h3>Alhálózati maszk: 255.`+alhalomoktet2+`.`+alhalomoktet3+`.`+alhalomoktet4+`</h3>
                                <h3>Állomások száma: `+allomasszam+`</h3>
                            </div>`

                        //Alhálózatok meghatározása


                        for (let i = 0; i < ((Number(halokszolv)*4) + 1); i++) 
                        {
                            //console.log(oktet23)
                            //Alhálózatok meghatározása
                            if (i===0) {
                                oktet1[i] = Number(oktetek[0]);
                                oktet2[i] = Number(oktetek[1]);
                                oktet3[i] = Number(oktetek[2]);
                                oktet4[i] = Number(oktetek[3]);
                            }
                            else{
                                oktet1[i] += oktet1[(i-1)];
                                oktet2[i] += oktet2[(i-1)];
                                oktet3[i] += oktet3[(i-1)];
                                oktet4[i] += oktet4[(i-1)];
                            }

                            //Oktetek 256-osra rendezése
                            if (oktet4[i]>255) {
                                oktet3[i+1]=Math.floor(oktet4[i]/256)
                                //console.log(alhokt4/256)
                                oktet4[i]=oktet4[i]%256
                                
                            }
                            if (oktet3[i]>255) {
                                oktet2[i+1]=(Math.floor(oktet3[i]/256))
                                //console.log(alhokt3/256)
                                oktet3[i]=oktet3[i]%256
                            }
                            

                            /*console.log("Oktet41: "+oktet41+"\nOktet31: "+oktet31)
                            console.log("Report: "+oktet2m)
                            if (oktet41 === 0 && oktet31 === 0 && i > 1) {
                                oktet21=oktet2m+1
                                console.log("Jelen: "+oktet21)
                            }
                            
                            

                            /*
                            //Második oktetek lerendezése
                            if (oktet21>255) {
                                //oktet24+=(Math.floor(oktet34/256))
                                //console.log(alhokt3/256)
                                oktet21=oktet21%256
                            }
                            if (oktet22>255) {
                                //oktet24+=(Math.floor(oktet34/256))
                                //console.log(alhokt3/256)
                                oktet22=oktet22%256
                            }
                            if (oktet23>255) {
                                //oktet24+=(Math.floor(oktet34/256))
                                //console.log(alhokt3/256)
                                oktet23=oktet23%256
                            }
                            if (oktet24>255) {
                                //oktet24+=(Math.floor(oktet34/256))
                                //console.log(alhokt3/256)
                                oktet24=oktet24%256
                            }
                            */
                            

                            

                            /*console.log("Előtte: "+oktet21);
                            if (oktet44===255&&oktet34===255) {
                                oktet21=oktet24+1
                            }
                            console.log("Utána: "+oktet21);*/
                            //oktet41 = (allomasszam+2)*(i+1)
                            //alhokt3[i]+=Math.floor((256/alhokt4))
                            
                            
                            
                        }

                        for (let i = 0; i < (4*Number(halokszolv) + 1); i+4) 
                        {
                            //Kiiratás
                            if (i === Number(halokszolv)) 
                            {
                                if (actualalhsz!=halokszolv)
                                {
                                    console.log("Lefut")
                                    tab.innerHTML += `
                                    <div>
                                        <h2>Felesleg</h2>
                                        <h3>Alhálócím: 10.`+oktet2[i]+`.`+oktet3[i]+`.`+oktet4[i]+`</h3>
                                        <h3>Első ip: 10.`+oktet2[i+1]+`.`+oktet3[i+1]+`.`+oktet4[i+1]+`</h3>
                                        <h3>Utolsó ip: 10.255.255.254</h3>
                                        <h3>Szórási cím: 10.255.255.255</h3>
                                    </div>`

                                }
                                
                            }
                            else
                            {
                                tab.innerHTML += `
                                <div>
                                    <h2>`+((i/4)+1)+`.alhálózat</h2>
                                    <h3>Alhálócím: 10.`+oktet2[i]+`.`+oktet3[i]+`.`+oktet4[i]+`</h3>
                                    <h3>Első ip: 10.`+oktet2[i+1]+`.`+oktet3[i+1]+`.`+oktet4[i+1]+`</h3>
                                    <h3>Utolsó ip: 10.`+oktet2[i+2]+`.`+oktet3[i+2]+`.`+oktet4[i+2]+`</h3>
                                    <h3>Szórási cím: 10.`+oktet2[i+3]+`.`+oktet3[i+3]+`.`+oktet4[i+3]+`</h3>
                                </div>`

                            }
                        }
                        //ujtab(szamolt1);    
                    }
                        //console.log(szamolt1);
                    
                }
                if (cimosztaly === "B")
                {
                    if(halokszolv == 1)
                    {
                        ujtab(
                            <div>
                                <h2>Egy alhálózat esetében csak az alábbi opció lehetséges</h2>
                                <h3>Prefix: /16</h3>
                                <h3>Alhálózati maszk: 255.255.0.0</h3>
                                <h3>Hosztok száma: {Math.pow(2,16)}</h3>
                                <h3>Alhálócím: 172.16.0.0</h3>
                                <h3>Első ip: 172.16.0.1</h3>
                                <h3>Utolsó ip: 172.31.255.254</h3>
                                <h3>Szórási cím: 10.255.255.255</h3>
                            </div>
                        )
                    }
                }
                if (cimosztaly === "C")
                {
                    if(halokszolv == 1)
                    {
                        ujtab(
                            <div>
                                <h2>Egy alhálózat esetében csak az alábbi opció lehetséges</h2>
                                <h3>Prefix: /24</h3>
                                <h3>Alhálózati maszk: 255.255.255.0</h3>
                                <h3>Hosztok száma: {Math.pow(2,16)}</h3>
                                <h3>Alhálócím: 192.168.{oktet3}.0</h3>
                                <h3>Első ip: 192.168.{oktet3}.1</h3>
                                <h3>Utolsó ip: 192.168.{oktet3}.254</h3>
                                <h3>Szórási cím: 192.168.{oktet3}.255</h3>
                            </div>
                        )
                    }
                }
            }
            else{
                ujtab(<h2>A beírt ip cím nem lehet alhálózatcím.</h2>)
            }
        }
        else{
            ujtab("Hiba")
        }
        console.log("Vége")
        
    }

    return (
        <div>
            <div className="feher alh">Javascript-tel megoldani</div>
            <div id="Egyenlo">
                <h2>Felbontandó hálózat címe: <input className="beiros" id="halo" type="text" placeholder="Írjad bé!" /></h2>
                <h2>Egyenlő nagyságú alhálózatok száma: <input className="beiros" id="haloksz" placeholder="Írjad bé!" type="text" /></h2>
                <button className="gomb" onClick={EF}>Szamolj</button>
                <h3>Beírt cím osztálya: {cimosztaly}</h3>
                <div id="tablazat">{tablazat}</div>
                
            </div>
        </div> 
    );
}
 
export default Egyenlo;