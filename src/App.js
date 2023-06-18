import React from 'react';
import { useState } from 'react';
import './styles.css';


function App() {
  const [Number, setNumber] = useState(0)
  const [Conselho, setConselho] = useState("Clique aqui para ver o seu conselho")
  const url = `https://api.adviceslip.com/advice`

  function gerarConselho() {
      fetch(url)
          .then(response => {
              return response.json()
          })
          .then(adviceData => {
              const Adviceobj = adviceData.slip
              setNumber(Adviceobj.id)
              traduzir(Adviceobj.advice)
          })
          .catch(error => {
              console.log(error)
          })

      function traduzir(texto){
        fetch(
          `https://api.mymemory.translated.net/get?q=${texto}!&langpair=en|pt`
        ).then((resp) => resp.json()).then((data) => {
          if(data.responseStatus === 429){
            setConselho(texto)
            console.log("não foi possivel traduzir devido ao limite de requisições diario")
          }else{
            setConselho( data.responseData.translatedText )
          }
        }).catch(
          setConselho(texto)
        )
      }
  }

  function copyTextToClipboard() {
    navigator.clipboard.writeText(Conselho)
      .then(() => {
        console.log('Texto copiado: ' + Conselho);
      })
      .catch((error) => {
        console.error('Erro ao copiar o texto:', error);
      });
  }
  
  function falar(){
    let utterance = new
    SpeechSynthesisUtterance(Conselho)
    speechSynthesis.speak(utterance)
  }

  return (
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">Conselho - {Number}</h5>
      <p class="card-text">
        {Conselho}
      </p>
      <div class="button-position">
          <button id="sort" onClick={() => gerarConselho()}>
            <i class="fa-solid fa-dice"></i>
          </button>
      </div>
      <div className='botoes'>
        <div class="microfone" onClick={()=> falar()}>
          <i class="fa-solid fa-microphone"></i>
        </div>
        <div class="copy">
        <i class="fa-solid fa-copy" onClick={() => copyTextToClipboard()}></i>
        </div>
      </div>
      </div>
    </div>
  );
  
}

export default App;
