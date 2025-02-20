const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output")
console.log(nameInput);
console.log(nameOutput);
function onInputChange() {
    nameInput.value = nameInput.value.trim();
    nameOutput.textContent = nameInput.value || "Anonymous";
}
nameInput.addEventListener("input", onInputChange)