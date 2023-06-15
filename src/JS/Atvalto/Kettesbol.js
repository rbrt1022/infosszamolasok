import { useState } from "react";
import React from "react";


const Tizesbol = () => {
    let [bin2, ujbinszam2] = useState('0');
    let [szam2, ujszam2] = useState('0');
    let [hexa2, ujhexaszam2] = useState('0');
    
    
    function Szamolas() {
        let tizes = 0;
        let tizenhatos = "";
        let elem = document.getElementById("kettesszam");
        ujbinszam2(elem.value);
        //console.log(bin2);
        //let szam10 = bin2;
        let szam16 = 0;

        //Tizesbe váltás próba
        let hossz = elem.value.length
        //console.log(hossz);
        let bit = 0;
        let helyiertekosszeg =0;
        let jelzo = false;
        for(let i=0; i<hossz; i++)
        {
            //console.log(i);
            bit = bin2[i];
            //console.log(bit);
            //tizes += bit*Math.pow(2,hossz-i);
            //console.log(bit*Math.pow(2,hossz-i-1));
            if(bit === "0" || bit === "1")
            {
            helyiertekosszeg = bit*Math.pow(2,hossz-i-1);
            tizes+=helyiertekosszeg;
            console.log(helyiertekosszeg);
            console.log(tizes);
            ujszam2(tizes);
            }
            else
            {
            ujszam2("Hiba! Nem várt karakter");
            jelzo=true;
            break;
            }
            
        }
        szam16 = tizes;
        
        
    
        if(jelzo === false)
        {
        //Tizenhatosba váltás próba
        while(szam16 !== 0)
        {
            if(szam16 % 16 === 0)
            {
                tizenhatos = "0" + tizenhatos;
                szam16 = szam16/16;
            }
            else if(szam16 % 16 === 1)
            {
                tizenhatos = "1" + tizenhatos;
                szam16--;
                szam16 = szam16/16;
            }
            else if(szam16 % 16 === 2)
            {
                tizenhatos = "2" + tizenhatos;
                szam16-=2;
                szam16 = szam16/16;
            }
            else if(szam16 % 16 === 3)
            {
                tizenhatos = "3" + tizenhatos;
                szam16-=3;
                szam16 = szam16/16;
            }
            else if(szam16 % 16 === 4)
            {
                tizenhatos = "4" + tizenhatos;
                szam16-=4;
                szam16 = szam16/16;
            }
            else if(szam16 % 16 === 5)
            {
                tizenhatos = "5" + tizenhatos;
                szam16-=5;
                szam16 = szam16/16;
            }
            else if(szam16 % 16 === 6)
            {
                tizenhatos = "6" + tizenhatos;
                szam16-=6;
                szam16 = szam16/16;
            }
            else if(szam16 % 16 === 7)
            {
                tizenhatos = "7" + tizenhatos;
                szam16-=7;
                szam16 = szam16/16;
            }
            else if(szam16 % 16 === 8)
            {
                tizenhatos = "8" + tizenhatos;
                szam16-=8;
                szam16 = szam16/16;
            }
            else if(szam16 % 16 === 9)
            {
                tizenhatos = "9" + tizenhatos;
                szam16-=9;
                szam16 = szam16/16;
            }
            else if(szam16 % 16 === 10)
            {
                tizenhatos = "A" + tizenhatos;
                szam16-=10;
                szam16 = szam16/16;
            }
            else if(szam16 % 16 === 11)
            {
                tizenhatos = "B" + tizenhatos;
                szam16-=11;
                szam16 = szam16/16;
            }
            else if(szam16 % 16 === 12)
            {
                tizenhatos = "C" + tizenhatos;
                szam16-=12;
                szam16 = szam16/16;
            }
            else if(szam16 % 16 === 13)
            {
                tizenhatos = "D" + tizenhatos;
                szam16-=13;
                szam16 = szam16/16;
            }
            else if(szam16 % 16 === 14)
            {
                tizenhatos = "E" + tizenhatos;
                szam16-=14;
                szam16 = szam16/16;
            }
            else if(szam16 % 16 === 15)
            {
                tizenhatos = "F" + tizenhatos;
                szam16-=15;
                szam16 = szam16/16;
            }
            else if(szam16 === 15)
            {
                tizenhatos = "F" + tizenhatos;
                szam16 = 0;
            }
            else if(szam16 === 14)
            {
                tizenhatos = "E" + tizenhatos;
                szam16 = 0;
            }
            else if(szam16 === 13)
            {
                tizenhatos = "D" + tizenhatos;
                szam16 = 0;
            }
            else if(szam16 === 12)
            {
                tizenhatos = "C" + tizenhatos;
                szam16 = 0;
            }
            else if(szam16 === 11)
            {
                tizenhatos = "B" + tizenhatos;
                szam16 = 0;
            }
            else if(szam16 === 10)
            {
                tizenhatos = "A" + tizenhatos;
                szam16 = 0;
            }
            else if(szam16 === 9)
            {
                tizenhatos = "9" + tizenhatos;
                szam16 = 0;
            }
            else if(szam16 === 8)
            {
                tizenhatos = "8" + tizenhatos;
                szam16 = 0;
            }
            else if(szam16 === 7)
            {
                tizenhatos = "7" + tizenhatos;
                szam16 = 0;
            }
            else if(szam16 === 6)
            {
                tizenhatos = "6" + tizenhatos;
                szam16 = 0;
            }
            else if(szam16 === 5)
            {
                tizenhatos = "5" + tizenhatos;
                szam16 = 0;
            }
            else if(szam16 === 4)
            {
                tizenhatos = "4" + tizenhatos;
                szam16 = 0;
            }
            else if(szam16 === 3)
            {
                tizenhatos = "3" + tizenhatos;
                szam16 = 0;
            }
            else if(szam16 === 2)
            {
                tizenhatos = "2" + tizenhatos;
                szam16 = 0;
            }
            else if(szam16 === 1)
            {
                tizenhatos = "1" + tizenhatos;
                szam16 = 0;
            }
            //console.log(tizenhatos);
        }
        ujhexaszam2(tizenhatos);
        }
        else
        {
            ujhexaszam2("Hiba! Nem várt karakter");
        }
    }
    
    function Modosit()
    {
        let tizes = 0;
        //let tizenhatos = "";
        let elem = document.getElementById("kettesszam");
        ujbinszam2(elem.value);
        //console.log(bin2);
        //let szam10 = bin2;
        //let szam16=0;

        //Tizesbe váltás próba
        let hossz = elem.value.length
        //console.log(hossz);
        let bit = 0;
        let helyiertekosszeg =0;
        for(let i=0; i<hossz; i++)
        {
            //console.log(i);
            bit = bin2[i];
            //console.log(bit);
            //tizes += bit*Math.pow(2,hossz-i);
            //console.log(bit*Math.pow(2,hossz-i-1));
            if(bit === "0" || bit === "1")
            {
            helyiertekosszeg = bit*Math.pow(2,hossz-i-1);
            tizes+=helyiertekosszeg;
            console.log(helyiertekosszeg)
            console.log(tizes)
            }
            else
            {
            break;
            }
            
        }
        //let szam16 = tizes;
        
    }
    
    return ( 
        <div id='tizesbol'>
            <h2>Kérek egy bináris számot:</h2>
            <input className="beiros" id="kettesszam" type='number' onChange={Modosit} placeholder="Írjad bé!"></input>
            <button className="gomb" onClick={Szamolas}>Átváltás</button>

            <div id="tablazat">
                <h3>{bin2}</h3>
                <h4>Tizesbe átváltva: {szam2}</h4>
                <h4>Tizenhatosba átváltva: {hexa2}</h4>

            </div>
        </div>
     );
}
 
export default Tizesbol;