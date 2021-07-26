var bombe = [];

for ( var i = 0; i < 16; i++) {
    var numberRandom = generaNumero(1,100);
    if (bombe.indexOf(numberRandom) == -1){
        bombe.push(numberRandom);
    } else {
        i--;
    }
}
console.log("Lista Bombe");
console.log(bombe);

var listNumberPlayers = [];
var numberAllowed = 0;

for ( var i = 0; i < 6; i++) {
    var numberPlayer = parseInt(
        prompt("Inserisci un numero compreso da 1 a 100")
    );

    if(bombe.includes(numberPlayer)) {
        console.log('Sei Esploso!');
        break;
    } else if (numberPlayer < 1 || numberPlayer > 100) {
        console.log("hai inserito un numero vietato, hai perso!");
        break
    }else if (isNaN(numberPlayer)) {
        console.log('Non hai inserito un numero, hai perso!');
        break
    }  else {
        listNumberPlayers.push(numberPlayer);
        console.log("Hai inserito:" + numberPlayer);
        console.log("Ottimo,non sei esploso");
        numberAllowed++;
    }
}
console.log("hai fatto un punteggio di " + numberAllowed);

function generaNumero(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}
