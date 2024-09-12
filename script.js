function carregar(){
    var msg = window.document.getElementById('msg');
    var imagem = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    //var hora = 9
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //BOM DIA
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
        msg2.innerHTML = 'Bom dia!'
    } else if(hora >= 12 && hora <18){
        //BOA TARDE
        imagem.src = 'fototarde.png'
        document.body.style.background = '#2795fc'
        msg2.innerHTML = 'Boa tarde!'
    } else {
        // BOA NOITE
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#010e1a'
        msg2.innerHTML = 'Boa noite!'
    } 
}