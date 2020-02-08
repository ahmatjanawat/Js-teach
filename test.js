const inputTotal = document.createElement("input");
const inputParticipant = document.createElement("input");
const buttonResult = document.createElement("button");
const inputResult = document.createElement("input");

inputTotal.setAttribute("type", "number");
inputParticipant.setAttribute("type", "number");
inputResult.setAttribute("type", "number");
buttonResult.innerText = "netije";

document.body.appendChild(inputTotal);
document.body.appendChild(inputParticipant);
document.body.appendChild(buttonResult);
document.body.appendChild(inputResult);

buttonResult.addEventListener("click", () => {
  inputResult.value = (inputTotal.value / inputParticipant.value).toFixed(2);
  inputParticipant.value = "";
  inputTotal.value = "";
});
