import React, { useEffect,useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'C:/Users/Utente/Herd/tabletime/resources/css/app.css';

export default function EditModal({restaurant}){
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
                        <Form restaurant={restaurant}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{t('Cancel')}</button>
                        <button type="submit" className="btn btn-success" form="editRestaurantForm">{t('Save')}</button>
                    </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={5000} />
        </>
    )
}

const Form = ({restaurant}) => {
    const { t } = useTranslation();

    const methods = useForm({
      mode: "onBlur",
    });
    
    const onSubmit = async (data) => {

      try {
        let baseUrl = '/api/restaurant/'

        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("city", data.city);
        formData.append("phone", data.phone);
        formData.append("street", data.street);
        formData.append("description", data.description);

        // add image only if exists
        if (data.restaurant_image && data.restaurant_image[0]) {
          formData.append("image", data.restaurant_image[0]);
        }

        const response = await axios.post(baseUrl + restaurant.id, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-HTTP-Method-Override": "PUT"
          }
        });

        if(response.status === 200){
          const modalEl = document.querySelector('#editRestaurant');
          const modal = bootstrap.Modal.getInstance(modalEl);
          modal.hide();

          toast.success(response.data.message)
        }

      } catch (error) {
        toast.error(t("Unexpected error. Please try again later."));
      }
    };

    // Set form fields with the restaurant data every time that the modal opens
    useEffect(() => {
      const modal = document.getElementById("editRestaurant");

      modal.addEventListener("shown.bs.modal", () => {
        if (restaurant) {
          methods.reset({
            name: restaurant.name,
            city:  restaurant.city,
            phone: restaurant.phone,
            street: restaurant.street,
            description: restaurant.description
          });
        }
       });

    }, [restaurant, methods]);

    return (
        <>
          <FormProvider {...methods}>
            <form id='editRestaurantForm' encType='multipart/form-data' onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="container text-start">
                <div className="row">
                  <div className="col">
                    <div className="mt-4">
                        <TextInput 
                        label='Inserire il nome del ristorante' 
                        name='name'
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
                      name = 'description'
                      placeholder = 'Inserire una descrizione'
                      rules={{required: t('This field is required') }}
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

const TextArea = ({label, name, value, onChange, placeholder = '', rules={}}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
        {...register(name, rules)}
    />
    {errors[name] && <Error error={errors[name].message}/>}
  </>)
}

const Error = ({error}) =>{
  return (
    <p className='text-sm text-red-600 space-y-1 text-start'>{error}</p>
  )
}