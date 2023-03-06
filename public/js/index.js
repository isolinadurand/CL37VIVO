window.onload = function() {

    let main = document.querySelector('main');
    let primerH2 = document.querySelector('h2');
    let a = document.querySelector('a');
    let losP = document.querySelectorAll('p');
    let body = document.querySelector('body');

    let resultado = prompt('Ingrese su nombre');

     if (resultado) {
        primerH2.innerText += resultado
    } else {
        primerH2.innerText += 'Invitado'
    }
    primerH2.style.textTransform = 'uppercase';
     a.style.color='#E51B3E'

     let fondo = window.confirm('¿Desea colocar un fondo de pantalla?')
     if (fondo){
        body.classList.add('fondo')
     }
 
     for ( let i = 0 ; i < losP.length ; i++ ) {
        if (i % 2 == 0){
            losP[i].classList.add('destacadoPar')
        } else {
            losP[i].classList.add('destacadoImpar')
        }
     }
main.style.display = 'block';

}