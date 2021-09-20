import { data } from '../../SpeakerData';
import SpeakerList from './SpeakerList';

export default function Speakers() {
    return (
        <div className="container-fluid">
            <SpeakerList data={data} />
        </div>
    )
}
