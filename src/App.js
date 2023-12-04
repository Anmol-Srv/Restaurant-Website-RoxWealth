import React, {useState,useEffect} from 'react';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import SwiperSlider from './components/FoodItemSlider/SwiperSlider'
import './App.css';
import ChefDetails from './components/ChefDetail/ChefDetails';
import Awards from './components/Awards/Awards';
import EventsSection from './components/EventsSection/EventsSection';
import Footer from './components/Footer/Footer';

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [landingPageData, setLandingPageData] = useState(null);
  const [chefDetails, setChefDetails] = useState(null);
  const [awards, setAwards] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/restaurants')
      .then(response => response.json())
      .then(data => {
        const menu = data.restaurant.menu.categories.flatMap(category => category.items);
        setMenuItems(menu.sort((a, b) => b.rating - a.rating)); // Sort by rating
        setLandingPageData(data.restaurant);
        setChefDetails(data.restaurant.chef);
        setAwards(data.restaurant.awards);
        setEvents(data.restaurant.events.upcoming_events);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <LandingPage data={landingPageData}/>
      <SwiperSlider data={menuItems} />
      <ChefDetails chef={chefDetails} />
      <Awards data={awards}/>
      <EventsSection data={events} />
      <Footer/>
    </div>
  );
}

export default App;
