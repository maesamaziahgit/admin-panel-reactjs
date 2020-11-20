import React, { useState, useEffect } from 'react'
import { Button, Card, CardBody, CardHeader, Container, NavLink, Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ADUser = () => {
    const [dataAdmin, setDataAdmin] = useState([])
    const api = 'http://localhost:3001'

    useEffect(() => {
        axios.get(api + '/selectAccountAdmin').then(res => {
            setDataAdmin(res.data.values)
        })
    }, [])

    return (
        <Container>
            <Card>
            <CardHeader>
            <h2>User & Role</h2>
            </CardHeader>
            <hr />
            <CardBody>
            <Table className="table-bordered">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Role</th>
                        <th>Creation Date</th>
                        <th>Update Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dataAdmin.map(dataAdmin =>
                        <tr key={dataAdmin.id}>
                            <td>{dataAdmin.username}</td>
                            <td>{dataAdmin.password}</td>
                            <td>{dataAdmin.role}</td>
                            <td>{dataAdmin.creation_date}</td>
                            <td>{dataAdmin.update_date}</td>
                            <td width="200px">
                                    <Link to = {{
                                        pathname: "/views/ad/edit-user",
                                        state: {
                                            id: dataAdmin.id,
                                            username: dataAdmin.username,
                                            password: dataAdmin.password,
                                            role: dataAdmin.role
                                        }
                                    }}>
                                        <Button color="warning">Edit User</Button>
                                    </Link>
                                    </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <hr />
            <NavLink href="/views/ad/add-user"><Button color="success">Add User</Button></NavLink>
            </CardBody>
            </Card>
        </Container>
    )
}

export default ADUser