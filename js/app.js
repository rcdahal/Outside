//Close Button Function
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

// Accordion Function
var acc = document.querySelectorAll(".accordion");

acc.forEach(function (accordion) {
  accordion.addEventListener("click", function () {
    var panel = this.nextElementSibling;
    var isActive = this.classList.contains("active");
    acc.forEach(function (otherAccordion) {
      if (otherAccordion !== accordion) {
        otherAccordion.classList.remove("active");
        otherAccordion.nextElementSibling.style.display = "none";
      }
    });
    this.classList.toggle("active");
    if (isActive) {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

//Auto Slider with Progress Bar
document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".p-slider");
  let currentIndex = 0;

  const nextSlide = () => {
    sliders[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % sliders.length;
    sliders[currentIndex].classList.add("active");

    const progressBar = sliders[currentIndex].querySelector(
      ".progress-bar-inner"
    );
    progressBar.style.width = "0%";
    let progress = 0;
    const interval = setInterval(() => {
      progress += 25;
      progressBar.style.width = progress + "%";
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 1000);
  };

  setInterval(nextSlide, 5000);
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
  var mealtimeLink = document.querySelector("#mobile-menu .m-menu ul li");
  var mealtimeMenu = document.querySelector(".m-sub-menu");

  mealtimeLink.addEventListener("click", function (e) {
    e.preventDefault();

    mealtimeMenu.style.display =
      mealtimeMenu.style.display === "block" ? "none" : "block";
  });
});

//Mobile Toggle Menu
function toggleMobile() {
  window.location.href = "./index.php";
}
