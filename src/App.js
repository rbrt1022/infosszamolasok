import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import Fej from './JS/Fej';
import Atvalto from './JS/Tartalom/Atvalto';
import "./App.css";
import Kezdolap from './JS/Tartalom/Kezdolap';
import Alhalo from './JS/Tartalom/Alhalo';
import "./CSS/Alhalo.css"
import "./CSS/Atvalto.css"
import "./CSS/Egyeb.css"
import EMH from './JS/Alhalo/EMH';
import IPALH from './JS/Alhalo/IPinAlh';
import KMH from './JS/Alhalo/KMH';


function App() {
  return (
    
    <HashRouter basename="/">
      <div className="App">
        <Fej />
        <div id="teljes">
          <div id='tartalom' className='zartmenu'>
              <Routes>
                <Route path="/" element={<Kezdolap />}/>
                <Route path="/sza" element={<Atvalto />}/>
                <Route path="/alh" element={<Alhalo />}/>
                <Route path="/alh/em" element={<EMH />}/>
                <Route path="/alh/ipinalh" element={<IPALH />}/>
                <Route path="/alh/km" element={<KMH />}/>
              </Routes>
          </div>
        </div>
        
      </div>
    </HashRouter>
  );
}


export default App;
