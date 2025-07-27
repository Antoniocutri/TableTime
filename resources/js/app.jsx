import './bootstrap';
import 'C:/Users/Utente/Herd/tabletime/resources/js/i18n.js'

import Alpine from 'alpinejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RoleSelect from './pages/register';
import AddRestaurantSchedules from './pages/restaurantSchedules';

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
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <AddRestaurantSchedules />
      </React.StrictMode>
    );
  }
});

