import React from 'react'
import AllPages from '../pages/AllPages'
import Footer from './Footer'

const MainPage = () => {
  return (
    <React.Fragment>
    <main>
      <div className='mx-2 mt-5 md:w-6/12 md:mx-auto'>
        <AllPages/>
        <Footer/>
      </div>
    </main>
  </React.Fragment>
  )
}

export default MainPage