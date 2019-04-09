// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


//mostrando fotos na tela com javascript
function mudaFoto(escolhefoto) {
    var img = '';
    var url = '/imagens/fotos/';
    img += '<img src=' + url + '' + escolhefoto + '.jpg>';
    document.getElementById('fotos').innerHTML = img;
}

function test(){
    
}