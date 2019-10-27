import React from 'react';
import { Params } from "./models";

type Props = {
    params: Params,
    setParams: (params: Params) => void
};

const ChartControls = ({params, setParams}: Props) => {
    return (
        <div>
            <div className="field">
                <label className="label">Device ID</label>
                <div className="control">
                    <input className="input"
                           value={params.device_uuid}
                           onChange={event => setParams({...params, device_uuid: event.target.value})}
                           type="text"
                           placeholder="Device ID" />
                </div>
            </div>

            <div className="field">
                <label className="label">Num Windows</label>
                <div className="control">
                    <input className="input"
                           value={params.num_windows}
                           onChange={event => setParams({...params, num_windows: +event.target.value})}
                           type="number"
                           placeholder="Num Windows" />
                </div>
            </div>

            <div className="field">
                <label className="label">Window Time</label>
                <div className="control">
                    <input className="input"
                           value={params.window_time}
                           onChange={event => setParams({...params, window_time: +event.target.value})}
                           type="number"
                           placeholder="Window Time" />
                </div>
            </div>

            <div className="field">
                <label className="label">End Time</label>
                <div className="control">
                    <input className="input"
                           value={params.end_time}
                           onChange={event => setParams({...params, end_time: +event.target.value})}
                           type="number"
                           placeholder="End Time" />
                </div>
            </div>
        </div>
    );
};

export default ChartControls;
