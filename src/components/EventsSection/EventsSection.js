import React from 'react';
import './EventsSection.css'; 
import defaultImage from '../../assets/CulinaryArtistryShowcase.jpg'

function EventsSection({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className='events-container'>
        <h2 className='events-title'>-- Upcoming Events --</h2>
    <div className="events-section">
      {data.map((event, index) => (
        <div key={index} className={`event-card ${index % 2 === 0 ? 'normal' : 'reversed'}`}>
          <div className="event-image">
            <img src={event.imageUrl ? event.imageUrl : defaultImage} alt={event.name} />
          </div>
          <div className="event-info">
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <p className='date-para'> Date : {event.date}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default EventsSection;