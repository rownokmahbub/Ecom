import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import BackToTop from './BackToTop'
const Layout = ({children}) => {
  return (
    <div className=''>
    {/* <Nav/> */}
    <main> {children}</main>
{/* <BackToTop/> */}
    {/* <Footer/> */}

    </div>
  )
}

export default Layout