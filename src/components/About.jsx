import AboutImg from '../assets/about-img.jpg'

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-7 lg:px-12 py-7 md:py-10 lg:py-14">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-14 text-[17px]">
        <div className="lg:w-1/2">
          <h2 className="uppercase text-lg">About Us</h2>
          <h3 className="font-semibold text-4xl md:text-5xl mt-3 leading-[45px] md:leading-[55px]">Understanding group therapy</h3>
        </div>
        <div className="lg:w-1/2">
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className="mt-5 border border-black py-1 px-3 uppercase font-semibold hover:bg-black hover:text-white">Learn More</button>
        </div>
      </div>
      <div className='mt-10 md:mt-14 py-3 md:py-7 lg:py-10 pr-5 md:pr-10 lg:pr-14  bg-gradient-to-l from-sky-200 from-80% to-white to-0% w-full lg:h-[550px]'>
        <img src={AboutImg} alt="group therapy" className='w-full h-full object-cover' />
      </div>
      <div className='mt-10'>
        <p className='text-[17px] lg:max-w-[60%]'>Lacus vestibulum sed arcu non odio. Magna etiam tempor orci eu lobortis elementum nibh tellus. Id diam vel quam elementum pulvinar. Massa id neque aliquam vestibulum morbi blandit. Duis at tellus at urna. Enim nec dui nunc mattis enim ut tellus. Pellentesque adipiscing commodo elit at imperdiet. A diam maecenas sed enim ut sem.</p>
        <h4 className='mt-7 md:mt-10 lg:max-w-[70%] ml-auto text-right text-3xl md:text-4xl md:leading-[45px]'>Licensed Professional Counselors Available Anytime</h4>
      </div>
    </div>
  )
}

export default About

//