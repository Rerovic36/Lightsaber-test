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
  const [shadowColor, setShadowColor] = useState('green')
  // const audio = new AudioAudio(sound)  

  const si = () =>{
    setActive(false)
    setColor(coloractual)

    audio.play()
    setStylenew({ boxShadow: `0 0 5px ${shadowColor},0 0 25px ${shadowColor}, 0 0 50px ${shadowColor},0 0 100px ${shadowColor}` })
  }
  const no = () =>{
    setActive(true)
    setColor('green-off')
    audio.pause()
    audio.currentTime = 0
    audio_stop.play()
    setStylenew({ boxShadow: `0 0 5px ${shadowColor},0 0 25px ${shadowColor}, 0 0 50px ${shadowColor},0 0 100px ${shadowColor}` })
  }


 
  return (
    <div className="App">
        <div className='botones'>
        <button className='boton-verde' onClick={(e) =>{setShadowColor('green');setColorActual('green')}}>Saber green</button>
        <button className={'boton-azul'} onClick={(e) =>{setShadowColor('blue');setColorActual('green')}}>Saber blue</button>
        <button className={'boton-aqua'} onClick={(e) =>{setShadowColor('aquamarine');setColorActual('green')}}>Saber aqua</button>
        <button className={'boton-rojo'} onClick={(e) =>{setShadowColor('red');setColorActual('red')}}>Saber red</button>
        {/* <button onClick={(e) =>{setShadowColor('red');setColorActual('red-bad')}}>Color red bad</button>
        <button onClick={(e) =>{setColor('black');setColorActual('black')}}>Color de negro</button> */}
        </div>
        {/* <button onClick={(e)=>{}}> hola</button> */}
        <div className='lighsaber'>
        <div className='parts'>  
        {/* <div className='space'></div> */}

        <div className={color} style={stylenew}></div>


        <img src={logo} onClick={(e) =>{ if (active === true) {si() } else if(active === false) {no()}}} className='saber'></img>

        </div>
        </div>
    </div>
  );
}

export default App;
