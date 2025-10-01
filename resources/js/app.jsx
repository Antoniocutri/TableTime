import './bootstrap';
import 'C:/Users/Utente/Herd/tabletime/resources/js/i18n.js'

import Alpine from 'alpinejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RoleSelect from './pages/register';
import AddRestaurantSchedules from './pages/restaurantSchedules/restaurantSchedules';
import UpdateRestaurantSchedules from './pages/restaurantSchedules/updateRestaurantSchedules';
import RestaurantDashboard from './pages/restaurant/restaurantDashboard';
import OffcanvasMenu from './pages/restaurant/partial/offCanvasMenu';

window.Alpine = Alpine;

Alpine.start();

function App() {
  return (
    <div>
      <RoleSelect />
    </div>
  );
}

// display role select in register view
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('role');
  if (container) {
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
});

// display form to add restaurant schedules
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('addSchedules');
  if (container) {
    const props = JSON.parse(container.dataset.props);
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <AddRestaurantSchedules {...props} />
      </React.StrictMode>
    );
  }

  // display form to update restaurant schedules
  const update_schedules = document.querySelector('#update_schedules');
  if (update_schedules) {
    const props = JSON.parse(update_schedules.getAttribute('data-props'))
    ReactDOM.createRoot(update_schedules).render(
      <React.StrictMode>
        <UpdateRestaurantSchedules {...props} />
      </React.StrictMode>
    );
  }

  //display dashboard for restaurant
  const restaurant = document.querySelector("#restaurantDashboard");
  if (restaurant){
    const props = JSON.parse(restaurant.getAttribute('data-props')) 
    ReactDOM.createRoot(restaurant).render(
      <React.StrictMode>
        <RestaurantDashboard {...props} />
      </React.StrictMode>
    );
  }


  const offcanvas = document.getElementById('offcanvas');
  if (offcanvas) {
    ReactDOM.createRoot(offcanvas).render(
      <React.StrictMode>
        <OffcanvasMenu />
      </React.StrictMode>
    );
  }
});

