function carregar() {
    var msg = document.querySelector(".msg")
    var img = document.querySelector(".image")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.setAttribute = 'image/manha.png'   
        }    
}
