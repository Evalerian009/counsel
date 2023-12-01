import Doc from '../assets/doc.jpg'

const Contact = () => {
  return (
    <div className="container mx-auto px-4 md:px-7 lg:px-14 py-5 flex flex-col lg:flex-row gap-10 items-center">
      <div className='lg:w-1/2 h-[350px]'>
        <img src={Doc} alt='' className='w-full h-full object-cover' />
      </div>
      <div className='lg:w-1/2'>
        <h5 className='text-4xl text-sky-900 font-bold '>Therapy for how we live today.</h5>
        <form className='py-7'>
          <div className='flex flex-wrap md:flex-nowrap gap-x-10'>
            <input type='text' placeholder='Enter your name' className='w-full md:w-1/2 focus:outline-0 appearance-none border-0 border-b-2' />
            <input type='text' placeholder='Enter a valid email address' className='w-full md:w-1/2 focus:outline-0 appearance-none border-0 border-b-2' />
          </div>
          <input type='text' placeholder='Enter your address' className='w-full focus:outline-0 appearance-none border-0 border-b-2' />
          <textarea type='text' placeholder='Enter your message' className='w-full focus:outline-0 appearance-none border-0 border-b-2 resize-none' />
          <button className='mt-5 bg-sky-600 hover:bg-sky-800 text-white font-semibold py-2 px-4'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact