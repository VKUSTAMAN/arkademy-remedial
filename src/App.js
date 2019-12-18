import React from 'react';

import './App.css';

function App() {
  return (
   <div className="wrapper gambar">
     <div className="flex-wrapper">
        <div className="flex-judul">
            <div className="judul">
              <h1 className="sekolah">Sekolah</h1>
              <h1 className="unggul">Unggul</h1>
            </div>  
        </div>
        <div className="flex-konten">
          <div className="konten">
            <p><b>Lorem ipsum</b> dolor sit, amet consectetur adipisicing elit amet pa. 
              <br></br>
              magni totam. Magni, perferendis nesciunt adipiscing elit tame  pa.
              <br></br>
              quibusdam, velit quis lorem ipsum dolor sit, amet consectetur,
              <br></br>
            
              Tenetur qui minus sequi suscipit, magni totam. Magni, perferen
              <br></br>
              optio tenetur iure sequi totam odit quibu
              <br></br>
            </p>
          </div>
        </div>
        <div className="flex-button">
          <div className="button">
            <p className="text">Baca Selengkapnya</p>
          </div>
        </div>
        
     </div>
     <div className="opacity">

     </div>
        <div className="right">
        <i class="fa fa-chevron-right"></i>
        </div>
        <div className="left">
        <i class="fa fa-chevron-left"></i>
        </div>

     </div>
  );
}

export default App;

