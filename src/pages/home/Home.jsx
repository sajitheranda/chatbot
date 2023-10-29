import React from 'react';
import './home.css'
import Backgroundslider from '../../components/backgroundslider/Backgroundslider';
//import { useNavigate } from 'react-router-dom';
import {useTypewriter,Cursor, Typewriter} from 'react-simple-typewriter'

export default function Home() {

  const {text}=useTypewriter({
    words :['apple','mango','bannana'],
    loop:{},
    typeSpeed:120,
    deleteSpeed:80,
  })

  
  return (
    <div className='screner1' id="home">
      <Backgroundslider/>
      {/* <span style={{color:'white'}}>I am a{' '}</span>
      <span style={{color:'white'}}>{text}</span> */}
      {/* <Typewriter words={['Hello, World!', 'Welcome to React Typewriter','apple']} loop={true} cursor={true} cursorStyle="|"/>
      <Cursor/> */}

  
      
    </div>
  )
}

