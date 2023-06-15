import React from 'react';
import Tizesbol from '../Atvalto/Tizesbol';
import Kettesbol from '../Atvalto/Kettesbol';
import Tizenhatosbol from '../Atvalto/Tizenhatosbol';
//import "../App.css"

const Atvalto = () => {
    return ( 
        <div id='Atvaltos'>
            <Tizesbol />
      
            <Kettesbol />
      
            <Tizenhatosbol />
            <div className="utolso"></div>
        </div>
    );
}
 
export default Atvalto;