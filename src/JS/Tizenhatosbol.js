import { useState } from "react";

const Tizenhatosbol = () => {
    let [bin16, ujbinszam16] = useState('0');
    let [szam16, ujszam16] = useState('0');
    let [hexa16, ujhexaszam16] = useState('0');

    function Szamolas()
    {
        let tizes = 0;
        let tizenhatos = "";
        let elem = document.getElementById("tizenhatosszam");
        ujhexaszam16(elem.value);
        //console.log(bin2);
        let szam10 = hexa16;
        let szam2 = 0;

        //Tizesbe váltás próba
        let hossz = elem.value.length
        //console.log(hossz);
        let hexaertek = 0;
        let helyiertekosszeg16 =0;
        let jelzo = false;
        for(let i=0; i<hossz; i++)
        {
            //console.log(i);
            hexaertek = hexa16[i];
            //console.log(bit);
            //tizes += bit*Math.pow(2,hossz-i);
            //console.log(bit*Math.pow(2,hossz-i-1));
            if(hexaertek === "0" || hexaertek === "1" || hexaertek === "3" || hexaertek === "4" || hexaertek === "5"
            || hexaertek === "6" || hexaertek === "7" || hexaertek === "8" || hexaertek === "9" || hexaertek === "2")
            {
                helyiertekosszeg16 = hexaertek*Math.pow(16,hossz-i-1);
                tizes+=helyiertekosszeg16;
                //console.log(helyiertekosszeg16);
                //console.log(tizes);
                ujszam16(tizes);
            }
            else if(hexaertek === "A" || hexaertek === "a")
            {
                helyiertekosszeg16 = 10*Math.pow(16,hossz-i-1);
                tizes+=helyiertekosszeg16;
                //console.log(helyiertekosszeg16);
                //console.log(tizes);
                ujszam16(tizes);
            }
            else if(hexaertek === "B" || hexaertek === "b")
            {
                helyiertekosszeg16 = 11*Math.pow(16,hossz-i-1);
                tizes+=helyiertekosszeg16;
                //console.log(helyiertekosszeg16);
                //console.log(tizes);
                ujszam16(tizes);
            }
            else if(hexaertek === "C" || hexaertek === "c")
            {
                helyiertekosszeg16 = 12*Math.pow(16,hossz-i-1);
                tizes+=helyiertekosszeg16;
                //console.log(helyiertekosszeg16);
                //console.log(tizes);
                ujszam16(tizes);
            }
            else if(hexaertek === "D" || hexaertek === "d")
            {
                helyiertekosszeg16 = 13*Math.pow(16,hossz-i-1);
                tizes+=helyiertekosszeg16;
                //console.log(helyiertekosszeg16);
                //console.log(tizes);
                ujszam16(tizes);
            }
            else if(hexaertek === "E" || hexaertek === "e")
            {
                helyiertekosszeg16 = 14*Math.pow(16,hossz-i-1);
                tizes+=helyiertekosszeg16;
                //console.log(helyiertekosszeg16);
                //console.log(tizes);
                ujszam16(tizes);
            }
            else if(hexaertek === "F" || hexaertek === "f")
            {
                helyiertekosszeg16 = 15*Math.pow(16,hossz-i-1);
                tizes+=helyiertekosszeg16;
                //console.log(helyiertekosszeg16);
                //console.log(tizes);
                ujszam16(tizes);
            }
            else
            {
                ujszam16("Hiba! Nem várt karakter");
                jelzo=true;
                break;
            }
            
        }
        szam2 = tizes;

        //Kettesbe
        let kettes = '';
        if(jelzo === false)
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
                //console.log(kettes);
            }
            ujbinszam16(kettes);
        }
        else{
            ujbinszam16("Hiba! Nem várt karakter");
        }
    }

    function Modosit()
    {
        let tizes = 0;
        let tizenhatos = "";
        let elem = document.getElementById("tizenhatosszam");
        ujhexaszam16(elem.value);
        //console.log(bin2);
        let szam10 = hexa16;
        let szam2 = 0;

        //Tizesbe váltás próba
        let hossz = elem.value.length
        //console.log(hossz);
        let hexaertek = 0;
        let helyiertekosszeg16 =0;
        let jelzo = false;
        for(let i=0; i<hossz; i++)
        {
            //console.log(i);
            hexaertek = hexa16[i];
            //console.log(bit);
            //tizes += bit*Math.pow(2,hossz-i);
            //console.log(bit*Math.pow(2,hossz-i-1));
            if(hexaertek === "0" || hexaertek === "1" || hexaertek === "3" || hexaertek === "4" || hexaertek === "5"
            || hexaertek === "6" || hexaertek === "7" || hexaertek === "8" || hexaertek === "9" || hexaertek === "2")
            {
                helyiertekosszeg16 = hexaertek*Math.pow(16,hossz-i-1);
                tizes+=helyiertekosszeg16;
                //console.log(helyiertekosszeg16);
                //console.log(tizes);
                //ujszam16(tizes);
            }
            else if(hexaertek === "A" || hexaertek === "a")
            {
                helyiertekosszeg16 = 10*Math.pow(16,hossz-i-1);
                tizes+=helyiertekosszeg16;
                //console.log(helyiertekosszeg16);
                //console.log(tizes);
                //ujszam16(tizes);
            }
            else if(hexaertek === "B" || hexaertek === "b")
            {
                helyiertekosszeg16 = 11*Math.pow(16,hossz-i-1);
                tizes+=helyiertekosszeg16;
                //console.log(helyiertekosszeg16);
                //console.log(tizes);
                //ujszam16(tizes);
            }
            else if(hexaertek === "C" || hexaertek === "c")
            {
                helyiertekosszeg16 = 12*Math.pow(16,hossz-i-1);
                tizes+=helyiertekosszeg16;
                //console.log(helyiertekosszeg16);
                //console.log(tizes);
                //ujszam16(tizes);
            }
            else if(hexaertek === "D" || hexaertek === "d")
            {
                helyiertekosszeg16 = 13*Math.pow(16,hossz-i-1);
                tizes+=helyiertekosszeg16;
                //console.log(helyiertekosszeg16);
                //console.log(tizes);
                //ujszam16(tizes);
            }
            else if(hexaertek === "E" || hexaertek === "e")
            {
                helyiertekosszeg16 = 14*Math.pow(16,hossz-i-1);
                tizes+=helyiertekosszeg16;
                //console.log(helyiertekosszeg16);
                //console.log(tizes);
                //ujszam16(tizes);
            }
            else if(hexaertek === "F" || hexaertek === "f")
            {
                helyiertekosszeg16 = 15*Math.pow(16,hossz-i-1);
                tizes+=helyiertekosszeg16;
                //console.log(helyiertekosszeg16);
                //console.log(tizes);
                //ujszam16(tizes);
            }
            else
            {
                //ujszam16("Hiba! Nem várt karakter");
                jelzo=true;
                break;
            }
            
        }
        szam2 = tizes;

        //Kettesbe
        let kettes = '';
        if(jelzo === false)
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
                //console.log(kettes);
            }
            //ujbinszam16(kettes);
        }
    }
    return ( 
        <div id='tizenhatosbol'>
            <h2>Kérek egy hexadecimális számot:</h2>
            <input id="tizenhatosszam" type='text' onChange={Modosit} placeholder="írjad bé"></input>
            <button onClick={Szamolas}>Átváltás</button>

            <div id="tablazat">
                <h3>{hexa16}</h3>
                <h4>Tizesbe átváltva: {szam16}</h4>
                <h4>Kettesbe átváltva: {bin16}</h4>
            </div>
        </div>
    );
}
 
export default Tizenhatosbol;