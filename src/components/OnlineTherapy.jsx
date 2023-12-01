import Img1 from '../assets/image1.jpg'
import SadLady from '../assets/sad-lady.jpg'
import Support from '../assets/support.jpg'

const OnlineTherapy = () => {
  return (
    <div className="bg-sky-200 w-screen">
      <div className="container mx-auto relative px-4 md:px-7 lg:px-14 pt-14 pb-16">
        <div className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] absolute">
          <img src={Img1} alt="lady" className="w-full h-full rounded-full object-cover bg-sky-100" />
        </div>

        <div className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[100px] lg:h-[100px] bg-white rounded-full p-1 md:p-3 absolute top-[150px] md:top-[175px] lg:top-[200px]">
          <div className='w-full h-full rounded-full bg-sky-200' />
        </div>

        <div className='relative'>
          <div className='w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full bg-white p-2 mx-auto relative z-[2]'>
            <img src={SadLady} alt='sad lady' className='w-full h-full rounded-full object-cover' />
          </div>
          <div className="w-[125px] h-[125px] md:w-[175px] md:h-[175px] lg:w-[200px] lg:h-[200px] p-2 md:p-3 bg-white rounded-full absolute -bottom-[30px] left-0 lg:left-[150px] z-[2]">
            <img src={Support} alt="lady" className="w-full h-full rounded-full object-cover bg-sky-100" />
          </div>
          <div className="w-[125px] h-[125px] md:w-[175px] md:h-[175px] rounded-full lg:p-7 absolute bottom-0 right-0 lg:right-[150px] z-[3] border-orange-300 border-[10px] md:border-[15px] lg:border-[20px]" />
        </div>

        <div className='mt-14 text-center text-sky-800'>
          <h4 className='lg:text-4xl font-bold'>Online Therapy Programs</h4>
          <p className='text-lg mt-7'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
          <button className='bg-sky-700 hover:bg-sky-800 mt-6 font-semibold text-white py-2 px-4 uppercase'>Read more</button>
        </div>

      </div>
    </div>
  )
}

export default OnlineTherapy