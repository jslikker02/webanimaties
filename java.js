console.log("hallo");
//Op weg geholpen door Joop
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
var schil1  = document.querySelector('.section1');
var schil2 = document.querySelector('.section2');
var body = document.querySelector('body');
var div = document.querySelector('div');
var muur = document.querySelector('header');
var schilderij = document.querySelector('.schilderij');
var schilderij1 = document.querySelector('.schilderij1');
var h2 = document.querySelector('h2');
var h3 = document.querySelector('h3');
var h4 = document.querySelector('h4');
var button = document.querySelector('.button1');
var button2 = document.querySelector('.button2');
var persoon = document.querySelector('#persoon1');
var flits = document.querySelector('.section3');





//var druk2 = document.querySelector('#boutje2');
//var druk2 = document.querySelector('#boutje2');

function begin(){
         muur.classList.add("doei");
    schilderij.classList.add("doei");
    schilderij1.classList.add("schilderij11");

}{
button.addEventListener('click',begin);
}

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

function begin2(){
 persoon.classList.add("lopen");
 flits.classList.add("section3aan")
}
{
button2.addEventListener('click',begin2);
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
        div.classList.add('plop');
       
    }
    e.preventDefault;
}{
document.addEventListener('keydown',voedsel);
}
function voederen() {
 appel.classList.add("hapnemen");    
 driehoek.classList.add("haphap");
 schil1.classList.add("haphap2");
 schil2.classList.add("haphap3");
    h1.innerHTML = "delicious";
}

appel.addEventListener("click", voederen);

//https://keycode.info/
//https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
function opschonen(e){
    var keycode = e.keyCode;
    if(keycode == 8){
        appel.classList.remove("hapnemen");    
 driehoek.classList.remove("haphap");
 schil1.classList.remove("haphap2");
 schil2.classList.remove("haphap3");
   appel.classList.remove('hallo');
   h3.classList.add('zichtbaar');
   h4.classList.add('zichtbaar');
        h1.innerHTML = "Search for more";
         h2.classList.add("h2");
    }
    e.preventDefault;
}
{
document.addEventListener('keydown',opschonen);
}
//function klikkie (){
//    body.classList.add("body2");
//      bol1.classList.add("verschijn11");
//    bol2.classList.add("verschijn21");
//    bol3.classList.add("verschijn31");
//    wolkje.classList.add("verschijn41");
//}
//body.addEventListener("click", klikkie);