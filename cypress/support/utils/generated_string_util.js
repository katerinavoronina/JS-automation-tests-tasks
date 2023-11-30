const ALPHABET_UPPER_CASE = "QWERTYUIOPASDFGHJKLZXCVBNM";
const ALPHABET_LOWER_CASE = "qwertyuiopasdfghjklzxcvbnm";
const NUMBERS = "0123456789";
const ALPHABET_CYRILLIC = "абвгдежзийклмнопрстуфхцчшщьыъэюя";
let ALPHABET = [ALPHABET_UPPER_CASE, ALPHABET_LOWER_CASE, ALPHABET_CYRILLIC, NUMBERS];

export function getRandomLowerCaseString() {
    let email = '';
    const stringLength = 8;
    while(email.length < stringLength) {
        email += getRandomLetterFromString(ALPHABET_LOWER_CASE);
    }
    return email;
}

export function getPassword(email, passwordLength = 10) {
    let password = '';
    ALPHABET.push(email);
    for(let index = 0; index < passwordLength; index++) {
        password += getRandomLetterFromString(ALPHABET[index % ALPHABET.length]);
    }
    ALPHABET.pop();
    return password;
}

export function getDomain() {
    const domains = [".org",".co.uk",".net",".gov",".de",".fr",".nl",".com",".be",".jpg"];
    let index = Math.floor(Math.random() * domains.length);
    return domains[index];
}

function getRandomLetterFromString(initialString) {
    return initialString.charAt(Math.floor(Math.random() * initialString.length));
}