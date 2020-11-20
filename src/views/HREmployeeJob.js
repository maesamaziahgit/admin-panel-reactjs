import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CDataTable, CRow, CCol } from '@coreui/react'
import axios from 'axios'
import HREmpPieChart from './HREmpPieChart'
import HREmpPieDept from './HREmpPieDept'

const HREmployeeJob = () => {

    const [dataEmployee, setDataEmployee] = useState([])
    const api = 'http://localhost:3001'

    useEffect(() => {
        axios.get(api + '/selectEmpJob').then(res => {
            setDataEmployee(res.data.values)
        })
    }, [])

    const fields = ['department', 'location', 'job', 'name', 'gender', 'hiredate']

    return (
        <CCard>
            <CCardBody>
                <CRow>
                    <CCol sm="7">
                        <p>Summary Employee by Dept</p>
                        <HREmpPieDept />
                    </CCol>
                    <CCol sm="5">
                        <p>Summary Employee by Gender</p>
                        <HREmpPieChart />
                    </CCol>
                </CRow>
                <hr />
                <CRow>
                    <CCard>
                        <CCardHeader>
                            Employee Detail
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
                    </CCard>
                </CRow>
            </CCardBody>
        </CCard >
    )
}

export default HREmployeeJob