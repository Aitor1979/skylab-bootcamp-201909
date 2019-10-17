var searchButton = document.getElementsByClassName('duck-section__form form')[0];
var duckMainSection = document.getElementsByClassName('duck-section-multi')[0];
var duckMainArticle = document.getElementsByClassName('duck-section-single')[0];
var ul = document.createElement('ul');
ul.classList.add('ul-ducks')

searchButton.addEventListener('submit', searchButtonPush)


function searchButtonPush(e) {
    e.preventDefault()
    ul.innerText = " ";
    var query = e.target.inputname.value;
    var xhr = new XMLHttpRequest; //objecto que generamos para llamar al ajax/creamos la peticion
    xhr.open('GET', 'https://duckling-api.herokuapp.com/api/search?q=' + query); //hacemos una llamada (con un query= green)
    xhr.onreadystatechange = function () { //lo que llegue, la respuesta, le passamos una funcion que trabaja esa respuesta
        if (this.readyState == 4 && this.status == 201) {
            var ducks = JSON.parse(xhr.responseText); //parse nos pasa a array de objetos la respuesta, para poder tratarla con js

            printDucks(ducks)
        }
    };

    xhr.send(); //envia todo lo generado por xhr, y luego sigue con el codigo  (es asincrono)

}

function printDucks(ducks) {
    duckMainSection.append(ul);

    ducks.forEach(function (duck) {
        var li = document.createElement('li');
        var image = document.createElement('img');
        var title = document.createElement('h4');
        var price = document.createElement('span');
        li.classList.add('li__item');
        image.classList.add('li__img');
        title.classList.add('li__h4');
        price.classList.add('li__span');



        image.src = duck.imageUrl;
        title = duck.title;
        price = duck.price;
        ul.append(li);

        li.append(image, " ", title, " , price: ", price);

        li.addEventListener('click', function () {
            searchDuck(duck.id)

        });
    });
}

function searchDuck(duckId) {
    var xhr = new XMLHttpRequest; //objecto que generamos para llamar al ajax
    xhr.open('GET', 'http://duckling-api.herokuapp.com/api/ducks/' + duckId); //hacemos una llamada (con un query= green) endpont: url donde podemos solicitar 
    xhr.onreadystatechange = function () { //lo que llegue, la respuesta, le passamos una funcion que trabaja esa respuesta
        if (this.readyState == 4 && this.status == 201) {
            var duck = JSON.parse(xhr.responseText); //parse nos pasa a array de objetos la respuesta, para poder tratarla con js
            printDuck(duck);

        }
    };

    xhr.send();
}

function printDuck(duck) {
    duckMainArticle.innerText = " ";

    var image = document.createElement('img');
    var title = document.createElement('h2');
    var price = document.createElement('span');
    var description = document.createElement('h4');

    /* li.classList.add('li__item'); */
    image.classList.add('li__img');
    title.classList.add('li__h2');
    price.classList.add('li__span');
    description.classList.add('h4');

    image.src = duck.imageUrl;
    title = duck.title;
    price = duck.price;
    description = duck.description;
    
    duckMainArticle.append(image, " ", title, " , price: ", price, " ", description)


    /* var views = document.getElementsByClassName('view');

        views[0].classList.add('hide');
        views[1].classList.remove('hide'); */
}


