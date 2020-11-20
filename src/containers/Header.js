import React from 'react'
import {
  CHeader,
  // CHeaderNav,
  // CHeaderNavItem,
  // CHeaderNavLink,
  // CSubheader,
  CBreadcrumbRouter,
  // CLink
} from '@coreui/react'

// import { FaSyncAlt, FaTachometerAlt, FaUsersCog } from 'react-icons/fa';

// routes config
import routes from '../routes'

// import { 
//   HeaderDropdown,
//   HeaderDropdownMssg,
//   HeaderDropdownNotif,
//   HeaderDropdownTasks
// }  from './index'

const Header = () => {

  return (
    <CHeader withSubheader>
      {/* <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-6" >
          <CHeaderNavLink to="/views/dashboard"><FaTachometerAlt/>&nbsp;Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-6">
          <CHeaderNavLink to="/views/account-setting"><FaUsersCog/>&nbsp;Account Settings</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav> */}

      {/* <CHeaderNav className="px-4">
        <HeaderDropdownNotif/>
        <HeaderDropdownTasks/>
        <HeaderDropdownMssg/>
        <HeaderDropdown/>
      </CHeaderNav> */}

      {/* <CSubheader className="px-3 justify-content-between"> */}
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
        />
          {/* <div className="d-md-down-none mfe-2 c-subheader-nav">
            <CLink 
              className="c-subheader-nav-link" 
              aria-current="page" 
              routes={routes} 
            >
              <FaSyncAlt/>&nbsp;Reload
            </CLink>
          </div> */}
      {/* </CSubheader> */}
    </CHeader>
  )
}

export default Header