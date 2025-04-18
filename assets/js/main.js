(function () {

    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }


        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

 
}) ();

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("#themaCarousel");
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");
    const items = carousel.querySelectorAll(".carousel-item");

    const bsCarousel = new bootstrap.Carousel(carousel, {
      interval: 3000,
      ride: "carousel",
      wrap: false // <- tidak muter balik ke awal/akhir
    });

    function updateButtons() {
      const activeIndex = [...items].findIndex(item => item.classList.contains("active"));

      // Disable prev if first slide
      if (activeIndex === 0) {
        prevBtn.classList.add("disabled");
      } else {
        prevBtn.classList.remove("disabled");
      }

      // Disable next if last slide
      if (activeIndex === items.length - 1) {
        nextBtn.classList.add("disabled");
      } else {
        nextBtn.classList.remove("disabled");
      }
    }

    // Saat carousel selesai berpindah
    carousel.addEventListener('slid.bs.carousel', updateButtons);

    // Inisialisasi awal
    updateButtons();
  });