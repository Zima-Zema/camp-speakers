// import { data } from '../../SpeakerData';
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
    const updateRecord = (update) => {
        const newSpeakersData = speakersData.map(speaker => {
            return {
                ...speaker,
                favorite: speaker.id === update.id ? update : speaker
            }
        });
       async function delayFunction() {
           try {
               await delay(delayTime);
               setData(newSpeakersData);
           } catch (error) {
               
           }
       }
    }

    return {
        speakersData,
        requestStatus,
        error,
        onFavoriteToggle
    }
}