import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CDataTable, CBadge } from '@coreui/react'
import axios from 'axios'

const ARInvoiceToPayment = () => {

    const [dataInvoice, setDataInvoice] = useState([])
    const api = 'http://localhost:3001'

    useEffect(() => {
        axios.get(api + '/selectInvoice').then(res => {
            setDataInvoice(res.data.values)
        })
    }, [])

    const fields = ['invoice_number', 'product', 'quantity', 'unit_price', 'customer_name', 'status']

    const getBadge = status => {
        switch (status) {
            case 'Paid': return 'success'
            case 'Invoice': return 'primary'
            case 'Vewer': return 'secondary'
            case 'Check': return 'danger'
            default: return 'warning'
        }
    }

    return (
        <CCard>
            <CCardBody>
                <hr />
                <h5>Invoice To Payment</h5>
                <hr />
                <CCard>
                    <CCardHeader>
                        Transaction Detail
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            items={dataInvoice}
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
            </CCardBody>
        </CCard >
    )
}

export default ARInvoiceToPayment