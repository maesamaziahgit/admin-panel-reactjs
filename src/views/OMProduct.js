import React, { useState, useEffect } from 'react'
import { Container, Table } from 'reactstrap'
import axios from 'axios'
import { CImg } from '@coreui/react'

const OMDataProduct = () => {

    const [dataProduct, setDataProduct] = useState([])
    const api = 'http://localhost:3001'

    useEffect(() => {
        axios.get(api + '/selectProduct').then(res => {
            setDataProduct(res.data.values)
        })
    }, [])

    return (
        <Container>
            <h2>Data Product</h2>
            <hr />
            <Table className="table-bordered">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Unit Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {dataProduct.map(dataProduct =>
                        <tr key={dataProduct.id}>
                            <td>{dataProduct.category}</td>
                            <td>{dataProduct.name}</td>
                            <td>{dataProduct.description}</td>
                            <td>{dataProduct.unit_price}</td>
                            <td><CImg
                                    src={dataProduct.image_product}
                                    className="c-avatar-img"
                                    alt="item"
                                /></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}

export default OMDataProduct