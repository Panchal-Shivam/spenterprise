// ==========================================
// MOBILE MENU
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if(hamburger && navMenu){

    const navLinks = navMenu.querySelectorAll("a");

    hamburger.addEventListener("click", () => {

      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");

    });

    navLinks.forEach(link => {

      link.addEventListener("click", () => {

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

      });

    });

  }

});


// ==========================================
// HERO SWIPER
// ==========================================

if(typeof Swiper !== "undefined"){

  new Swiper(".hero-swiper", {

    loop:true,

    autoplay:{
      delay:3500,
      disableOnInteraction:false,
    },

    effect:"fade",

  });

}


// ==========================================
// LIGHT GALLERY
// ==========================================

const lightGalleryElement = document.getElementById("lightgallery");

if(
  lightGalleryElement &&
  typeof lightGallery !== "undefined"
){

  lightGallery(lightGalleryElement, {

    speed:400,
    plugins:[lgZoom, lgThumbnail],
    thumbnail:true,

  });

}


// ==========================================
// RANDOM HOME GALLERY
// ==========================================

const galleryImages = [

{
  src:"img/gallery/IMG_20211124_145550.jpg",
  text:"SS Overhead Stirer Tank"
},

{
  src:"img/gallery/IMG_20211223_115820.jpg",
  text:"SS Overhead Stirer Tank"
},

{
  src:"img/gallery/IMG_20220825_140412.jpg",
  text:"SS Sterilization Tray"
},

{
  src:"img/gallery/IMG_20220825_141129.jpg",
  text:"SS Large Sterilization Tray"
},

{
  src:"img/gallery/IMG_20240120_122336.jpg",
  text:"visual Inspection Bench"
},

{
  src:"img/gallery/IMG_20240131_060750.jpg",
  text:"visual Inspection Bench"
},

{
  src:"img/gallery/IMG_20240713_135845.jpg",
  text:"SS Large Sterilization Tray Set"
},

{
  src:"img/gallery/IMG_20250430_155837.jpg",
  text:"SS Large Sterilization Tray Set"
},

{
  src:"img/gallery/IMG_20250611_151604.jpg",
  text:"SS Large Sterilization Tray Set"
},

{
  src:"img/gallery/IMG_20250620_090703.jpg",
  text:"SS Mini Sterilization Tray"
},

{
  src:"img/gallery/Loading.jpg",
  text:"Dispatch & Handling"
},

{
  src:"img/gallery/Maintainence_Buffing.jpg",
  text:"Maintenance & Buffing"
},

{
  src:"img/gallery/Roaster.png",
  text:"SS Roaster"
}

];


// ==========================================
// LOAD RANDOM GALLERY
// ==========================================

function loadGallery(){

  const galleryContainer = document.getElementById("dynamicGallery");

  if(!galleryContainer) return;

  // Fade Effect
  galleryContainer.classList.add("gallery-fade");

  setTimeout(() => {

    galleryContainer.innerHTML = "";

    // Shuffle Images
    const shuffled = [...galleryImages].sort(() => 0.5 - Math.random());

    // 8 Images Total
    // Desktop = 4 Columns × 2 Rows
    // Mobile = 2 Columns × 4 Rows
    const selectedImages = shuffled.slice(0, 8);

    selectedImages.forEach(item => {

      const wrapper = document.createElement("div");

      wrapper.className = "gallery-item-home";

      wrapper.innerHTML = `

        <img
          src="${item.src}"
          alt="${item.text}"
          loading="lazy"
        >

        <div class="gallery-overlay-home">
          <p>${item.text}</p>
        </div>

      `;

      // ==========================================
      // IMAGE POPUP
      // ==========================================

      wrapper.addEventListener("click", () => {

        const popup = document.getElementById("imagePopup");
        const popupImg = document.getElementById("popupImg");

        if(popup && popupImg){

          popup.style.display = "flex";
          popupImg.src = item.src;

        }

      });

      galleryContainer.appendChild(wrapper);

    });

    // Remove Fade
    galleryContainer.classList.remove("gallery-fade");

  }, 300);

}


// ==========================================
// POPUP CLOSE BUTTON
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  const closePopup = document.getElementById("closePopup");

  if(closePopup){

    closePopup.addEventListener("click", () => {

      document.getElementById("imagePopup").style.display = "none";

    });

  }

});


// ==========================================
// CLOSE POPUP ON OUTSIDE CLICK
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  const imagePopup = document.getElementById("imagePopup");

  if(imagePopup){

    imagePopup.addEventListener("click", (e) => {

      if(e.target.id === "imagePopup"){

        imagePopup.style.display = "none";

      }

    });

  }

});


// ==========================================
// INITIAL LOAD
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  loadGallery();

  // Auto Refresh Every 30 Seconds
  setInterval(loadGallery, 5000);

});

/* ==========================================
   CONTENT PROTECTION
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    /* Disable Image Drag */

    document.querySelectorAll("img").forEach(img=>{

        img.setAttribute("draggable","false");

        img.addEventListener("dragstart",e=>{
            e.preventDefault();
        });

    });

});


/* Disable Right Click */

document.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});


/* Disable Copy Except Footer */

document.addEventListener("copy",(e)=>{

    if(e.target.closest(".footer")) return;

    e.preventDefault();

});


/* Disable Cut Except Footer */

document.addEventListener("cut",(e)=>{

    if(e.target.closest(".footer")) return;

    e.preventDefault();

});


/* Disable Text Selection Except Footer */

document.addEventListener("selectstart",(e)=>{

    if(e.target.closest(".footer")) return;

    e.preventDefault();

});


/* Disable Common Developer Shortcuts */

// document.addEventListener("keydown",(e)=>{

//     const blocked =

//         e.key === "F12" ||

//         (e.ctrlKey && e.shiftKey && ["I","J","C"].includes(e.key.toUpperCase())) ||

//         (e.ctrlKey && ["U","S","C","X"].includes(e.key.toUpperCase()));

//     if(blocked){

//         e.preventDefault();

//     }

// });