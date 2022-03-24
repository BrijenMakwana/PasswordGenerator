const passwordLengthRange = document.getElementById("passwordLengthRange");
const passwordLengthNumber = document.getElementById("passwordLengthNumber");
const includeUpperCaseElement = document.getElementById("includeUpperCase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");
const passwordElement = document.getElementById("password");
const copyElement = document.getElementById("copy");
const mainForm = document.getElementById("mainForm");
const upperCaseConditionElement = document.getElementById("upperCaseCondition");
const numbersConditionElement = document.getElementById("numbersCondition");
const symbolsConditionElement = document.getElementById("symbolsCondition");

// sync password length
passwordLengthNumber.addEventListener("input", syncPasswordLentgh);
passwordLengthRange.addEventListener("input", syncPasswordLentgh);

// sync include and conditions elements

includeUpperCaseElement.addEventListener("change", () => {
  if (includeUpperCaseElement.checked) {
    upperCaseConditionElement.disabled = false;
  } else {
    upperCaseConditionElement.disabled = true;
  }
});

includeNumbersElement.addEventListener("change", () => {
  if (includeNumbersElement.checked) {
    numbersConditionElement.disabled = false;
  } else {
    numbersConditionElement.disabled = true;
  }
});

includeSymbolsElement.addEventListener("change", () => {
  if (includeSymbolsElement.checked) {
    symbolsConditionElement.disabled = false;
  } else {
    symbolsConditionElement.disabled = true;
  }
});

// possible characters
const UPPERCASE_LETTERS = generateChars(65, 90);
const LOWERCASE_LETTERS = generateChars(97, 122);
const NUMBERS = generateChars(48, 57);
const SYMBOLS = generateChars(33, 47)
  .concat(generateChars(58, 59))
  .concat(generateChars(61, 61))
  .concat(generateChars(63, 64))
  .concat(generateChars(91, 96))
  .concat(generateChars(123, 126));

//   sync password length
function syncPasswordLentgh(e) {
  const value = e.target.value;
  passwordLengthRange.value = value;
  passwordLengthNumber.value = value;
}

// submit button
mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const passwordLength = passwordLengthNumber.value;
  const includeUpperCase = includeUpperCaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;

  const upperCaseCondition = upperCaseConditionElement.value;
  const numbersCondition = numbersConditionElement.value;
  const symbolsCondition = symbolsConditionElement.value;

  const password = generatePassword(
    passwordLength,
    includeUpperCase,
    includeNumbers,
    includeSymbols,
    upperCaseCondition,
    numbersCondition,
    symbolsCondition
  );
  passwordElement.innerText = password;
  //   copy password to clipboard
  navigator.clipboard.writeText(password);
  copyElement.innerText = "password copied to clipboard";
});

// generate password
function generatePassword(
  passwordLength,
  includeUpperCase,
  includeNumbers,
  includeSymbols,
  upperCaseCondition,
  numbersCondition,
  symbolsCondition
) {
  let password = LOWERCASE_LETTERS;
  let generatedPassword = [];
  let initialPasswordLength = passwordLength;
  if (includeUpperCase) {
    password = password.concat(UPPERCASE_LETTERS);
    initialPasswordLength -= upperCaseCondition;
    for (let i = 1; i <= upperCaseCondition; i++) {
      const randomPosition = Math.floor(
        Math.random() * UPPERCASE_LETTERS.length
      );
      generatedPassword.push(UPPERCASE_LETTERS[randomPosition]);
    }
  }
  if (includeNumbers) {
    password = password.concat(NUMBERS);
    initialPasswordLength -= numbersCondition;
    for (let i = 1; i <= numbersCondition; i++) {
      const randomPosition = Math.floor(Math.random() * NUMBERS.length);
      generatedPassword.push(NUMBERS[randomPosition]);
    }
  }
  if (includeSymbols) {
    password = password.concat(SYMBOLS);
    initialPasswordLength -= symbolsCondition;
    for (let i = 1; i <= symbolsCondition; i++) {
      const randomPosition = Math.floor(Math.random() * SYMBOLS.length);
      generatedPassword.push(SYMBOLS[randomPosition]);
    }
  }

  for (let i = 1; i <= initialPasswordLength; i++) {
    const randomPosition = Math.floor(Math.random() * password.length);
    generatedPassword.push(password[randomPosition]);
  }

  generatedPassword.sort(() => 0.5 - Math.random());
  return generatedPassword.join("");
}

// generate characters
function generateChars(min, max) {
  const chars = [];
  for (let i = min; i <= max; i++) {
    chars.push(String.fromCharCode(i));
  }
  return chars;
}
