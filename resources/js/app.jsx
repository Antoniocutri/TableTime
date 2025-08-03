import './bootstrap';
import 'C:/Users/Utente/Herd/tabletime/resources/js/i18n.js'

import Alpine from 'alpinejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RoleSelect from './pages/register';
import AddRestaurantSchedules from './pages/restaurantSchedules/restaurantSchedules';
import UpdateRestaurantSchedules from './pages/restaurantSchedules/updateRestaurantSchedules';

window.Alpine = Alpine;

Alpine.start();

function App() {
  return (
    <div>
      <RoleSelect />
    </div>
  );
}

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

  const update_schedules = document.querySelector('#update_schedules');
  if (update_schedules) {
    ReactDOM.createRoot(update_schedules).render(
      <React.StrictMode>
        <UpdateRestaurantSchedules />
      </React.StrictMode>
    );
  }
});

