import React from 'react'
import 'chart.js/auto'
import {Bar, Line} from "react-chartjs-2"
import {Chart as ChartJS, Filler} from "chart.js";
import gradient from 'chartjs-plugin-gradient';
import Spacer from './Spacer';

//Initialize Graph Features
ChartJS.register(gradient, Filler);

const Analytics = () => {
    //Initialize user data
    const user = JSON.parse(localStorage.getItem('currentUser'));

    //Graph Variables
    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    // label: (tooltipItem, data) => (' $' + tooltipItem.yLabel.value),
                    
                }
              }
        },
        scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value) {
                        return '$' + value;
                    }
                }
            }
        }
    }

    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const data = {
        labels: labels,
        datasets: [{
            label: "Revenue 2022-2023",
            data: user.revenue,
            gradient: {
                borderColor: {
                axis: 'x',
                colors: {
                    0: 'red',
                    4: 'orange',
                    8: 'green',
                    12: 'orange'}}
            },
            borderWidth: 3,
            // backgroundColor: '#fff',
            // fill: {
            //     target: "origin",
            //     above: "pink"
            //   },
            },],
    };

    return(
        <>
        <h1>Analytics</h1><br></br>
        <div style={{height: "60vh", paddingLeft: "20px", maxWidth: "900px"}}>
            <h3>Revenue: 2022-2023</h3>
            <Line data={data} options={options}/>
        </div>
        </>
    )
}

export default Analytics