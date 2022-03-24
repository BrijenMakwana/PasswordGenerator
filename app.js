const passwordLengthRange = document.getElementById("passwordLengthRange");
const passwordLengthNumber = document.getElementById("passwordLengthNumber");
const includeUpperCaseElement = document.getElementById("includeUpperCase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");
const mainForm = document.getElementById("mainForm");

passwordLengthNumber.addEventListener("input", syncPasswordLentgh);
passwordLengthRange.addEventListener("input", syncPasswordLentgh);

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const passwordLength = passwordLengthNumber.value;
  const includeUpperCase = includeUpperCaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;
});

function syncPasswordLentgh(e) {
  const value = e.target.value;
  passwordLengthRange.value = value;
  passwordLengthNumber.value = value;
}

function generateChars(min, max) {
  const chars = [];
  for (let i = min; i <= max; i++) {
    chars.push();
  }
}
