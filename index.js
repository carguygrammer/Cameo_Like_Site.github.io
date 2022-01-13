// dropdown functions 
let onHoverLink = (ele1, ele2) => {
  ele2.classList.remove("hide");
  ele1.addEventListener("mouseout", function () {
    ele2.classList.add("hide");
  });
};

let onHoverDD = (ele) => {
  ele.classList.remove("hide");
  ele.addEventListener("mouseout", function () {
    ele.classList.add("hide");
  });
};
// categories dropdown 
const catLink = document.querySelector(".cateLink");
const catDD = document.querySelector(".categoriesDD");

catLink.addEventListener("mouseover", function () {
  onHoverLink(catLink, catDD);
  catDD.addEventListener("mouseover", function () {
    onHoverDD(catDD);
  });
});

// events dropdown 
const eveLink = document.querySelector(".eventsLink")
const eveDD = document.querySelector(".eventsDD")

eveLink.addEventListener("mouseover", function () {
  onHoverLink(eveLink, eveDD);
  eveDD.addEventListener("mouseover", function () {
    onHoverDD(eveDD);
  });
});

// email click color change event
var subsIn = document.querySelector(".eSubscribe");

document.addEventListener("click", function (event) {
  subsIn.style.border = "1px solid white";
  var isClickInsideElement = subsIn.contains(event.target);
  if (!isClickInsideElement) {
    subsIn.style.border = "1px solid rgb(82, 80, 80)";
  }
});

// language drop down event
const langSel = document.querySelector(".langSelect");
const langLi = document.querySelector(".langStylesContainer");
const lang = document.querySelectorAll(".langStyles");
const spin = document.querySelector(".rotate");

document.addEventListener("click", function (event) {
  langLi.classList.toggle("hide");
  for (let i = 0; i < lang.length; i++) {
    lang[i].addEventListener("click", function () {
      langSel.innerHTML = `${lang[i].innerHTML} <span>&#11167;</span>`;
    });
  }
  var clickInsideEle = langSel.contains(event.target);
  if (!clickInsideEle) {
    langLi.classList.add("hide");
  }
});
