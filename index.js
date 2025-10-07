
generateBtn = document.getElementById("generateBtn");
passwordDisplay = document.getElementById("passDisplay");

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  const length = document.getElementById("passRange").value;
  const includeUppercase = document.getElementById("upperCase").checked;
  const includeLowercase = document.getElementById("lowerCase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked; 
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";                
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    let allChars = "";
    let password = "";
    
    if (includeUppercase){
        allChars += uppercaseChars;
        password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    } 
    if (includeLowercase){ 
        allChars += lowercaseChars;
        password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    }
    if (includeNumbers){
        allChars += numberChars;
        password += numberChars[Math.floor(Math.random() * numberChars.length)];
    } 
    if (includeSymbols){
        allChars += symbolChars;
        password += symbolChars[Math.floor(Math.random() * symbolChars.length)];
    }    

    if (allChars === "") {
        alert("Please select at least one character type!");
        return;
    }
    if(length<8 || length>20){
        alert("Password length should be between 8 and 20 characters.");
        return;
    }
    else {  
        for (let i = password.length; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }
    }
   
    passwordDisplay.value = password.split('').sort(() => 0.5 - Math.random()).join('');
   
}
const copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", ()=>{
    if(passwordDisplay.value){
        navigator.clipboard.writeText(passwordDisplay).then(() => {
            alert("Password copied to clipboard!"); 
        }).catch(err => {
            alert("Failed to copy to clipboard", err);
        });
    } else {
        alert("Nothing to copy");
    }   
});