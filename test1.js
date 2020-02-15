const buttonRed = document.createElement("button");
const buttonBlue = document.createElement("button");
const buttonYellow = document.createElement("button");

document.body.appendChild(buttonRed);
document.body.appendChild(buttonBlue);
document.body.appendChild(buttonYellow);

buttonYellow.innerText = "yellow";
buttonBlue.innerText = "blue";
buttonRed.innerText = "red";

buttonBlue.addEventListener(
  "click",
  () => (document.body.style.background = "blue")
);
buttonRed.addEventListener(
  "dblclick",
  () => (document.body.style.background = "red")
);
buttonYellow.addEventListener("mouseleave", () => {
  document.body.style.background = "yellow";
  document.body.style.color = "black";
});
