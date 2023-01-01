import React from 'react'
import './Contact_us.css'
import Photo from '../assets/images/img-01.webp'
import Footer from './Footer'
import Navbar from './Navbar'
// import { Badge,MailIcon } from '@mui/material'
// import { purple } from '@mui/material/colors'

function Contact_us() {
  return (
    <div>
        <Navbar/>
        <div class="container">
                <form action="#">
                    <img src={Photo} style={{marginTop:'9rem',marginLeft:'6rem',marginBottom:'2rem',height:'20rem',width:'20rem'}} />
                    <div style={{marginLeft:'8rem',marginTop:'-28rem'}}>
                        <div class="form-row">
                            <h1 style={{marginLeft:'14em',marginTop:'4rem',marginBottom:'2rem',color:'#7b68ee',fontFamily:'initial'}}>Get in touch</h1>
                            <div class="input-data">
                                <input type="text" required style={{marginLeft:'25rem',width:'19.4rem',height:'2rem',borderRadius:'0.5rem',padding:'1rem'}} placeholder='Name'/>
                                <div class="underline"></div>
                            </div>
                        </div>
                        <div class="form-row">
                        <div class="input-data">
                            <input type="text" required style={{marginLeft:'25rem',marginTop:'1rem',width:'19.4rem',height:'2rem',borderRadius:'0.5rem',border:'1px solid black',padding:'1rem'}} placeholder='Email'/>
                            <div class="underline"></div>
                        </div>
                        <div class="input-data">
                            <div class="underline"></div>
                        </div>
                        </div>
                        <div class="form-row">
                        <div class="input-data textarea">
                            <textarea rows="8" cols="36" required style={{marginLeft:'25rem',marginTop:'1rem',borderRadius:'0.5rem',border:'1px solid black',padding:'1rem'}} placeholder='Message' ></textarea>
                            <div class="underline"></div>
                        </div>
                        </div>
                        <div class="form-row submit-btn">
                        <div class="input-data">
                            <div class="inner"></div>
                            <input type="submit" value="Send" style={{marginLeft:'25rem',marginTop:'1rem',marginBottom:'6rem',width:'19.4rem',height:'2rem',backgroundColor:'#7b68ee',color:'white',fontSize:'1rem',borderRadius:'2rem',border:'white',cursor:'pointer'}} />
                        </div>
                    </div>
                    </div>
                </form>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact_us