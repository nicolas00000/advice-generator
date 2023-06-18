import React from 'react';
import { useState } from 'react';
import './styles.css';


function App() {
  const [Number, setNumber] = useState(0)
  const [Conselho, setConselho] = useState("")
  return (
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">Conselho - {Number}</h5>
      <p class="card-text">
        loremdojsaodjsaojdojsoajdojsaodjosjodsdasdsadsad jadosjojsaodjo jasojdo ajodj oajs0odj 0ojaj
        With supporting text below as  a natural lead-in to additional content.</p>
      <div class="button-position">
          <button id="sort">Button</button>
      </div>
      <div className='botoes'>
        <div class="microfone">mic</div>
        <div class="copy">cop</div>
      </div>
      </div>
    </div>
  );
}

export default App;
