const inputTotal = document.createElement("input");
const inputParticipant = document.createElement("input");
const buttonResult = document.createElement("button");
const inputResult = document.createElement("input");

//  <button class='' id=''> content </button>
// button =>const konopka =  document.createElement('button');
// konopka.set....
// h1.innerHTML = <strong>dsffdf</strong> / innerText= / content

inputTotal.setAttribute("type", "number");
inputParticipant.setAttribute("type", "number");
inputResult.setAttribute("type", "number");
buttonResult.innerText = "netije";

// tapshuruq: 2 button, background: black, whitesmoke,
// setAttribute => class => css

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
