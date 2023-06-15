import { useState } from "react";

const Tizesbol = () => {
    let [szam, setSzam] = useState(0);
    let [bin, setBin] = useState("0");
    let [elozoszam, setElozoszam] = useState(0);

    function Szamolas() {
        console.log(elozoszam);
        if (szam !== elozoszam) {
            let elem = document.getElementById("tizesszam");
            setSzam(elem.value);
            setElozoszam(elem.value);
            let kettes = "";
            while (szam !== 0) {
                if (szam % 2 === 0) {
                    kettes = "0" + kettes;
                    szam = szam / 2;
                } else if (szam % 2 === 1) {
                    kettes = "1" + kettes;
                    szam--;
                    szam = szam/2;
                }
                if (szam === 1) {
                    kettes = "1" + kettes;
                    szam--;
                }
            }
            setBin(kettes);
        }
        
    }
    
    
    
    return ( 
        <div id='tizesbolkettesbe'>
            <h2>Kérek egy decimális számot:</h2>
            
            <input id="tizesszam" type='number' placeholder="írjad bé"></input>
            <button onClick={Szamolas}>Átváltás</button>
            
            <div id="tablazat">
                <h3 id="deci">{szam}</h3>
                <h4>Kettesbe átváltva:</h4>
                <h4>{bin}</h4>

            </div>
        </div>
     );
}
 
export default Tizesbol;