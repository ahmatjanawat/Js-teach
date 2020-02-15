const inputTotal = document.createElement("input");
const inputParticipant = document.createElement("input");
const buttonResult = document.createElement("button");
const inputResult = document.createElement("input");

inputTotal.setAttribute("type", "number");
inputParticipant.setAttribute("type", "number");
inputResult.setAttribute("type", "number");
buttonResult.innerText = "netije";

//  todo : tapshuruq
// set class name
// add css file

// <input >

inputParticipant.defaultValue = 1;
inputParticipant.setAttribute("min", 1);
inputParticipant.setAttribute("max", 5);
inputTotal.setAttribute("min", 0);

document.body.appendChild(inputTotal);
document.body.appendChild(inputParticipant);
document.body.appendChild(buttonResult);
document.body.appendChild(inputResult);

buttonResult.addEventListener("click", () => {
  inputResult.value = (inputTotal.value / inputParticipant.value).toFixed(2);
  inputParticipant.value = "";
  inputTotal.value = "";
});
