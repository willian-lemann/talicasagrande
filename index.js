

//Map Api
function inicializar() {

    let coordenadas = { lat: -30.096687, lng: -51.125867 };
    
    let mapa = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 15,
        center: coordenadas
    });

    let marker = new google.maps.Marker({
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

        case 'facebook':
            open('https://www.facebook.com/Showroomcasas/');
            break;

        case 'whatsapp':
            const space = '%20';
            const message = 'Olá,' + space + 'preciso' + space + 'de' + space + 'uma' + space + 'informação!';
            open('https://api.whatsapp.com/send?phone=5551993562223&text=' + message);
            break;

        case 'telefone':
            open('tel: 5133195251');
            break;

        case 'instagram':
            const scren = document.body.offsetWidth;

            let contentClass = document.getElementById('tag');
            contentClass.style.display = "block";
            let contentClass2 = document.getElementById('tag2');
            contentClass2.style.display = "block";
            document.body.style.backgroundColor = 'gray'

            //quando nao esta mobile
            if (scren > 1200) {
                contentClass.style.left = '530px';
                contentClass2.style.left = '530px';
            }
            break;
    }

    //
    const screen = document.body.offsetWidth;
    if (screen > 1200) {
        let sair = document.getElementById('sair');
        let tag = document.getElementById('tag');
        sair.addEventListener('click', function () {
            tag.style.display = 'none';
            document.body.style.backgroundColor = '';
        })
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






