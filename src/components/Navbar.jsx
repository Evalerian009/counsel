import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/logo.png'

const Navbar = ({ menu, toggler }) => {
  return (
      <nav className="container mx-auto flex items-center justify-between px-4">
        <img src={Logo} alt='logo' className='w-[80px] h-[80px] object-cover' />
        <ul className='hidden lg:flex gap-x-10 text-sky-600 font-semibold'>
          <li className='hover:text-sky-800'><a href='home'>Home</a></li>
          <li className='hover:text-sky-800'><a href='home'>About Us</a></li>
          <li className='hover:text-sky-800'><a href='home'>Online Sessions</a></li>
          <li className='hover:text-sky-800'><a href='home'>Contact</a></li>
        </ul>
        <ul className={`text-sky-600 font-semibold absolute right-0 top-[80px] py-7 px-4 z-[6] h-[100vh] bg-sky-100 flex flex-col gap-5 ${menu ? 'opacity-100 w-[50%]' : 'opacity-0 w-0'} transition-all duration-500`}>
          <li className='hover:text-sky-800'><a href='home'>Home</a></li>
          <li className='hover:text-sky-800'><a href='home'>About Us</a></li>
          <li className='hover:text-sky-800'><a href='home'>Online Sessions</a></li>
          <li className='hover:text-sky-800'><a href='home'>Contact</a></li>
        </ul>
        <span className='lg:hidden cursor-pointer'>
          <FontAwesomeIcon icon={menu ? faX : faBars} className='w-[25px] h-[25px] text-sky-600 object-fill' onClick={() => toggler()} />
        </span>
      </nav>
  )
}

export default Navbar