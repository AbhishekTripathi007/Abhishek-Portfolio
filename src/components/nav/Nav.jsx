import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageRounded} from 'react-icons/bi'
import {useState} from 'react'



export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href="#home" onClick= {()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={ activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      
      <a href="#services" onClick = { () => setActiveNav('#services')} className={activeNav ==='#services' ? 'active': ''}><RiServiceLine /></a>
      
      <a href="#contact" onClick= {() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active': ''}><BiMessageRounded /></a>
    </nav>
  )
}

export default Nav