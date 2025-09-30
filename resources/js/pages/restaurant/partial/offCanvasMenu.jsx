import React, { useEffect,useState } from 'react';
import { useTranslation } from 'react-i18next';
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'C:/Users/Utente/Herd/tabletime/resources/css/app.css';

export default function OffcanvasMenu(){

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
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div>
        </>
    )
}