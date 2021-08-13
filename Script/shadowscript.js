let radiusInput = document.querySelector(".radius");
let horizontal = document.querySelector(".hori");
let vertical = document.querySelector(".verti");
let spread = document.querySelector(".spread");
let blurd = document.querySelector(".blur");
let color = document.querySelector(".color");
let submit = document.querySelector(".submit");
let shadow = document.querySelector(".shadow");
let item;
let input = document.querySelector(".input");
let display = document.querySelector(".display");

function generateShadow() {
  // border-radius: 15px;
  // box-shadow: -4px 0px 8px 16px #6b6961;

  let borderradius = radiusInput.value;
  let horizontalvalue = horizontal.value;
  let verticalvalue = vertical.value;
  let spreadvalue = spread.value;
  let blurvalue = blurd.value;
  let colorvalue = color.value;

  let disp = `border-radius: ${borderradius}px ; \n
  boxShadow: ${horizontalvalue}px ${verticalvalue}px ${blurvalue}px ${spreadvalue}px ${colorvalue}`;

  display.textContent = disp;
  shadow.style.boxShadow = `${horizontalvalue}px ${verticalvalue}px ${blurvalue}px ${spreadvalue}px ${colorvalue}`;
  shadow.style.borderRadius = `${borderradius}px`;
}

document.addEventListener("change", generateShadow);
document.addEventListener("mousemove", generateShadow);
