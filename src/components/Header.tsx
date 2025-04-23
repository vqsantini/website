import { Link } from 'react-router-dom'
import './Header.css'
import { FiMenu } from 'react-icons/fi'

export function Header(){
  return(
    <header className='main-header'>
      <div className="menu">
        <FiMenu id='menu'/>
      </div>
      <div className='home'>
      <Link to='/'><img src="./Logotipo.svg" alt="logotipo" /></Link>
      </div>
      <nav className='main-header-nav-group1'>
        <li className='main-header-li-group1'>
          <Link to='/' id='header-1'>Home</Link>
          <Link to='/' id='header-2'>Features</Link>
          <Link to='/' id='header-3'>Community</Link>
          <Link to='/' id='header-4'>Blog</Link>
          <Link to='/' id='header-5'>Pricing</Link>
          
          <Link to='/'><button>Register Now</button></Link>
        </li>
        
      </nav>
      
    </header>
  )
}