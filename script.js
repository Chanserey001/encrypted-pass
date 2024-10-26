function encryptWord() {
    const inputWord = document.getElementById("inputWord").value;
    const encryptedWord = btoa(inputWord); // Base64 encoding as a simple "encryption"
    const numericRepresentation = convertToNumeric(encryptedWord);
    
    document.getElementById("encryptedOutput").textContent = `Encrypted Word: ${encryptedWord}`;
    document.getElementById("numericOutput").textContent = `Numeric Representation: ${numericRepresentation}`;
}

function convertToNumeric(encryptedWord) {
    let numericRepresentation = '';
    for (let i = 0; i < encryptedWord.length; i++) {
        numericRepresentation += (encryptedWord.charCodeAt(i) % 10).toString(); // Convert to a single digit
    }
    return numericRepresentation;

    
}


function convertToPassword() {
    const inputEncrypted = document.getElementById("inputEncrypted").value;

    // Decode the Base64 encrypted string
    const decodedString = atob(inputEncrypted); // Base64 decode

    // Create a password format (you can customize this as needed)
    const generatedPassword = `password_${decodedString}`;

    document.getElementById("passwordOutput").textContent = `Generated Password: ${generatedPassword}`;
}


 function setTitle() {
    const titleElement = document.createElement('h1');
    titleElement.textContent = 'Serey Converter';
    document.body.prepend(titleElement); // Add it to the beginning of the body
}
