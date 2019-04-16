

//Map Api
function inicializar() {

    var coordenadas = { lat: -29.993487, lng: -51.071185 };

    var mapa = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 15,
        center: coordenadas
    });

    var marker = new google.maps.Marker({
        position: coordenadas,
        map: mapa,
        title: 'ShowRoomCasas'
    });
}




function getValues(id) {
    let value = document.getElementById(id);
    console.log(value)
    switch (id) {
        case 'projetos':
            targetFromTop = value.offsetTop;
            window.scroll({
                top: targetFromTop,
                behavior: 'smooth'
            })
            break;

        case 'sobre':
            targetFromTop = value.offsetTop;
            window.scroll({
                top: targetFromTop,
                behavior: 'smooth'
            })
            break;

        case 'contato':
            targetFromTop = value.offsetTop;
            window.scroll({
                top: targetFromTop,
                behavior: 'smooth'
            })
            break;

        case 'home':
            targetFromTop = value.offsetTop;
            window.scroll({
                top: targetFromTop,
                behavior: 'smooth'
            })
            break;
        case 'mapa':
            targetFromTop = value.offsetTop;
            window.scroll({
                top: targetFromTop,
                behavior: 'smooth'
            })

            break;

        case 'waze':
            open('https://waze.com/ul');

            break;
    }




}


const valueScreen = document.body.offsetWidth;
if (valueScreen < 1200) {
    window.addEventListener('load', () => {
        let smallscreen = document.querySelector('.keyclass');
        let bigscreen = document.getElementById('bigscreen');

        smallscreen.classList.remove("keyclass"); //remove the class from div
        bigscreen.style.display = 'none'; //makes the display disappear
    })
}




