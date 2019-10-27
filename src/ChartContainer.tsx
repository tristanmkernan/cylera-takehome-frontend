import React, { useState } from 'react';
import Chart from "./Chart";
import ChartControls from "./ChartControls";
import useDataset from "./useDataset";

const ChartContainer = () => {
    const [params, setParams] = useState({
        device_uuid: 'cf4844bc-a107-4e0a-84e1-fa04d76d388c',
        num_windows: 10,
        window_time: 60,
        end_time: Math.floor(Date.now() / 1000)
    });

    const { data, error, loading } = useDataset(params);

    if (loading) {
        return (
            <progress className="progress is-medium is-primary" max="100">15%</progress>
        );
    }

    if (error || data === null) {
        return (
            <article className="message is-danger">
                <div className="message-header">
                    <p>
                        Error
                    </p>
                </div>
                <div className="message-body">
                    {error!.message}
                </div>
            </article>
        );
    }

    return (
        <div className="columns">
            <div className="column is-three-quarters">
                <Chart dataset={data!}/>
            </div>
            <div className="column">
                <ChartControls params={params} setParams={setParams}/>
            </div>
        </div>
    );
};

export default ChartContainer;
