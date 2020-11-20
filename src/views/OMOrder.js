import React, { useState, useEffect } from 'react'
import axios from 'axios'
import OMOrderChart from './OMOrderChart'
import OMOrderPie from './OMOrderPie'
import { CCard, CCardBody, CCardHeader, CRow, CCol, CDataTable, CBadge } from '@coreui/react'

const OMOrder = () => {

    const fields = ['name', 'order_id', 'order_date', 'product', 'quantity', 'price', 'amount', 'status']

    const getBadge = status => {
        switch (status) {
            case 'Paid': return 'success'
            case 'Invoice': return 'primary'
            case 'Vewer': return 'secondary'
            case 'Check': return 'danger'
            default: return 'warning'
        }
    }

    const [dataOrder, setDataOrder] = useState([])
    const api = 'http://localhost:3001'

    useEffect(() => {
        axios.get(api + '/selectOrder').then(res => {
            setDataOrder(res.data.values)
        })
    }, [])

    return (
        <CCard>
            <CCardBody>
                <CRow>
                    <CCol sm="7">
                        <p>Order Summary by Date (Amount)</p>
                        <OMOrderChart />
                    </CCol>
                    <CCol sm="5">
                        <p>Order Summary by Product (Qty)</p>
                        <OMOrderPie />
                    </CCol>
                </CRow>
                <hr />
                <h5>Order Detail</h5>
                <hr />
                <CRow>
                    <CCol>
                        <CCard>
                            <CCardHeader>
                                Order Detail Table
                        </CCardHeader>
                            <CCardBody>
                                <CDataTable
                                    items={dataOrder}
                                    fields={fields}
                                    hover
                                    striped
                                    bordered
                                    size="sm"
                                    itemsPerPage={10}
                                    pagination
                                    scopedSlots={{
                                        'status':
                                            (item) => (
                                                <td>
                                                    <CBadge color={getBadge(item.status)}>
                                                        {item.status}
                                                    </CBadge>
                                                </td>
                                            )
                                    }}
                                />
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    )
}

export default OMOrder