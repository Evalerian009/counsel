import Couple2 from '../assets/couple2.jpg'
import Couple4 from '../assets/couple4.jpg'

const Psychotherapy = () => {
  return (
    <div className="container mx-auto px-4 md:px-7 lg:px-14 py-10 bg-gradient-to-r from-white from-20% lg:from-30% via-sky-200 via-20% lg:via-30% to-sky-200">
      <div className='flex flex-col lg:flex-row items-center gap-y-7 gap-x-14'>
        <div className="lg:w-1/3">
          <h4 className='text-xl'>Family Therapy</h4>
          <p className='leading-7 mt-3'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
          <button className='mt-6 border border-black py-1 px-3 rounded-2xl uppercase hover:bg-black hover:text-white'>Contact Us</button>
        </div>
        <div className="lg:w-2/3 text-right">
          <h4 className='uppercase'>COUNSELING & PSYCHOLOGICAL</h4>
          <h5 className='text-4xl md:text-5xl font-semibold mt-3'>What is psychotherapy?</h5>
          <div className='flex gap-7 mt-5'>
            <div className='h-[120px] md:h-[200px] lg:h-[300px]'>
              <img src={Couple4} alt='psychotherapy' className='w-full h-full object-cover' />
            </div>
            <div className='h-[120px] md:h-[200px] lg:h-[300px]'>
              <img src={Couple2} alt='psychotherapy' className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Psychotherapy