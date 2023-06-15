import React from "react";
import { useState } from "react";


const Tizesbol = () => {
    let [bin10, ujbinszam10] = useState('0');
    let [szam10, ujszam10] = useState('0');
    let [hexa10, ujhexaszam10] = useState('0');
    
    
    function Szamolas() {
        let kettes = "";
        let tizenhatos = "";
        let elem = document.getElementById("tizesszam");
        ujszam10(elem.value);
        console.log(szam10);
        let szam2 = szam10;
        let szam16 = szam10;
        let negativ = false;
        for(let i=0;i<szam2.length;i++)
        {
            if(!(szam2[i] === '0' || szam2[i] === '1' || szam2[i] === '2' || szam2[i] === '3' || szam2[i] === '4' || szam2[i] === '5' ||szam2[i] === '6' || szam2[i] === '7' || szam2[i] === '8' || szam2[i] === '9'))
            {
                negativ = true;
            }
        }
        console.log(negativ)
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
        ujbinszam10(kettes);
        }
        else{
            negativ = true;
            ujbinszam10("Hiba! Nem várt karakter");
        }

        //Tizenhatosba váltás próba
        if(negativ === false)
        {
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
            console.log(tizenhatos);
        }
        ujhexaszam10(tizenhatos);
        }
        else
        {
            ujhexaszam10("Hiba! Nem várt karakter");
        }
    }
    
    function Modosit()
    {
        let kettes = "";
        let elem = document.getElementById("tizesszam");
        ujszam10(elem.value);
        console.log(szam10);
        let szam2 = szam10;
        //let szam16 = szam;

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
            /*ujbinszam("Nyomd meg a gombot!")*/
        }
    }
    
    return ( 
        <div id='tizesbol'>
            <h2>Kérek egy decimális számot:</h2>
            <input className="beiros" id="tizesszam" type='number' onChange={Modosit} placeholder="Írjad bé!"></input>
            <button className="gomb" onClick={Szamolas}>Átváltás</button>

            <div id="tablazat">
                <h3>{szam10}</h3>
                <h4>Kettesbe átváltva: {bin10}</h4>
                <h4>Tizenhatosba átváltva: {hexa10}</h4>

            </div>
        </div>
     );
}
 
export default Tizesbol;