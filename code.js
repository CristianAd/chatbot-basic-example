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
    const assistant= document.querySelector('.assistant')
    const tA = document.getElementById('smsText').value ;
    assistant.innerHTML= tA
   
    
})
