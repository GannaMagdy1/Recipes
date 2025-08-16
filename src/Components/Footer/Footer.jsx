import React from 'react'
import logo from '../../logo-BfNap0Pe.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div className=' p-5'>

        <div className='flex justify-between items-center  p-1 mb-1'>
          <Link to={'/'} className='text-2xl font-bold flex items-center '><img src={logo} alt="Logo" className='w-16' />Recipe</Link>
          <h2 className='text-blue-500 text-2xl font-bold'>Route</h2>
        </div>
        <hr />
        <div className='text-center p-1 mt-1'>
          <p className='text-lg text-gray-600'>© 2025 Nagy Osama™. All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer












// import logo from '../../logo-BfNap0Pe.png';

// function Footer() {
//   return (
//     <footer>
//       <img src={logo} alt="Logo" />
//     </footer>
//   );
// }

// export default Footer;