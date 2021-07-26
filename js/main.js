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


