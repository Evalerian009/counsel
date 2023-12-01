import HeroImg from '../assets/heroimg.jpg'

const Hero = () => {
  return (
    <div className="bg-sky-200 w-screen">
      <div className="container mx-auto relative px-4 md:px-7 lg:px-14 py-10">
        <div className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-sky-100 rounded-full lg:absolute z-[3]" />

        <div className="py-7 md:py-10 lg:py-14 flex flex-col lg:flex-row gap-14 items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-sky-900">Our Center</h1>
            <p className="mt-4 md:mt-7 text-[17px] leading-7">Vitae congue mauris rhoncus aenean vel elit scelerisque. Consequat nisl vel pretium lectus quam id leo in vitae. Dictum sit amet justo donec enim diam vulputate. Sociis natoque penatibus et magnis dis parturient. Molestie ac feugiat sed lectus vestibulum mattis.</p>
            <button className="w-fit bg-sky-500 hover:bg-sky-700 mt-7 text-lg uppercase text-sky-50 font-semibold py-1 px-4">Learn More</button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px] bg-orange-300 p-3 md:p-6 rounded-full absolute">
              <div className="bg-sky-100 w-full h-full rounded-full" />
            </div>
            <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[430px] lg:h-[430px] bg-sky-100 rounded-full p-2 overflow-hidden relative z-[1]">
              <img src={HeroImg} alt="hero-image" className='w-full h-full object-cover rounded-full' />
            </div>
            <div className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px] bg-sky-100 rounded-full absolute right-0 lg:right-[50px] bottom-0 lg:bottom-[-10px] z-[2]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero