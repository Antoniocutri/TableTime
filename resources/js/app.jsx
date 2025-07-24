import './bootstrap';

import Alpine from 'alpinejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RoleSelect from './pages/register';

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
  const container = document.getElementById('role_select');
  if (container) {
    ReactDOM.createRoot(document.getElementById('role_select')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
});


