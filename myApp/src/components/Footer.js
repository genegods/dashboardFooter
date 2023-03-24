import React from 'react'
import { FooterData } from '../data/FooterData'

const Footer = () => {
  return (
    
  <React.Fragment>
  <main>
    <div className='bg-black text-white py-5 px-2'>
      <div className='md:flex md:justify-center md:space-x-3'>
        {
            FooterData.map((item) => {
                return(
                    <div key={item.id}>
                        <div>
                        <a href={item.path}>{item.title}</a>
                        </div>
                    </div>
                )
            })
        }
      </div>
      <p className='text-center'>Gooddo Micro Projects © 2023</p>
    </div>
  </main>
</React.Fragment>
  )
}

export default Footer