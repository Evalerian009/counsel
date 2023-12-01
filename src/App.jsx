import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import OnlineTherapy from './components/OnlineTherapy'
import FamilyTherapy from './components/FamilyTherapy'
import Psychotherapy from './components/Psychotherapy'
import Contact from './components/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function App() {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => (
    (setMenu(prev => !prev))
  )

  return (
    <main className={`w-screen h-screen overflow-x-hidden ${menu ? 'overflow-y-hidden' : ''} relative`}>
      <Navbar menu={menu} toggler={handleMenu} />
        <Hero />
        <About />
        <OnlineTherapy />
        <FamilyTherapy />
        <Psychotherapy />
        <Contact />
      <div className='w-fit fixed bg-white rounded-full bottom-7 right-7 z-[5]'>
        <FontAwesomeIcon icon={faArrowCircleUp} fontSize={50} className='text-sky-400' />
      </div>
      <div className='py-7 text-center text-sm font-semibold'>
        All Rights Reserved 2023 - Images from Pixabay.com
      </div>
    </main>
  )
}

export default App
