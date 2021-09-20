import Speaker from './Speaker';

export default function SpeakerList({ data }) {
    return (
        <div className="container speaker-list">
        <div className="row">
          {data.map(function (speaker) {
            return (
              <Speaker key={speaker.id} speaker={speaker} />
            );
          })}
        </div>
      </div>
    )
}