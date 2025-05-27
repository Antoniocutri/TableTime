import './bootstrap';

import Alpine from 'alpinejs';
import React from 'react';
import ReactDOM from 'react-dom/client';

window.Alpine = Alpine;

Alpine.start();

function App() {
    return <h1>Hello from React!</h1>;
}

function Prova() {
    return <h1>Hello from Prova!</h1>;
}

const rootElement = document.getElementById('root');
const prova1 = document.getElementById('prova');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
}

if (prova1) {
    const p = ReactDOM.createRoot(prova1);
    p.render(<Prova />)
}

root.render(<App />);
