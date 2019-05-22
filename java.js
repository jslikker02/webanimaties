console.log("hallo");

var peop = document.querySelector('.st1');
var druk = document.querySelector('#boutje1');
var druk2 = document.querySelector('#boutje2');
var bol1 = document.querySelector('.st2');
var bol2 = document.querySelector('.st3');
var bol3 = document.querySelector('.st4');
var wolkje = document.querySelector('.st5');
var brein = document.querySelector('.st6');
var appel = document.querySelector('.appel');
var appelballon = document.querySelector('.appelballon');
var paragraph = document.querySelector('p');
var h1  = document.querySelector('h1');
var driehoek = document.querySelector('.st22');
var schil1  = document.querySelector('section');
var schil2 = document.querySelector('.section2');

//var druk2 = document.querySelector('#boutje2');
//var druk2 = document.querySelector('#boutje2');


function sickoMode() {
    druk.classList.add("snoepje2");
    druk2.classList.add("snoepje");
    peop.classList.add("gezichtkleur");
    bol1.classList.add("verschijn1");
    bol2.classList.add("verschijn2");
    bol3.classList.add("verschijn3");
    wolkje.classList.add("verschijn4");
    brein.classList.add("breinverschijn");
    appelballon.classList.add("denkappel");
    paragraph.classList.add("denkappel");
    h1.innerHTML = "hmmmmm...";
    

}

function sickoModeOff() {
    druk.classList.remove("snoepje2");
    druk2.classList.remove("snoepje");
    peop.classList.remove("gezichtkleur");
     bol1.classList.remove("verschijn1");
    bol2.classList.remove("verschijn2");
    bol3.classList.remove("verschijn3");
    wolkje.classList.remove("verschijn4");
    brein.classList.remove("breinverschijn");
    appelballon.classList.remove("denkappel");
    paragraph.classList.remove("denkappel");
    h1.innerHTML = "Yummeee";
}

peop.addEventListener("mouseover", sickoMode);
peop.addEventListener("mouseout", sickoModeOff);

function voedsel(e){
    var keycode = e.keyCode;
    if(keycode == 69){
        appel.classList.add('hallo');
       
    }
    e.preventDefault;
}{
document.addEventListener('keydown',voedsel);
}
function voederen() {
 driehoek.classList.add("haphap");
 schil1.classList.add("haphap2");
 schil2.classList.add("haphap3");
}

appel.addEventListener("click", voederen);