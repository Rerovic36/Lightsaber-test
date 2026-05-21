import logo from './saber.png';
import React from 'react';
import './App.css';
import { useState } from 'react';
import sound from './saber-long2.mp3'
import sound_stop from './saber-stop.mp3'




function App() {
  const [color,setColor] = useState('nothing')
  const [coloractual,setColorActual] = useState('green')
  const [active,setActive] = useState(true)
  const [audio, setAudio] = useState( new Audio(sound) )
  const [audio_stop, setAudio_stop] = useState( new Audio(sound_stop) )
  const [stylenew, setStylenew] = useState({boxShadow:''})
  const [shadowColor, setShadowColor] = useState('green');

  const desactivar = () =>{
    setActive(false)
    setColor("light")
    audio.play()
    setStylenew({ boxShadow: `0 0 5px ${shadowColor},0 0 25px ${shadowColor}, 0 0 50px ${shadowColor},0 0 100px ${shadowColor}` })
  }
  const activar = () =>{
    setActive(true)
    setColor('light-off')
    audio.pause()
    audio.currentTime = 0
    audio_stop.play()
    setStylenew({ boxShadow: `0 0 5px ${shadowColor},0 0 25px ${shadowColor}, 0 0 50px ${shadowColor},0 0 100px ${shadowColor}` })
  }


 
  return (
    <div className="App">
        <div className='botones'>
        <button className='boton-verde' onClick={(e) =>{setShadowColor('green')}}>Saber green</button>
        <button className={'boton-azul'} onClick={(e) =>{setShadowColor('blue')}}>Saber blue</button>
        <button className={'boton-aqua'} onClick={(e) =>{setShadowColor('aquamarine')}}>Saber aqua</button>
        <button className={'boton-rojo'} onClick={(e) =>{setShadowColor('red')}}>Saber red</button>
        <button className={'boton-amarillo'} onClick={(e) =>{setShadowColor('yellow')}}>Saber yellow</button>
        <button className={'boton-purple'} onClick={(e) =>{setShadowColor('purple')}}>Saber Purple</button>
        {/* <button onClick={(e) =>{setShadowColor('red');setColorActual('red-bad')}}>Color red bad</button>
        <button onClick={(e) =>{setColor('black');setColorActual('black')}}>Color de negro</button> */}
        </div>
        <div className='lighsaber'>
        <div className='parts'>  

        <div className={color} style={stylenew}></div>
        <img src={logo} onClick={(e) =>{ if (active === true) {desactivar() } else if(active === false) {activar()}}} className='saber' alt='light-saber'></img>

        </div>
        </div>
    </div>
  );
}

export default App;
