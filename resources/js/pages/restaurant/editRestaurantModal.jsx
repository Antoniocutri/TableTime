import React, { useEffect,useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'C:/Users/Utente/Herd/tabletime/resources/css/app.css';

export default function EditModal(){
    const { t } = useTranslation();
    return(
        <>
            <div className="modal fade" id="editRestaurant" tabindex="-1" aria-labelledby="editRestaurantLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 fw-medium" id="editRestaurantLabel">{t('Edit Restaurant')}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Form/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{t('Cancel')}</button>
                        <button type="submit" className="btn btn-success">{t('Save')}</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Form = () => {
    const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
            setError,
            setValue,
            getValues,
            reset
    } = useForm({
        mode: 
        'onBlur'
        });
    
    const onSubmit = async (data) => {
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

              <div class="container text-start">
                <div class="row">
                  <div class="col">
                    <div className="mt-4">
                        <TextInput 
                        label='Inserire il nome del ristorante' 
                        name='restaurant_name'
                        />
                    </div>
                  </div>
                  <div class="col">
                    <div className="mt-4">
                      <TextInput 
                      label='Inserire la città' 
                      name='city'
                      />
                    </div>
                  </div>
                </div>
                  <div class="row">
                    <div class="col">
                      <div className="mt-4">
                        <TextInput 
                        label="Inserire l'indirizzo" 
                        name='street'
                        errors={errors}/>
                    </div>
                    </div>
                    <div class="col">
                      <div className="mt-4">
                          <TextInput 
                          label="Inserire il numero di telefono" 
                          name='phone'
                          type='tel'
                          />
                      </div>
                    </div>
                  </div>
              </div>

              <div className="mt-4">
                  <TextInput 
                  label='Inserire un immagine' 
                  name='restaurant_image'
                  type='file'
                  accept=".jpg,.jpeg"
                  width='w-100'
                  />
              </div>

              <div className="mt-4">
                  <TextArea
                      label='Inserire una descrizione'
                      name = 'restaurant_description'
                      placeholder = 'Inserire una descrizione'
                      />
              </div>
            </form>
        </>
    )
}

const TextInput = ({ label, name, value, onChange, onBlur, errors, placeholder = "", type = "text", width = 'w-50' }) => {
  return (
    <>
    <div className='text-start'>
      <label htmlFor={name} className="block font-medium text-sm text-gray-700 form-label">
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
        error={errors}
        className={"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm form-control" + width}
      />
    </div>
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