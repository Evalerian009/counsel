import Couple1 from '../assets/couple1.jpg'
import Couple2 from '../assets/couple2.jpg'

const FamilyTherapy = () => {
  return (
    <div className="container mx-auto px-4 md:px-7 lg:px-14 py-10 flex flex-col lg:flex-row items-center gap-14">
      <div className='w-full lg:w-1/2 relative'>
        <div className='w-[100px] h-[100px] md:w-[125px] md:h-[125px] lg:w-[150px] lg:h-[150px] border-[10px] md:border-[25px] border-orange-300 rounded-full absolute right-0 z-[1]' />
        <div className='w-[250px] h-[250px] md:w-[375px] md:h-[375px] lg:w-[400px] lg:h-[400px] rounded-full bg-sky-300 p-2 md:p-3 relative z-[2]'>
          <img src={Couple1} alt="couple" className='w-full h-full rounded-full object-cover' />
        </div>
        <div  className='w-[150px] h-[150px] md:w-[175px] md:h-[175px] lg:w-[200px] lg:h-[200px] border-[10px] border-orange-300 rounded-full absolute right-0 bottom-[50px] lg:bottom-0 z-[3]'>
          <img src={Couple2} alt='couple holding hands' className='w-full h-full rounded-full object-cover' />
        </div>
        <div className='w-[100px] h-[100px] md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px] bg-sky-200 rounded-full' />
      </div>
      <div className='w-full lg:w-1/2'>
        <h4 className='text-lg'>PSYCHOTHERAPY CENTER</h4>
        <h5 className='mt-7 text-5xl font-bold text-sky-600'>Family therapy</h5>
        <p className='mt-7 leading-7 text-lg'>Lacus vestibulum sed arcu non odio. Magna etiam tempor orci eu lobortis elementum nibh tellus. Id diam vel quam elementum pulvinar. Massa id neque aliquam vestibulum morbi blandit. Duis at tellus at urna. </p>
        <button className='mt-7 uppercase bg-sky-700 hover:bg-sky-900 py-2 px-4 text-white font-semibold'>Learn More</button>
      </div>
    </div>
  )
}

export default FamilyTherapy