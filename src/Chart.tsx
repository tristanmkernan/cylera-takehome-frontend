import React from 'react';
import { Line } from "react-chartjs-2";
import { DataPoint } from "./models";

type Props = {
    dataset: DataPoint[];
}

const Chart = ({dataset}: Props) => {
    const data = {
        labels: dataset.map(point => point.timestamp),
        datasets: [
            {
                label: 'Outgoing Bytes',
                fill: false,
                lineTension: 0.1,
                borderColor: 'rgba(255, 0, 0, 1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                data: dataset.map(point => point.bytes_fs)
            },
            {
                label: 'Incoming Bytes',
                fill: false,
                lineTension: 0.1,
                borderColor: 'rgba(0, 0, 255, 1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                data: dataset.map(point => point.bytes_ts)
            },
        ]
    };

    return (
        <div>
            <Line data={data}/>
        </div>
    );
};

export default Chart;
