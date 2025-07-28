import React, { useEffect,useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddRestaurantSchedules() {
    
    return (
        <>
            <Header/>
        </>
    )
}

function Header(){
    const { t } = useTranslation();
    return (
        <>
            <h2 className="text-lg font-medium text-gray-900">
                {t('Add restaurant schedule')}
            </h2>

            <p className="mt-1 text-sm text-gray-600">
                { t('Add restaurant schedule for each day of the week') }
            </p>
        </>
    )
}

const InputTime = ({ label, name, register, errors, validateFn }) => {

    return (
        <>
            <Label label={label} name={name}/>
            <input
                {...register(name, {
                    required: "Inserire l'orario",
                    validate: validateFn
                })}
                type='time'
                name={name}
                id={name}
                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-50 mt-1"
            />
            {errors[name] && <Error error={errors[name].message}/>}
        </>
    )
}

const CheckBox = ({label, name}) => {

    return(
        <>
            <div className="form-check">
                <label className="form-check-label font-medium text-sm text-gray-700" htmlFor={name}>
                    {label}
                </label>
                <input 
                    type='checkbox' 
                    name={name}
                    className="form-check-input"/>
            </div>
        </>
    )
}

const Error = ({error}) =>{
  return (
    <p className='text-sm text-red-600 space-y-1'>{error}</p>
  )
}

const Label = ({label, name}) => {
    return (
        <>
            <label htmlFor={name} className="block font-medium text-sm text-gray-700">
                {label}
            </label>
        </>
    )
}