const nav = document.querySelector(".nav__links");
const openNavBtn = document.querySelector("#nav__toggle-open");
const closeNavBtn = document.querySelector("#nav__toggle-close");

const openNav = () => {
  nav.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
};

const closeNav = () => {
  nav.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};
openNavBtn.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);

// window.onresize = function () {
//   location.reload();
// };

// Show and Hide FAQs

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    //change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// DIRECTORS
const infoBtn = document.querySelector(".image__container");
const showInfo = document.querySelectorAll(".show__info");
const infoContainer = document.querySelectorAll(".text");

const closeBioBtn = document.querySelector("#bod-close");

for (let i = 0; i < showInfo.length; i++) {
  showInfo[i].addEventListener("click", function () {
    // console.log(showInfo[i].id);
    let infoText = showInfo[i].id;
    // console.log(infoText); // shows correct ID
    closeOpenInfoContainer();
    if (infoContainer[i].classList.contains(infoText)) {
      infoContainer[i].classList.remove("hidden");
      infoContainer[i].scrollIntoView({ behavior: "smooth" });
    }
  });
}

function closeOpenInfoContainer() {
  for (var i = 0; i < infoContainer.length; i++) {
    if (!infoContainer[i].classList.contains("hidden")) {
      infoContainer[i].classList.add("hidden");
      break;
    }
  }
}

// function closeInfoContainer() {
//   infoContainer.classList.add("hidden");
// }
// closeBioBtn.addEventListener("click", closeInfoContainer);
