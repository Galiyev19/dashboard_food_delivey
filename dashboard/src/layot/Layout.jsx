import React from 'react'
import SideBar from '../components/SideBar/SideBar'

import Router from '../routes/Router'

const Layout = () =>  {
  const [isOpen, setIsOpen] = React.useState(true);

  const toogle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='layout_container'>
      <SideBar/>
      <div className='main_layout'
         style={{ paddingLeft: isOpen ? "250px" : "80px" }}>
        <div className='content'>
          <Router/>
        </div>
      </div>
    </div>
  )
}

export default Layout