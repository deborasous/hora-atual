function carregar() {
    var msg = document.querySelector(".msg")
    var img = document.querySelector(".image")
  
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        img.src = 'image/manha.png'
        document.body.style.background = '#809da5'
    }else if (hora >= 12 && hora < 18){
        img.src = 'image/tarde.jpg'
        document.body.style.background = '#ee8301'
    }else{
        img.src ='image/noite.png'
        document.body.style.background = '#59456d'
    }
}
