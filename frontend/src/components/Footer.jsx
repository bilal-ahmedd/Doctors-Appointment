import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* ------ Left Section ------ */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="Logo" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vel a eos commodi architecto cupiditate perferendis reiciendis deleniti consequuntur reprehenderit tenetur, nobis officia,ea necessitatibus nisi iure odit rem eveniet et est officia. Possimus, a iste? Alias, iusto consequuntur!</p>
        </div>
        {/* ------ Center Section ------ */}
        <div>
            <p className='text-xl font-medium mb-5'> Company </p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
        </div>
        {/* ------ Right Section ------ */}
        <div>
        <p className='text-xl font-medium mb-5'> Get in Touch </p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li> (021) 00001111</li>
              <li>info@prescripto.com</li>
            </ul>
        </div>
      </div>
      <div>
        {/* ---------- CopyRight text ----------- */}
        <hr />
        <p className='py-5 text-sm text-center'> Copyright 2025@ Prescripto - All Right Reserved </p>
      </div>
    </div>
  )
}

export default Footer
