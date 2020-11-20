import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CDataTable } from '@coreui/react'
import axios from 'axios'

const HREmployee = () => {

    const [dataEmployee, setDataEmployee] = useState([])
    const api = 'http://localhost:3001'

    useEffect(() => {
        axios.get(api + '/selectEmployee').then(res => {
            setDataEmployee(res.data.values)
        })
    }, [])

    const fields = ['name', 'employee_number', 'hiredate', 'age', 'address', 'city', 'zip', 'phonenumber']

    return (
        <CCard>
            <CCardBody>

                <CCardHeader>
                    Data Employee
                        </CCardHeader>
                <CCardBody>
                    <CDataTable
                        items={dataEmployee}
                        fields={fields}
                        hover
                        striped
                        bordered
                        size="sm"
                        itemsPerPage={10}
                        pagination
                    />
                </CCardBody>
            </CCardBody>
        </CCard >
    )
}

export default HREmployee