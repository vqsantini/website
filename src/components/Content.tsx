import { Link } from 'react-router-dom'
import './Content.css'
import { Community } from './Community.tsx'
import { Legs } from './Legs.tsx'
import { Footer } from './Footer.tsx'

export function Content(){
  return(
    <div className="main-container">
      <main className='main-content'>
        <div className="presentation">
          <p className="title">Lessons and insights <br /> <span>from 8 years</span></p>
          <p className="description">Where to grow your business as a photographer: site or social media?</p>
          <Link to='/'><button>Register</button></Link>
        </div>
      </main>
      <aside className='main-aside'><img src="./DesignContainer.svg" id='design'/></aside>
      <footer className='main-footer'>
        <p className="clients">Our Clients</p>
        <p className="clients-description">We have been working with some Fortune 500+ clients</p>
        <img src="./Patrociners.svg"/>
      </footer>
      <Community/>
      <Legs/>
      <Footer/>
    </div>
    
  )
}