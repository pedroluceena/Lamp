const turnOn = document.getElementById ("turnOn");
const turnOff = document.getElementById ("turnOff");
const lamp = document.getElementById ("lamp");


function islampbroken () {
    return lamp.src.indexOf ("break") > -1
}

function lampOn () {
    if ( !islampbroken()) {
    lamp.src = "./img/on.jpg"
    }
}

function lampOff () {
    if ( !islampbroken()) {
    lamp.src = "./img/off.jpg"
    }
}

function lampbroken () {
    lamp.src = "./img/break.jpg"
}


turnOn.addEventListener ("click", lampOn);
turnOff.addEventListener("click", lampOff);

lamp.addEventListener ("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);

lamp.addEventListener("dblclick", lampbroken)