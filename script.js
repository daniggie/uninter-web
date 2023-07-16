const aboutMe = $('#aboutMe');
const formation = $('#formation');
const portifolio = $('#portifolio');
const contact = $('#contact');

// Definir a div "aboutMe" como visível
aboutMe.show();

// Ocultar as outras divs
formation.hide();
portifolio.hide();
contact.hide();

function setContainer(id) {
    aboutMe.hide();
    formation.hide();
    portifolio.hide();
    contact.hide();

    $(id).show();
}