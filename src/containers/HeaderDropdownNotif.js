import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle
} from '@coreui/react'
import { FaBell, FaUserPlus, FaCartPlus, FaDollarSign } from 'react-icons/fa';

const HeaderDropdownNotif = () => {
  const itemsCount = 5
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <FaBell/>
        <CBadge shape="pill" color="danger">{itemsCount}</CBadge>
      </CDropdownToggle>
      <CDropdownMenu  placement="bottom-end" className="pt-0">
        <CDropdownItem
          header
          tag="div"
          className="text-center"
          color="light"
        >
          <strong>You have {itemsCount} notifications</strong>
        </CDropdownItem>
        <CDropdownItem><FaUserPlus/>&nbsp; New customer registered</CDropdownItem>
        <CDropdownItem><FaCartPlus/>&nbsp; New order</CDropdownItem>
        <CDropdownItem><FaDollarSign/>&nbsp; New payment</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default HeaderDropdownNotif