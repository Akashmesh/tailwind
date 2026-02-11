import React from 'react'
import logo from "./assets/logo.jpg";

const App = () => {
  return (
    <div>
      {/* navbar */}
      <div className='flex justify-between p-10'>
        <div className='flex'>
          <img className='h-15 w-15' src={logo} alt="" />
          <div>
            <p>Paws and Play</p>
            <p>Premium Pet Care</p>
          </div>
        </div>
        <div>
          <ul className='flex gap-10'>
            <li>Services</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default App