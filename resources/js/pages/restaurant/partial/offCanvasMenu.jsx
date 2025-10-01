import React, { useEffect,useState } from 'react';
import { useTranslation } from 'react-i18next';
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'C:/Users/Utente/Herd/tabletime/resources/css/app.css';

export default function OffcanvasMenu(){
    const { t } = useTranslation();

    document.addEventListener("mousemove", function(e) {
        // if mouse is in first left 75px 
        if (e.clientX <= 75) {
            const offcanvasEl = document.getElementById("offcanvasWithBothOptions");
            const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);

            // open only if it is not opened yet
            if (!offcanvasEl.classList.contains("show")) {
                bsOffcanvas.show();
            }
        }
    });

    return ( 
        <>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title px-2" id="offcanvasWithBothOptionsLabel">Menù</h5>
                </div>
                <div className="offcanvas-body offCanvasBackground">
                    <div className="list-group list-group-flush">
                        <a href="#" className="list-group-item list-group-item-action">{t("Reservations")}</a>
                        <a href="#" className="list-group-item list-group-item-action mt-2">{t("Tables")}</a>
                        <a href="#" className="list-group-item list-group-item-action mt-2">{t("Restaurant schedules")}</a>
                    </div>
                </div>
            </div>
        </>
    )
}