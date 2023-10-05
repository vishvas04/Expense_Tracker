import React from 'react'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";
function Visualise(props) {
    const a = (props.response)
    // if(props.response==undefined)
    // console.log("no data")
    let arr = Object.values(a)
    // console.log(arr)
    for (let i = 0; i < 4; i++) {
        arr[i] = parseInt(arr[i])
    }
    console.log(arr)

    const config = {
        labels: ["groceries","electricity_bills","water_bills","rent"],
        datasets: [
            {
                label: "Users Gained ",
                data:arr,
                backgroundColor: [
                    "#5655c6", "#5655c626","#f7f7f7f","#0808"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    }

    Chart.register(CategoryScale);
    return (
        <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
            <Pie
                data={config}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Users Gained between 2016-2020"
                        }
                    }
                }}
            />
        </div>
    )
}

export default Visualise