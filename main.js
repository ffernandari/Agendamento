// 1° passo - Captura o formulario no HTML

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function (event) {
    event.preventDefault()

    // Capturar os valores digitados pelo usuário

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const publicidade = document.getElementById("publicidade").value
    const mensagem = document.getElementById("mensagem").value

    if(telefone.trim() === ""){
        alert("Digite seu nome")
        return
    }

    const textoWhatsapp = `
    Olá! Gostaria de realizar uma publicidade.
    Nome:${nome}
    Email:${email}
    Telefone:${telefone}
    Publicidade:${publicidade}
    Observações:${mensagem}
    
    `
    // Codificar a mensagem para ser utilizada na URL

    const mensagemCodificada = encodeURIComponent(textoWhatsapp)

    const numeroWhatsapp = "5511976040475"

    // Monta o link whatsapp

    const link = "https://wa.me/" + numeroWhatsapp + "?text=" + mensagemCodificada

    window.location.href = link 

})