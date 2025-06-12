import React from 'react'
import { BrowserRouter, Link} from 'react-router-dom';
import '../styles/Footer.css'
import discordLogo from '../assets/discord.png'
import facebookLogo from '../assets/facebook.png'
import messageLogo from '../assets/telegram.png'
import twitterLogo from '../assets/twitter.png'
import whatsappLogo from '../assets/whatsapp.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-left'>
            <a href='https://discord.com/invite/2uQBdFSrsu?utm_source=web_chivastv&utm_medium=icono&utm_campaign=discord' target='_blank' rel='noopener noreferrer'>
                <img src={discordLogo} alt="discord" className='logos'/> 
            </a>
            <a href='https://www.facebook.com/chivastvmx/' target='_blank' rel='noopener noreferrer'>
                <img src={facebookLogo} alt="facebook" className='logos' />
            </a>
            <a href='https://x.com/chivastvmx/' target='_blank' rel='noopener noreferrer'>
                <img src={twitterLogo} alt="twitter" className='logos' />
            </a>
            <a href='https://api.whatsapp.com/send/?phone=3326607241&text=Hola&type=phone_number&app_absent=0' target='_blank' rel='noopener noreferrer'>
                <img src={whatsappLogo} alt="whatsapp" className='logos' />
            </a>
            <a href='https://t.me/chivasdecorazon' target='_blank' rel='noopener noreferrer'>
                <img src={messageLogo} alt="telegram" className='logos' />
            </a>
        </div>
        <div className='footer-right'>
            <a className='linkStyle' href='https://www.chivasdecorazon.com.mx/es'>chivasdecorazon.com.mx</a>
        </div>
    </div>
  )
}

export default Footer
