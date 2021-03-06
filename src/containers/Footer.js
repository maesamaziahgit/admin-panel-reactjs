import React from 'react'
import { CFooter } from '@coreui/react'

const Footer = () => {
  return (
    <CFooter fixed={false}>
      <div>Design Bootstrap Admin Template by. &nbsp;
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">CoreUI</a>
        <span className="ml-1">&copy; 2020 creativeLabs.</span>
      </div>
    </CFooter>
  )
}

export default Footer