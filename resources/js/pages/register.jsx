import React, { useState } from 'react';

export default function RoleSelect() {
  const [role, setRole] = useState('');

  const handleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <select name="role_select" className="form-select border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" value={role} onChange={handleChange}>
      <option value="customer">Cliente</option>
      <option value="owner">Ristoratore</option>
    </select>
  );
}