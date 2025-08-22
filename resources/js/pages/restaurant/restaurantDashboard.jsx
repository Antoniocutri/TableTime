import React, { useEffect,useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'C:/Users/Utente/Herd/tabletime/resources/css/app.css';
import EditModal from './editRestaurantModal';

export default function RestaurantDashboard({restaurant}){
    const { t } = useTranslation();
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={restaurant.image_url} alt="Restaurant image"></img>
                    </div>
                    <div className="col ">
                        <div className='text-end'>
                            <Button
                                text={t('Edit')}
                                dataTarget="#editRestaurant"
                                restaurant={restaurant}/>
                        </div>
                        <div className="row mt-3 text-center">
                            <div className="col">
                                <div className='fs-3 fw-bolder'>
                                    {restaurant.name}
                                </div>
                                <div className='mt-3 fst-italic'>
                                    {restaurant.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col fw-medium">
                        {t("Address")}
                    </div>
                    <div className="col">
                        {restaurant.city + ", " + restaurant.street}
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col fw-medium">
                        {t("Phone number")}
                    </div>
                    <div className="col">
                        {restaurant.phone}
                    </div>
                </div>
            </div>
        </>
    )
}

const Button = ({dataTarget, text, restaurant}) =>{
    return(
        <>
            <button className='btn btn-outline-secondary' data-bs-toggle="modal" data-bs-target={dataTarget}>{text}</button>
            <EditModal restaurant={restaurant}/>
        </>
    )
}