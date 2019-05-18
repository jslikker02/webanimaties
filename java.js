var peop = document.querySelector('#gezicht');
var druk = document.querySelector('#boutje1');
var druk2 = document.querySelector('#boutje2');

function sickoMode() {
    druk.classList.add("snoepje2");
    druk2.classList.add("snoepje");
    peop.classList.add("gezichtkleur")
}

function sickoModeOff() {
    druk.classList.remove("snoepje2");
    druk2.classList.remove("snoepje");
    peop.classList.remove("gezichtkleur")
}

peop.addEventListener("mouseover", sickoMode);
peop.addEventListener("mouseout", sickoModeOff);