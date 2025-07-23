import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RoleSelect() {
  const [role, setRole] = useState('');

  const handleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <>
      <select name="role_select" className="form-select w-50" value={role} onChange={handleChange}>
        <option value="" hidden>Inserisci il Ruolo</option>
        <option value="customer">Cliente</option>
        <option value="owner">Ristoratore</option>
      </select>
      {role === "owner" && <Register/>}
    </>
  );
}

  function Register(){
    let [city, setCity] = useState();
    let [street, setStreet] = useState();
    let [phone, setPhone] = useState();
    let [description, setDescription] = useState();

    return (
      <>
        <div className="mt-4">
            <TextInput 
              label='Inserire la città' 
              name='city'
              value={city}
              onChange={(e) => setCity(e.target.value)}>
              </TextInput>
        </div>

        <div className="mt-4">
            <TextInput 
              label="Inserire l'indirizzo" 
              name='street'
              value={street}
              onChange={(e) => setStreet(e.target.value)}>
              </TextInput>
        </div>

        <div className="mt-4">
            <TextInput 
              label="Inserire il numero di telefono" 
              name='phone'
              type='tel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}>
              </TextInput>
        </div>

        <div className="mt-4">
          <TextArea
            label='Inserire una descrizione'
            name = 'restaurant_description'
            placeholder = 'Inserire una descrizione'
            value = {description}
            onChange={(e) => setDescription(e.target.value)}>
          </TextArea>
        </div>
      </>
    );
  }

  const TextInput = ({ label, name, value, onChange, onBlur, error, placeholder = "", type = "text", width = 'w-50' }) => {
  return (
    <>
      <label htmlFor={name} className="block font-medium text-sm text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        error={error}
        className={"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " + width}
      />
    </>
  );
};

const TextArea = ({label, name, value, onChange, placeholder = ''}) => {
  return (
    <>
      <label htmlFor={name} className="block font-medium text-sm text-gray-700">
          {label}
        </label>
      <textarea
        name={name}
        id={name}
        placeholder = {placeholder}
        value={value}
        onChange={onChange}
        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-100"
    />
  </>)

}

const Error = ({error}) =>{
  return (
    <p className='text-sm text-red-600 space-y-1'>{error}</p>
  )
}