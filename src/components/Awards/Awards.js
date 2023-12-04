import React from 'react';
import './Awards.css'; 
import trophyImage from '../../assets/diamond.png'; 

function Awards({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="awards-section">
      {data.map((award, index) => (
        <div key={index} className="award-card">
          <img src={trophyImage} alt="Trophy" className="trophy-image" />
          <h3 className="award-title">{award.award}</h3>
          <p className="award-year">{award.organization}</p>
          <p className="award-by">{award.year}</p>
        </div>
      ))}
    </div>
  );
}

export default Awards;