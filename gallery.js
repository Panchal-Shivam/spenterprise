document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       MOBILE MENU
    =========================== */

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });

    }


    /* ===========================
       IMAGE POPUP
    =========================== */

    const images = document.querySelectorAll(".popup-img");

    const popup = document.getElementById("galleryImagePopup");
    const popupImg = document.getElementById("galleryPopupImg");
    const closeBtn = document.getElementById("galleryClosePopup");

    let scale = 1;
    let posX = 0;
    let posY = 0;
    let startX = 0;
    let startY = 0;
    let dragging = false;


    function updateTransform() {

        popupImg.style.transform =
            `translate(${posX}px, ${posY}px) scale(${scale})`;

    }


    /* OPEN IMAGE */

    images.forEach(img => {

        img.addEventListener("click", function (e) {

            e.stopPropagation();

            popup.classList.add("active");

            popupImg.src = this.src;

            scale = 1;
            posX = 0;
            posY = 0;

            updateTransform();

        });

    });


    /* CLOSE */

    closeBtn.addEventListener("click", () => {

        popup.classList.remove("active");

    });


    popup.addEventListener("click", (e) => {

        if (e.target === popup) {

            popup.classList.remove("active");

        }

    });


    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            popup.classList.remove("active");

        }

    });


    /* ZOOM */

    popupImg.addEventListener("wheel", (e) => {

        e.preventDefault();

        if (e.deltaY < 0) {

            scale += 0.2;

        } else {

            scale -= 0.2;

        }

        scale = Math.max(1, Math.min(scale, 4));

        updateTransform();

    });


    /* DRAG START */

    popupImg.addEventListener("mousedown", (e) => {

        if (scale === 1) return;

        dragging = true;

        startX = e.clientX - posX;
        startY = e.clientY - posY;

        popupImg.style.cursor = "grabbing";

    });


    /* DRAG MOVE */

    document.addEventListener("mousemove", (e) => {

        if (!dragging) return;

        posX = e.clientX - startX;
        posY = e.clientY - startY;

        updateTransform();

    });


    /* DRAG END */

    document.addEventListener("mouseup", () => {

        dragging = false;

        popupImg.style.cursor = "grab";

    });

});