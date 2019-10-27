export type DataPoint = {
    timestamp: number;
    bytes_fs: number;
    bytes_ts: number;
}

export type Params = {
    device_uuid: string;
    num_windows: number;
    window_time: number;
    end_time: number;
};
