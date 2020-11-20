import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2'
import axios from 'axios'

const HRRmpPieChart = () => {
    const [chartData, setChartData] = useState({})

    const api = 'http://localhost:3001'

    const chart = () => {
        let department = []
        let count = []

        axios.get(api + '/selectEmpGDept').then(res => {

            for (const dataObj of res.data.values) {
                department.push(dataObj.department)
                count.push(dataObj.count)
            }

            setChartData({
                labels: department,
                    datasets: [
                        {
                        label: '# of Votes',
                        data: count,
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

export default HRRmpPieChart