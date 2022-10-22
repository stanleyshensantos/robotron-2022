


const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    })
    
})


function manipulaDados(operacao){
   const peca =document.querySelector("peca")
    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = parseInt(peca.value) + 1
    }
}
