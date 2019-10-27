import { useEffect, useReducer } from "react";
import { DataPoint } from "./models";

enum ActionType {
    MAKE_REQUEST,
    REQUEST_SUCCESS,
    REQUEST_FAILURE
}

type State = {
    loading: boolean;
    data: DataPoint[] | null;
    error: Error | null;
};

type Action = {
    type: ActionType;
    payload: any;
}

const initialState: State = {
    loading: true,
    data: null,
    error: null,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionType.MAKE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ActionType.REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            };
        case ActionType.REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            throw new Error(`Received unidentified action: ${action.type}`)
    }
};

type Props = {
    device_uuid: string;
    end_time?: number;
    window_time?: number;
    num_windows?: number;
}

const useDataset = (props: Props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(
        () => {
            const { device_uuid, end_time, window_time, num_windows } = props;

            let url = `http://localhost:5000/bandwidth?device_uuid=${device_uuid}`;

            if (window_time) {
                url = `${url}&window_time=${window_time}`;
            }

            if (end_time) {
                url = `${url}&end_time=${end_time}`;
            }

            if (num_windows) {
                url = `${url}&num_windows=${num_windows}`;
            }

            fetch(url)
                .then(
                    resp => resp.json()
                )
                .then(
                    resp => dispatch({type: ActionType.REQUEST_SUCCESS, payload: resp.data})
                )
                .catch(
                    err => dispatch({type: ActionType.REQUEST_FAILURE, payload: new Error(err)})
                );
        },
        [props]
    );

    return state;
};

export default useDataset;
