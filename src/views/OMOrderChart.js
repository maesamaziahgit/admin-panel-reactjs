import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'

const OMOrderChart = () => {

    const [chartData, setChartData] = useState({})
    const api = 'http://localhost:3001'

    const chart = () => {
        let orderQty = []
        let orderDate = []

        axios.get(api + '/selectOrderByDate').then(res => {

            for (const dataObj of res.data.values) {
                orderQty.push(parseInt(dataObj.fruits_qty))
                orderDate.push(dataObj.order_date)
            }

            setChartData({
                labels: orderDate,
                datasets: [
                    {
                        label: "Amount",
                        data: orderQty,
                        backgroundColor: ["rgba(75, 192, 192, 0.5)"],
                        borderWidth: 4
                    }
                ]
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
            <Line data={chartData} />
        </div>
    )
}

export default OMOrderChart