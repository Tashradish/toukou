function afficher_image_suivante() {

    var image_actuelle = document.querySelector("#diaporama img.actuelle");
    image_actuelle.classList.remove("actuelle");
    var image_suivante;
    if (image_actuelle.nextElementSibling == null) {
        image_suivante = document.querySelector("#diaporama img:first-child");
    } else {
        image_suivante = image_actuelle.nextElementSibling;
    }
    image_suivante.classList.add("actuelle");
}

function afficher_image_précédente() {

    var image_actuelle = document.querySelector("#diaporama img.actuelle");
    image_actuelle.classList.remove("actuelle");
    var image_précédente;
    if (image_actuelle.previousElementSibling == null) {
        image_précédente = document.querySelector("#diaporama img:last-child");
    } else {
        image_précédente = image_actuelle.previousElementSibling
    }

    image_précédente.classList.add("actuelle");
}

var diaporama = document.querySelector("#diaporama");
var button1 = document.querySelector(".button1");
button1.onclick = afficher_image_suivante;


var diaporama = document.querySelector("#diaporama");
var button2 = document.querySelector(".button2");
button2.onclick = afficher_image_précédente;
