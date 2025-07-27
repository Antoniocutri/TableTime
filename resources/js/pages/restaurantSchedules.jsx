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