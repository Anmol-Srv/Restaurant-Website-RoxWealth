import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './LandingPage.css';
import banner from '../../assets/banner.jpg'

function LandingPage({ data }) {
  if (!data) return <div>Loading...</div>;

  const { name, ambiance, location, online_presence } = data;

  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${location.latitude},${location.longitude}`;

  return (
    <div className="landing-page">
      <div className="restaurant-header" style={{ backgroundImage: `url(${banner})` }}>
        <div className='above-section'>
          <h1 className="restaurant-name">{name}</h1>
          <p className="restaurant-description">{ambiance.description}</p>
        </div>
        <div className="restaurant-details">
          <div className="address-section">
            <p>{location.address}</p>
            <div className="social-media">
              {online_presence.social_media.twitter && (
                <a href={online_presence.social_media.twitter} >
                  <FaTwitter />
                </a>
              )}
              {online_presence.social_media.facebook && (
                <a href={online_presence.social_media.facebook} >
                  <FaFacebook />
                </a>
              )}
              {online_presence.social_media.instagram && (
                <a href={online_presence.social_media.instagram} >
                  <FaInstagram />
                </a>
              )}
              {online_presence.social_media.linkedin && (
                <a href={online_presence.social_media.linkedin} >
                  <FaLinkedin />
                </a>
              )}
            </div>
          </div>
          <div className="map-section">
            <iframe
              title="Restaurant Location"
              src={googleMapsUrl}
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;