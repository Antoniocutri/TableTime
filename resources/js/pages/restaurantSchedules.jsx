import React, { useEffect,useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'C:/Users/Utente/Herd/tabletime/resources/css/app.css';

export default function AddRestaurantSchedules() {
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setError,
        getValues,
        reset
    } = useForm({
        mode: 'onBlur'
        });

    const onSubmit = async (data) => {
        
        try {
            console.log(data)
            const response = await axios.post('/restaurant-schedule', data);

            if (response.data.success) {
                setSuccessMessage(response.data.message);
                reset();
            } else {
                setErrorMessage(response.data.message)
            }
            
        } catch (error) {
            if (error.response?.status === 422) {
                const serverErrors = error.response.data.errors;
                Object.keys(serverErrors).forEach((field) => {
                    setError(field, {
                        type: 'server',
                        message: serverErrors[field][0]
                    });
                });
            }
            
        }
    };
    
    const isLunchClosed = watch("isLunch_closed", false);
    const isDinnerClosed = watch("isDinner_closed", false);

    return (
        <>
            <Header/>
            {successMessage && 
                <div className="alert alert-success alert-dismissible fade show mt-2" role="alert">
                    {successMessage}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }

            {errorMessage && 
                <div className="alert alert-danger alert-dismissible fade show mt-2" role="alert">
                    {errorMessage}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container p-0">
                    <div className="row gx-3">
                        <div className="col-6">
                            <SelectDay
                                label={t("Select the day of the week")}
                                name='week_day'
                                register={register}
                                errors={errors}/>
                            
                            <CheckBox 
                                label={t("Check if is closed for lunch")} 
                                name='isLunch_closed'
                                register={register}/>
                        </div>
                    </div>
                    <div className="row gx-3">
                        <div className='col-6'>
                            <InputTime 
                                label={t('Insert opening lunch hour')}
                                name='lunch_opening'
                                register={register}
                                disabled={isLunchClosed}
                                errors={errors}/>

                            <CheckBox 
                                label={t("Check if is closed for dinner")} 
                                name='isDinner_closed'
                                register={register}
                            />
                        </div>
                        <div className='col-6'>
                            <InputTime
                                label={t("Insert closing lunch hour")}
                                name="lunch_closing"
                                register={register}
                                disabled={isLunchClosed}
                                errors={errors}
                                validateFn={(value) => {
                                    if(!isLunchClosed){
                                        const opening = getValues('lunch_opening');
                                        return value > opening || t("Closing must be later than opening");
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className='row gx-3'>
                        <div className='col-6'>
                            {/*opening lunch input */}
                            <InputTime 
                                label={t("Insert opening dinner hour")}
                                name='dinner_opening'
                                register={register}
                                disabled={isDinnerClosed}
                                errors={errors}/>
                        </div>
                        <div className='col-6'>
                            {/*closing lunch input */}
                            <InputTime
                                label={t("Insert closing dinner hour")}
                                name="dinner_closing"
                                register={register}
                                disabled={isDinnerClosed}
                                errors={errors}
                                validateFn={(value) => {
                                    if (!isDinnerClosed){
                                        const opening = getValues('dinner_opening');
                                        return value > opening || t("Closing must be later than opening");
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>

                <button type="submit" className='btn btn-primary mt-3'>{t("Save")}</button>
            </form>
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

const InputTime = ({ label, name, register, errors, validateFn, disabled = false }) => {

    // clear the input when it becomes disabled
    useEffect(() => {
    if (disabled) {
      const input = document.querySelector(`input[name="${name}"]`);
      input ? input.value = '' : null
    }
  });

    return (
        <>
            <Label label={label} name={name}/>
            <input
                {...register(name, {
                    required: !disabled && "Inserire l'orario",
                    validate: validateFn
                })}
                disabled={disabled}
                type='time'
                name={name}
                id={name}
                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-50 mt-1"
            />
            {errors[name] && <Error error={errors[name].message}/>}
        </>
    )
}

const CheckBox = ({label, name, register}) => {

    return(
        <>
            <div className="form-check mt-3 mb-0">
                <label className="form-check-label font-medium text-sm text-gray-700" htmlFor={name}>
                    {label}
                </label>
                <input 
                    type='checkbox' 
                    name={name}
                    {...register(name)}
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
            <label htmlFor={name} className="block font-medium text-sm text-gray-700 mt-2">
                {label}
            </label>
        </>
    )
}

const SelectDay = ({label, name, register, errors}) => {
    return (
        <>
            <Label 
                label={label}
                name={name}/>
            <select className="form-select w-100 mt-1"
                    {...register(name, {
                    required: "Inserire il giorno",
                })}>
                <option value="" hidden>Seleziona il giorno</option>
                <option value="0">Lunedì</option>
                <option value="1">Martedì</option>
                <option value="2">Mercoledì</option>
                <option value="3">Giovedì</option>
                <option value="4">Venerdì</option>
                <option value="5">Sabato</option>
                <option value="6">Domenica</option>
            </select>
            {errors[name] && <Error error={errors[name].message}/>}
        </>
    )
}