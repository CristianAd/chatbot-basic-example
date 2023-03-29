const assistant= document.querySelector('.assistant')
const btnHelp= document.getElementById('help')
const client = document.querySelector(".client")


btnHelp.addEventListener("click", ()=>{
    assistant.innerHTML='Hola !! ¿En puedo ayudarte?'
    client.style.display = "block"
})

const chatArea = document.querySelector(".chatArea")
const send = document.getElementById("send")

send.addEventListener("click", ()=>{
    chatArea.style.display = "block"
   chatArea.innerHTML = "hola"
    
})
