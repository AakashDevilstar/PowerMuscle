import React from 'react'
import Loc from '../assets/images/Location.webp'
import Peo from '../assets/images/People.webp'
import Gif from '../assets/images/Gift.webp'
import Sat from '../assets/images/Saturn.webp'
import Weg from '../assets/images/Weight.webp'
import Ph from '../assets/images/Phone.webp'
import Dumb from '../assets/images/Dumbell.webp'
import Tmp from '../assets/images/Tomanypeople.webp'
import { Button } from '@mui/material'
import Footer from './Footer'
import Navbar from './Navbar'

function Membership() {
  return (
    <div>
        <Navbar/>
            <div>
            <h1 style={{marginLeft:'30rem',marginTop:'4rem',color:'blue',fontFamily:'monospace'}}>PowerMuscle gym membership</h1>
            <p style={{marginLeft:'20rem',marginTop:'1.4rem'}}>
            Working from home Monday, working from the office on Wednesday but then working from your nan's loft on a</p>
            <p style={{marginLeft:'20rem'}}>Friday? From ₹ 3000*, Live It is the perfect membership for you. Get access to multiple gyms all over the India. Why </p>
            <p style={{marginLeft:'20rem'}}>not bring along a gym buddy too? With the ability to bring different friends with you each calendar month.
            </p>
            <div>
                <div style={{display:'flex',marginLeft:'19rem',marginTop:'2rem'}}>
                    <div>
                        <img src={Loc} />
                    </div>
                    <div style={{marginLeft:'-2rem',marginTop:'.1rem'}}>
                        <p style={{color:'blue',fontFamily:'monospace',fontSize:'1rem'}}>multi-gym access</p>
                        <p style={{marginTop:'.6rem'}}>choose up to 5 gyms at a time & change</p>
                        <p>them whenever you want</p>
                    </div>
                </div>
                <div style={{display:'flex',marginLeft:'46rem',marginTop:'-88px'}}>
                    <div>
                        <img src={Peo} />
                    </div>
                    <div style={{marginLeft:'-2rem'}}>
                        <p style={{color:'blue',fontFamily:'monospace',fontSize:'1rem'}}>bring a friend 4 times a month</p>
                        <p style={{marginTop:'.6rem'}}>the same friend can be brought 2 times</p>
                        <p> a month max</p>
                    </div>
                </div>
                <div style={{display:'flex',marginLeft:'19rem',marginTop:'2rem'}}>
                    <div>
                        <img src={Gif} />
                    </div>
                    <div style={{marginLeft:'-2rem',marginTop:'.1rem'}}>
                        <p style={{color:'blue',fontFamily:'monospace',fontSize:'1rem'}}>bigger discounts & offers</p>
                        <p style={{marginTop:'.6rem'}}>unlimited access to our state-of-the-art</p>
                        <p>favourite supplements, nutrition an</p>
                        <p>clothing brands</p>
                    </div>
                </div>
                <div style={{display:'flex',marginLeft:'46rem',marginTop:'-88px'}}>
                    <div>
                        <img src={Sat} />
                    </div>
                    <div style={{marginLeft:'-2rem'}}>
                        <p style={{color:'blue',fontFamily:'monospace',fontSize:'1rem'}}>fitness & body composition tracking</p>
                        <p style={{marginTop:'.6rem'}}>the same friend can be brought 2 times</p>
                        <p> a month max</p>
                    </div>
                </div>
                <div style={{display:'flex',marginLeft:'19rem',marginTop:'2rem'}}>
                    <div>
                        <img src={Weg} />
                    </div>
                    <div style={{marginLeft:'-2rem',marginTop:'.1rem'}}>
                        <p style={{color:'blue',fontFamily:'monospace',fontSize:'1rem'}}>unlimited training & free classes</p>
                        <p style={{marginTop:'.6rem'}}>access anytime to train with our huge</p>
                        <p>range of equipment. Get coaching,</p>
                        <p>support and added motivation with our</p>
                        <p>great range of classes for all abilities</p>
                    </div>
                </div>
                <div style={{display:'flex',marginLeft:'46rem',marginTop:'-88px'}}>
                    <div>
                        <img src={Ph} />
                    </div>
                    <div style={{marginLeft:'-2rem'}}>
                        <p style={{color:'blue',fontFamily:'monospace',fontSize:'1rem'}}>free fitness app</p>
                        <p style={{marginTop:'.6rem'}}>manage your membership, track your</p>
                        <p> fitness & join challenges</p>
                    </div>
                </div>
            </div>
            <div style={{marginLeft:'39rem',marginTop:'4rem',color:'black'}}>
                <Button style={{background:'green',color:'black'}}>join live it today</Button>
            </div>
        </div>
        <div>
        <h1 style={{marginLeft:'35rem',marginTop:'4rem',color:'blue',fontFamily:'monospace'}}>student gym membership</h1>
        <p style={{marginLeft:'20rem',marginTop:'1.4rem'}}>
        We are now offering a great 9-month gym membership, exclusive for students from £149*. Our student membership</p>
        <p style={{marginLeft:'20rem'}}>has everything you need to stay fit while studying.</p>
        <div>
            <div style={{display:'flex',marginLeft:'19rem',marginTop:'2rem'}}>
                <div>
                    <img src={Loc} />
                </div>
                <div style={{marginLeft:'-2.5rem',marginTop:'.1rem'}}>
                    <p style={{color:'blue',fontFamily:'monospace',fontSize:'1rem'}}>access two gyms</p>
                    <p style={{marginTop:'.6rem'}}>get 24/7 access to two gyms of your</p>
                    <p>choice*</p>
                </div>
            </div>
            <div style={{display:'flex',marginLeft:'46rem',marginTop:'-88px'}}>
                <div>
                    <img src={Ph} />
                </div>
                <div style={{marginLeft:'-2.5rem'}}>
                    <p style={{color:'blue',fontFamily:'monospace',fontSize:'1rem'}}>free fitness app</p>
                    <p style={{marginTop:'.6rem'}}>manage your membership, track your</p>
                    <p>fitness & join challenges</p>
                </div>
            </div>
            <div style={{display:'flex',marginLeft:'19rem',marginTop:'2rem'}}>
                    <div>
                        <img src={Weg} />
                    </div>
                    <div style={{marginLeft:'-2.5rem',marginTop:'.1rem'}}>
                        <p style={{color:'blue',fontFamily:'monospace',fontSize:'1rem'}}>unlimited training & free classes</p>
                        <p style={{marginTop:'.6rem'}}>access anytime to train with our huge</p>
                        <p>range of equipment. Get coaching,</p>
                        <p>support and added motivation with our</p>
                        <p>great range of classes for all abilities</p>
                    </div>
            </div>
            <div style={{display:'flex',marginLeft:'46rem',marginTop:'-88px'}}>
                <div>
                    <img src={Sat} />
                </div>
                <div style={{marginLeft:'-2.5rem'}}>
                    <p style={{color:'blue',fontFamily:'monospace',fontSize:'1rem'}}>fitness & body composition tracking</p>
                    <p style={{marginTop:'.6rem'}}>the same friend can be brought 2 times</p>
                    <p> a month max</p>
                </div>
            </div>
        </div>
        <div style={{marginLeft:'39rem',marginTop:'4rem',color:'black'}}>
                <Button style={{background:'green',color:'black'}}>join live it today</Button>
        </div>
    </div>
    <div>
        <h1 style={{marginLeft:'35rem',marginTop:'4rem',color:'blue',fontFamily:'monospace'}}>do it gym membership</h1>
        <p style={{marginLeft:'20rem',marginTop:'1.4rem'}}>
        Access one gym whenever you want, with almost all our gyms open 24/7, plus free unlimited classes from ₹5000*.</p>
        <div>
            <div style={{display:'flex',marginLeft:'19rem',marginTop:'2rem'}}>
                <div>
                    <img src={Tmp} />
                </div>
                <div style={{marginLeft:'-2.5rem',marginTop:'.1rem'}}>
                    <p style={{color:'blue',fontFamily:'monospace',fontSize:'1rem'}}>free classes</p>
                    <p style={{marginTop:'.6rem'}}>get coaching, support and added</p>
                    <p>motivation with our great range of</p>
                    <p>classes for all abilities</p>
                </div>
            </div>
            <div style={{display:'flex',marginLeft:'46rem',marginTop:'-88px'}}>
                <div>
                    <img src={Dumb} />
                </div>
                <div style={{marginLeft:'-2.5rem'}}>
                    <p style={{color:'blue',fontFamily:'monospace',fontSize:'1rem'}}>unlimited training</p>
                    <p style={{marginTop:'.6rem'}}>access anytime to train with our huge</p>
                    <p>range of equipment</p>
                </div>
            </div>
        </div>
        <div style={{marginLeft:'39rem',marginTop:'4rem',color:'black'}}>
            <Button style={{background:'green',color:'black'}}>join live it today</Button>
        </div>
        <p style={{marginLeft:'37rem',marginTop:'4rem',fontFamily:'monospace',color:''}}>
            
*Prices will vary depending on gym
        </p>
    </div>
    <Footer/>
    </div>
  )
}

export default Membership