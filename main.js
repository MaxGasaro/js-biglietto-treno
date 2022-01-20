const prezzoKm = 0.21;

let distance = prompt('Quanti kilometri vorresti percorrere?');
let eta = prompt('Quanti anni hai?');

let prezzoTot = prezzoKm * distance;
let prezzoScontato;
let sconto;

if (eta > 65) {
    sconto = (40 / 100) * prezzoTot;
    prezzoScontato = prezzoTot - sconto;
    document.getElementById('sconto').innerHTML = 'Essendo cliente senior hai diritto ad uno sconto del 40%!';
} else if (eta < 18) {
    sconto = (20 / 100) * prezzoTot;
    prezzoScontato = prezzoTot - sconto;
    document.getElementById('sconto').innerHTML = 'Essendo cliente young hai diritto ad uno sconto del 20%!';
} else {
    prezzoScontato = prezzoTot;
}    


document.getElementById('price').innerHTML = 'Il prezzo del biglietto è: € ' + prezzoScontato.toFixed(2);

