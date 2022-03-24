const passwordLengthRange = document.getElementById("passwordLengthRange");
const passwordLengthNumber = document.getElementById("passwordLengthNumber");
const includeUpperCaseElement = document.getElementById("includeUpperCase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");
const passwordElement = document.getElementById("password");
const copyElement = document.getElementById("copy");
const mainForm = document.getElementById("mainForm");

// sync password length
passwordLengthNumber.addEventListener("input", syncPasswordLentgh);
passwordLengthRange.addEventListener("input", syncPasswordLentgh);

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
  const password = generatePassword(
    passwordLength,
    includeUpperCase,
    includeNumbers,
    includeSymbols
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
  includeSymbols
) {
  let password = LOWERCASE_LETTERS;
  let generatedPassword = [];
  if (includeUpperCase) {
    password = password.concat(UPPERCASE_LETTERS);
  }
  if (includeNumbers) {
    password = password.concat(NUMBERS);
  }
  if (includeSymbols) {
    password = password.concat(SYMBOLS);
  }

  for (let i = 1; i <= passwordLength; i++) {
    const randomPosition = Math.floor(Math.random() * password.length);
    generatedPassword.push(password[randomPosition]);
  }

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
