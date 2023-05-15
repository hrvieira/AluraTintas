function mostraTintas(e) {
  const tintas = document.querySelector("[data-lista]")
  const botao = document.querySelector("[data-button]")
  const visivel = window.getComputedStyle(tintas)
 
  if (visivel.display === "none"){ 
    tintas.style = "display:block"
    botao.innerText = "AluraTintas em estoque (ocultar) :"
  } else {
    tintas.style = "display:none"
     botao.innerText = "AluraTintas em estoque (exibir) :"
  }
}