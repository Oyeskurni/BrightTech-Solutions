const hamMenu = document.querySelector(".hamburger");
const offScreenMenu = document.querySelector(".off__screen__menu");
// const navLink = document.querySelectorAll("#nav__link");
const hamburgerClose = document.querySelector(".close");

hamMenu.addEventListener("click", () => {
  offScreenMenu.classList.toggle("active");
  console.log("hello");
});

hamburgerClose.addEventListener("click", () => {
  offScreenMenu.classList.remove("active");
});

// Close the menu when a menu item is clicked
document.querySelectorAll(".off__screen__menu ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    offScreenMenu.classList.remove("active");
  });
});

// ==================

// ==================
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".description-tabs a");
  const contentSections = document.querySelectorAll(".description-text");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove the 'active' class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));

      // Add 'active' class to the clicked tab
      this.classList.add("active");

      // Hide all content sections
      contentSections.forEach((section) =>
        section.classList.remove("active-section")
      );

      // Show the corresponding content section based on the index
      contentSections[index].classList.add("active-section");
    });
  });
});
