const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Initialisation de l'indice pour suivre la position actuelle dans le carrousel
let index = 0;

// Dossier contenant les images du carrousel
const imageFolder = "./assets/images/slideshow/";

// Sélection des flèches de navigation dans le HTML
const arrowLeft = document.querySelector('#banner .arrow_left');
const arrowRight = document.querySelector('#banner .arrow_right');

// Ajout d'un écouteur d'événement pour la flèche gauche
arrowLeft.addEventListener('click', () => {
    index--;
    // Vérification si l'indice est devenu négatif, le réinitialise à la fin du carrousel
    if (index < 0) index = slides.length - 1;
    // Affiche l'indice actuel dans la console
    console.log(`${index}`);
    // Mise à jour du point sélectionné et changement de la diapositive
    dotSelected(index);
    changeSlide(index);
});

// Ajout d'un écouteur d'événement pour la flèche droite
arrowRight.addEventListener('click', () => {
    index++;
    // Vérification si l'indice dépasse la fin du carrousel, le réinitialise au début
    if(index > slides.length - 1) index = 0;
    // Affiche l'indice actuel dans la console
    console.log(`${index}`);
    // Mise à jour du point sélectionné et changement de la diapositive
    dotSelected(index);
    changeSlide(index);
});

// Création des dots pour chaque diapositive
const dots = document.querySelector('#banner .dots');
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    // Ajout de la classe "dot" à chaque point
    dot.classList.add("dot");
    // Ajout du point à la liste de dots dans le HTML
    dots.append(dot);

    // Si le point correspond à l'indice actuel, le marquer comme sélectionné
    if (index === i) {
        dot.classList.add("dot_selected");
    }
}

// Fonction pour mettre à jour le point sélectionné
function dotSelected(index) {
    // Sélection de tous les points dans les dots
    const dot = document.querySelectorAll('.dots .dot');

    // Parcours de tous les points, désélectionne tous, puis sélectionne le point correspondant à l'indice actuel
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove("dot_selected");
        if (i === index) dot[i].classList.add("dot_selected");
    }
}

// Fonction pour changer l'image et le texte de la diapositive
function changeSlide(index) {
    // Sélection de l'élément contenant l'image et le texte de la diapositive
    const slideImage = document.querySelector('#banner .banner-img');
    const slideText = document.querySelector('#banner p');

    // Mise à jour de l'image et du texte en fonction de l'indice actuel
    slideImage.src = `${imageFolder}/${slides[index].image}`;
    slideText.innerHTML = `${slides[index].tagLine}`;
}