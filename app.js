const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()-_+{}[]?<>/";


const [lengthEl, lowercaseEl, uppercaseEl, numbersEl, symbolsEl, generateBtn, passwordEl] = ['#length', '#lowercase', '#uppercase' , '#numbers', '#symbols' , '#generatePassword', '#password'].map(id => document.querySelector(id));

const generate = () => {
    const length = lengthEl.value;
    let characters = "";
    let password = "";

    if (lowercaseEl.checked) {
        characters += lowercaseLetters;
    }

    if (uppercaseEl.checked){
        characters += uppercaseLetters;
    }

    if (numbersEl.checked){
        characters += numbers;
    }

    if (symbolsEl.checked){
        characters += symbols;
    }

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }


    passwordEl.value = password;
}

generateBtn.addEventListener('click', generate);

