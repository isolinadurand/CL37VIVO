window.onload = function() {
    let body = document.querySelector('body');
    let h1 = document.querySelector('h1');
    let resultado = confirm('¿Desea modo oscuro?');

     if (resultado) {
        body.style.backgroundColor ='#7F7F7F'    
            body.classList.add('fondoMoviesList');
    } 
    h1.innerText = "LISTADO DE PELICULAS"
    h1.style.color = 'white';
    h1.style.backgroundColor = 'teal';
    h1.style.padding = '20px';

}