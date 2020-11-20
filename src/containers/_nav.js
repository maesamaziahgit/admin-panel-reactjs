export default [
  
  //Management
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Management']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Order Management',
    route: '/views/om',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Order',
        to: '/views/om/order',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Product',
        to: '/views/om/product',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Customer',
        to: '/views/om/customer',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Account Receivable',
    route: '/views/ar',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Invoice to Payment',
        to: '/views/ar/invoice-payment',
      }
    ],
  },

  //Human Resource
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Human Resources']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Human Resources',
    route: '/views/hr',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Employee',
        to: '/views/hr/emp',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Job',
        to: '/views/hr/emp/job',
      }
    ],
  },

  //Administrator
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Administrator']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Account Administrator',
    route: '/views/ad',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'User',
        to: '/views/ad/user',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add User',
        to: '/views/ad/add-user',
      }
    ],
  },

]