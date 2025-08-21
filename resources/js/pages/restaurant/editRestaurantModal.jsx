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
                        ....
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{t('Cancel')}</button>
                        <button type="button" className="btn btn-success">{t('Save')}</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}