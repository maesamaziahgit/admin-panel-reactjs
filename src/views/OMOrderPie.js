import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2'
import axios from 'axios'

const OMOrderPie = () => {
    const [chartData, setChartData] = useState({})

    const api = 'http://localhost:3001'

    const chart = () => {
        let product = []
        let qtyOrder = []

        axios.get(api + '/selectSumQtyOrder').then(res => {

            for (const dataObj of res.data.values) {
                product.push(dataObj.product_name)
                qtyOrder.push(dataObj.qty)
            }

            setChartData({
                labels: product,
                    datasets: [
                        {
                        label: '# of Votes',
                        data: qtyOrder,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                        },
                    ],
            });

        })
            .catch(err => {
                console.log(err)
            })
    };

    useEffect(() => {
        chart();
    }, []);

    return (
        <div>
            <Pie data={chartData} />
        </div>
    )

}

export default OMOrderPie