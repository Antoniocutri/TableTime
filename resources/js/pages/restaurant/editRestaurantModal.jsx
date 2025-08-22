import React, { useEffect,useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'C:/Users/Utente/Herd/tabletime/resources/css/app.css';

export default function EditModal(){
    const { t } = useTranslation();
    return(
        <>
            <div className="modal fade" id="editRestaurant" tabIndex="-1" aria-labelledby="editRestaurantLabel" aria-hidden="true">
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
                        <button type="submit" className="btn btn-success" form="editRestaurantForm">{t('Save')}</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Form = () => {
    const { t } = useTranslation();

    const methods = useForm({
      mode: "onBlur",
    });
    
    const onSubmit = async (data) => {
      console.log('ciao')
    };

    return (
        <>
          <FormProvider {...methods}>
            <form id='editRestaurantForm' onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="container text-start">
                <div className="row">
                  <div className="col">
                    <div className="mt-4">
                        <TextInput 
                        label='Inserire il nome del ristorante' 
                        name='restaurant_name'
                        rules={{required: t('This field is required') }}
                        />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mt-4">
                      <TextInput 
                      label='Inserire la città' 
                      name='city'
                      rules={{required: t('This field is required') }}
                      />
                    </div>
                  </div>
                </div>
                  <div className="row">
                    <div className="col">
                      <div className="mt-4">
                        <TextInput 
                        label="Inserire l'indirizzo" 
                        name='street'
                        rules={{required: t('This field is required') }}
                        />
                    </div>
                    </div>
                    <div className="col">
                      <div className="mt-4">
                          <TextInput 
                          label="Inserire il numero di telefono" 
                          name='phone'
                          type='tel'
                          rules={{
                            required: t('This field is required'),
                            pattern: {
                              value: /^(\+39)?\s*\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}$/,
                              message: t('Insert a valid phone numer')
                            }
                          }}
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
                  rules={{required: t('This field is required') }}
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
          </FormProvider>
        </>
    )
}

const TextInput = ({ label, name, type = "text", rules = {} }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm form-control w-100"
        {...register(name, rules)}
      />
      {errors[name] && <Error error={errors[name].message}/>}
    </div>
    </>
  );
};

const TextArea = ({label, name, value, onChange, placeholder = ''}) => {
  return (
    <>
      <label htmlFor={name} className="block font-medium text-sm text-gray-700 text-start">
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