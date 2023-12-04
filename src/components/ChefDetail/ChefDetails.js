import React from 'react';
import './ChefDetails.css'; 
import chefImage from '../../assets/chef.png'

function ChefDetails({ chef }) {
  if (!chef) return null;

  return (
    <div className='container'>
      <div className="chef-detail">
        <h2>{chef.name}</h2>
        <p>{chef.bio}</p>
        <p>Signature Dish: {chef.signature_dish}</p>
      </div>
      <div className='chef-image'>
        <img src={chefImage} alt={chef.name} />
      </div>
    </div>
  );
}

export default ChefDetails;