document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.querySelector(".top-header .close-btn");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      const topHeader = document.querySelector(".top-header");
      if (topHeader) {
        topHeader.style.display = "none";
      }
    });
  }

  //Header Fixed on Scroll
  window.addEventListener("scroll", function () {
    var scroll = document.documentElement.scrollTop;
    var bottomHeader = document.querySelector(".bottom-header");

    if (scroll >= 100) {
      bottomHeader.classList.add("stickytop");
    } else {
      bottomHeader.classList.remove("stickytop");
    }
  });

  //Accrodian Function
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  // Tab functionality for Play Boxes
  const tabs = document.querySelectorAll(".tabs .tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      const tabContents = document.querySelectorAll(".tab-content");
      tabContents.forEach((tc) => tc.classList.remove("active"));

      const activeTabContent = document.querySelector(
        `#tab-content${this.id.slice(-1)}`
      );
      if (activeTabContent) {
        activeTabContent.classList.add("active");
      }
    });
  });
});

// Auto-playing slider
const sliders = document.querySelectorAll(".p-slider");
const gridContainer = document.querySelector(".grid-container");
const sliderWidth = sliders[0].offsetWidth;

let currentIndex = 0;

const nextSlide = () => {
  sliders[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % sliders.length;
  sliders[currentIndex].classList.add("active");
};
setInterval(nextSlide, 10000);

//Carousel
$(".brand-carousel").owlCarousel({
  items: 6,
  margin: 0,
  //loop:true,
  dots: true,
  autoHeight: true,
  //autoplay: true,
  smartSpeed: 250,
  autoplayTimeout: 4000,
  nav: true,
  navText: [],
  responsive: {
    0: {
      items: 2,
    },
    350: {
      items: 2,
    },
    460: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 4,
    },
  },
});

//Mobile Toggle Menu
function toggleMenu() {
  var menuToggle = document.querySelector(".menu-toggle");
  var menuContent = document.getElementById("mobile-menu");

  menuToggle.classList.toggle("active");

  if (menuContent.style.display === "none") {
    menuContent.style.display = "block";
  } else {
    menuContent.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var mealtimeLink = document.querySelector("#mobile-menu .m-menu ul li a");
  var mealtimeMenu = document.querySelector(".m-sub-menu");

  mealtimeLink.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the link from navigating

    mealtimeMenu.style.display =
      mealtimeMenu.style.display === "block" ? "none" : "block";
  });
});

//Mobile Toggle Menu
function toggleMobile() {
  window.location.href = "./index.php";
}
