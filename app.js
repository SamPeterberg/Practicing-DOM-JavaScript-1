var bulb = document.querySelector("#bulb");
var butn = document.querySelector("button");
var flag = 0;

butn.addEventListener("click", function () {
  if (flag == 0) {
    bulb.style.backgroundColor = "yellow";
    flag = 1;
    butn.innerHTML = "OFF"
  } else {
    bulb.style.backgroundColor = "transparent";
    flag = 0;
    butn.innerHTML = "ON"
  }
});
