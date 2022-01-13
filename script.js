//Name
const input = document.querySelector('input');
const log = document.getElementById('nameinput');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}

//Race
const race = document.getElementById('race');
const card = document.getElementById('character-card');
const raceValue = race.options[race.selectedIndex].value

race.addEventListener('input', changeBackground);

function changeBackground() {
    if (race.value == "astralelf") {
        card.style.backgroundImage = "url('img/astral-elf.jpg')"
    }
    else if (race.value == "autognome") {
        card.style.backgroundImage = "url('img/autognome.jpg')"
    }
    else if (race.value == "centaur") {
        card.style.backgroundImage = "url('img/centaur.jpg')"
    }
    else if (race.value == "dwarf") {
        card.style.backgroundImage = "url('img/dwarf.jpg')"
    }
    else if (race.value == "goblin") {
        card.style.backgroundImage = "url('img/goblin.jpg')"
    }
    else {
        card.style.backgroundImage = "url('img/placeholder_card-100.jpg')"
    }
}

//Gender
const gender = document.getElementById('gender');
const log2 = document.getElementById('gender-card');
const genderValue = gender.options[gender.selectedIndex].value

gender.addEventListener('input', changeGender);

var genderImage = document.createElement ('img')
        log2.appendChild(genderImage)
        genderImage.setAttribute ('src', "img/placeholder_gender.png")
        genderImage.setAttribute ('width', "50px")

function changeGender() {
    if (gender.value == "male") {
        genderImage.src = "img/male.png"
    }
    else if (gender.value == "female") {
        genderImage.src = "img/female.png"
    }
    else if (gender.value == "nonbinary") {
        genderImage.src = "img/nonbinary.png"
    }
    else {
        genderImage.src = "img/placeholder_gender.png"
    }
}    

//Class
const classe = document.getElementById('classe');
const log3 = document.getElementById('class-card');
const classValue = classe.options[classe.selectedIndex].value

classe.addEventListener('input', changeClass);

var classImage = document.createElement ('img')
        log3.appendChild(classImage)
        classImage.setAttribute ('src', "img/placeholder_class.png")
        classImage.setAttribute ('width', "50px")

function changeClass() {
    if (classe.value == "barbarian") {
        classImage.src = "img/barbarian.png"
    }
    else if (classe.value == "monk") {
        classImage.src = "img/monk.png"
    }
    else if (classe.value == "wizard") {
        classImage.src = "img/wizard.png"
    }
    else if (classe.value == "druid") {
        classImage.src = "img/druid.png"
    }
    else if (classe.value == "ranger") {
        classImage.src = "img/ranger.png"
    }
    else {
        classImage.src = "img/placeholder_class.png"
    }
}    
