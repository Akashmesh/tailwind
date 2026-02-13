import React from 'react'
import logo from "./assets/logo.jpg";
import doglogo from"./assets/dog.jpg";

const App = () => {
  return (
    <div className='mx-20'>
      {/* navbar */}
      <div className='flex justify-between py-5'>
        <div className='flex gap-2'>
          <img className='h-15 w-15' src={logo} alt="" />
          <div>
            <p className='text-xl font-bold'>Paws and Play</p>
            <p className='text-sm text-gray-500'>Premium Pet Care</p>
          </div>
        </div>
        <div>
          <ul className='flex gap-10'>
            <li className='text-gray-600 mt-5 font-semibold'>Services</li>
            <li className='text-gray-600 mt-5 font-semibold'>About</li>
            <li className='text-gray-600 mt-5 font-semibold'>Gallery</li>
            <li className='text-gray-600 mt-5 font-semibold'>Team</li>
            <li className='text-gray-600 mt-5 font-semibold'>Contact</li>
          </ul>
        </div>
        <div>
          <button className='mt-5 text-white border bg-yellow-500 font-semibold px-5 py-2 rounded-full hover:bg-yellow-600  active:scale-95'>Book Now</button>
        </div>
      </div>
      {/* navbar ends here
      hero section starts */}
      <div className='flex w-full mt-5'>  
        {/* left side */}
        <div className='flex-1 flex-col'>
          <div className='flex flex-col'>
            <p className='text-5xl font-bold leading-15 tracking-wide text-gray-900'>Where Every Pet <br /> Gets The Royal <br /> Treatment</p>
            <p className='tracking-wide leading-6 mt-7 text-gray-700'>Professional grooming, loving daycare, and comfortable <br /> boarding for your furry family members. Because they deserve <br />
             the best.</p>
          </div>
          <div className='mt-7 flex gap-4'>
            <button className='text-white bg-yellow-500 font-semibold px-5 py-2 rounded-full hover:bg-yellow-600 active:scale-95'>Book an Appointment</button>
            <button className='text-yellow-500 bg-white border border-yellow-500 font-semibold px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition duration-300 active:scale-95'>View Services</button>
          </div>
          <div className='flex justify-baseline gap-8 mt-10'>
            <p className='flex flex-col text-gray-500 text-md'><span className='text-yellow-500 font-bold text-4xl'>10K+</span>Happy Pets</p>
            <p className='flex flex-col text-gray-500 text-md'><span className='text-yellow-500 font-bold text-4xl'>8+</span>Years Experience</p>
            <p className='flex flex-col text-gray-500 text-md'><span className='text-yellow-500 font-bold text-4xl'>4.9</span>Average Rating</p>
            <p className='flex flex-col text-gray-500 text-md'><span className='text-yellow-500 font-bold text-4xl'>50+</span>Services</p>
          </div>
        </div>
        {/* right side */}
        <div className='flex-1'><img className='rounded-xl' src={doglogo} alt="" />

        </div>
      </div>
      {/* services section */}
      <div className='mt-30'>
        <h2 className='text-center font-bold text-5xl'>Our Services</h2>
        <p className='text-center mt-2 text-gray-600 text-xl'>Everything your pet needs for a happy, healthy life</p>
      </div>

    </div>
  )
}

export default App