# bigInt (JS-feature since 2020)
2^35-1 is het grootst mogelijke getal dat kan geprint worden als integer in javascript.

BigInt brengt daar verandering in en is net zoals een number, string, boolean, ... een primitief type.
Om een Bigint te kunnen gebruiken zijn er een paar manieren:

## de n methode
Je plakt een "n" achter het laatste cijfer van je string.
bv.
let bigInt = 998877665544332211n;
Op deze manier kan wordt de integer opgeslagen als bigInt.

## de BigInt() functie
Je maakt gebruik van de bigInt() functie
bv.
let bigIng = bigInt(9988776655443322);

Door middel van dit type kan je nu een variabele hebben die groter is dan 2^35-1. (Als je het niet gebruikt en je toch een groter getal zou willen initialiseren zal hij steeds gebruik maken van het grootst mogelijke getal, zijnde 2^35-1).