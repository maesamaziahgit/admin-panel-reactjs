import React, { useState, useEffect } from 'react'
import { Container, Table } from 'reactstrap'
import axios from 'axios'

const OMCustomer = () => {
    const [dataCustomer, setDataCustomer] = useState([])
    const api = 'http://localhost:3001'

    useEffect(() => {
        axios.get(api + '/selectCustomer').then(res => {
            setDataCustomer(res.data.values)
        })
    }, [])

    return (
        <Container>
            <h2>Data Customer</h2>
            <hr />
            <Table className="table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Address</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {dataCustomer.map(dataCustomer =>
                        <tr key={dataCustomer.id}>
                            <td>{dataCustomer.name}</td>
                            <td>{dataCustomer.username}</td>
                            <td>{dataCustomer.address}</td>
                            <td>{dataCustomer.email}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}

export default OMCustomer