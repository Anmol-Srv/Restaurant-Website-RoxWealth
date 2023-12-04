// src/services/restaurantService.js

// export const getRestaurants = async () => {
//     try {
//       const response = await fetch('/api/restaurants');
//       console.log('Response:', response);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Could not fetch restaurants: ", error.message);
//     }
//   };
// src/services/restaurantService.js

export const getRestaurants = async () => {
  try {
    const response = await fetch('/api/restaurants');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Data fetched:', data); 
    return data;
  } catch (error) {
    console.error("Could not fetch restaurants: ", error.message);
  }
};

  