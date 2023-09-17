const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOneEl = document.getElementById("password-one-el")
let passwordTwoEl = document.getElementById("password-two-el")
let lengthEl = document.getElementById("length-el")
document.getElementById("generate-el").addEventListener("click",generatePassword)

function generatePassword(){
    let message1 = ""
    let message2 = ""
    let passwordLength = lengthEl.value
    if(passwordLength>=7 && passwordLength<=15){
        for(let i=0; i<passwordLength; i++){
            message1+= characters[Math.floor(Math.random()*characters.length)]
            message2+= characters[Math.floor(Math.random()*characters.length)]
        }
        passwordOneEl.textContent=message1
        passwordTwoEl.textContent=message2
    }else{
        message1 = "Enter appropriate length of password"
        passwordOneEl.textContent=message1
        passwordTwoEl.textContent=message1
    }
}


