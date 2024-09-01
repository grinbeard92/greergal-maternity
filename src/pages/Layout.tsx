import '@/main.css'
import Header from '@/components/Header.tsx'
import { Outlet } from 'react-router'
import Footer from '@/components/Footer.tsx'
import Nav from '@/components/Nav.tsx'

function Layout() {

  return (
    <>

      <div className={`layout`}>
        <Header />
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default Layout