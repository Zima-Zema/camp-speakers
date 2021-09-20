import Speaker from './Speaker';
import { data } from '../../SpeakerData';
import { useState } from 'react';
export default function SpeakerList({ showSessions }) {

  const [speakersData, setSpeakersData] = useState(data);
  const onFavoriteToggle = (id) => {
    const newSpeakersData = speakersData.map(speaker => {
      return {
        ...speaker,
        favorite: speaker.id === id ? !speaker.favorite : speaker.favorite
      }
    });
    return setSpeakersData(newSpeakersData);
  }
  return (
    <div className="container speaker-list">
      <div className="row">
        {speakersData.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={() => onFavoriteToggle(speaker.id)}
              />
          );
        })}
      </div>
    </div>
  )
}