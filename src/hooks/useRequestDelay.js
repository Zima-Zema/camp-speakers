import { useEffect, useState } from 'react';

export const REQUEST_STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    FAILURE: 'failure'
};

export default function useRequestDelay(delayTime = 1000, initialData = []) {

    const [data, setData] = useState(initialData);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    useEffect(() => {
        async function runDelay() {
            try {
                await delay(delayTime);
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setData(data);
            } catch (error) {
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(e);
            }
        }
        runDelay();
    });

    const updateRecord = (update, doneCallback) => {
        const originalData = [...data];
        const newRecords = data.map(record => record.id === update.id ? update : record);
        async function delayFunction() {
            try {
                setData(newRecords);
                await delay(delayTime);
                if (doneCallback)
                    doneCallback();
            } catch (error) {
                console.error("error thrown inside delayFunction", error);
                if (doneCallback) doneCallback();
                setData(originalData);
            }
        }
        delayFunction();
    }

    return {
        data,
        requestStatus,
        error,
        updateRecord
    }
}   