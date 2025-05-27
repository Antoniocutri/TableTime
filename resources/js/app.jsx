import './bootstrap';

import Alpine from 'alpinejs';
import React from 'react';
import ReactDOM from 'react-dom/client';

window.Alpine = Alpine;

Alpine.start();

function App() {
    return <h1>Hello from React!</h1>;
}

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
}

root.render(<App />);
