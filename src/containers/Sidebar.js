import React from 'react'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg
} from '@coreui/react'

// sidebar nav config
import navigation from './_nav'

import source_icon from '../img/iconweb.png'

const TheSidebar = () => {

  return (
    <CSidebar>
      <CSidebarBrand className="d-md-down-none" to="/views/dashboard">
        <CImg
          src={source_icon}
          className="c-avatar-img"
        />
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default TheSidebar
