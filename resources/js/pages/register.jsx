import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RoleSelect() {
  const [role, setRole] = useState('');

  const handleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div>
      <select name="role_select" className="form-select " value={role} onChange={handleChange}>
        <option value="" selected disabled hidden>Inserisci il Ruolo</option>
        <option value="customer">Cliente</option>
        <option value="owner">Ristoratore</option>
      </select>
      {role === "owner" && <ShowDiv />}
      </div>
  );
}

const ShowDiv = () => {
    const externalDiv = document.getElementById("prova");
    if (externalDiv) {
      externalDiv.classList.remove('d-none')
      externalDiv.classList.add('d-block') // o inline, flex, ecc.
    }
  };