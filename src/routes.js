import React from 'react';

const OMOrder = React.lazy(() => import('./views/OMOrder'));
const OMProduct = React.lazy(() => import('./views/OMProduct'));
const OMCustomer = React.lazy(() => import('./views/OMCustomer'));
const ARInvoiceToPayment = React.lazy(() => import('./views/ARInvoiceToPayment'));
const HREmployee = React.lazy(() => import('./views/HREmployee'));
const HREmployeeJob = React.lazy(() => import('./views/HREmployeeJob'));
const ADUser = React.lazy(() => import('./views/ADUser'));
const ADAddUser = React.lazy(() => import('./views/ADAddUser'));
const ADEditUser = React.lazy(() => import('./views/ADEditUser'));
const AccountSetting = React.lazy(() => import('./views/AccountSetting'));

const routes = [
    { path: '/', exact: true, name: 'Views' },
    { path: '/views/om/order', exact: true, name: 'om/order', component: OMOrder },
    { path: '/views/om/product', exact: true, name: 'om/product', component: OMProduct },
    { path: '/views/om/customer', exact: true, name: 'om/customer', component: OMCustomer },
    { path: '/views/ar/invoice-payment', exact: true, name: 'ar/invoice-payment', component: ARInvoiceToPayment },
    { path: '/views/hr/emp', exact: true, name: 'hr/emp', component: HREmployee },
    { path: '/views/hr/emp/job', exact: true, name: 'hr/emp/job', component: HREmployeeJob },
    { path: '/views/ad/user', exact: true, name: 'ad/user', component: ADUser },
    { path: '/views/ad/add-user', exact: true, name: 'ad/add-user', component: ADAddUser },
    { path: '/views/ad/edit-user', exact: true, name: 'ad/edit-user', component: ADEditUser },
    { path: '/views/account-setting', exact: true, name: 'account-setting', component: AccountSetting }
];

export default routes;