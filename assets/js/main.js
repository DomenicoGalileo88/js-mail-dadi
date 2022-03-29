//Email

//Chiedi all’utente la sua email
const lista_utenti = ['federico@gmail.com', 'alessio@gmail.com', 'fernanda@gmail.com', 'gabriella@gmail.com', 'alberto@hotmail.com', 'vincenzo@libero.it'];

const login = document.querySelector('.email');
const accedi_btn = document.querySelector('.accedi');

accedi_btn.addEventListener('click', function(){

let registrato;

    for (let i = 0; i < lista_utenti.length; i++) {
        const element = lista_utenti[i];

        //controlla che sia nella lista di chi può accedere
        if (login.value == element) {
            registrato = true;
        }
    }

const accesso = document.querySelector('.accesso');

    //stampa un messaggio appropriato sull’esito del controllo.
    if (registrato == true) {
        //console.log('Sei registrato');
        accesso.innerHTML += 'Sei registrato';
    } else {
        //console.log('non sei registratro');
        accesso.innerHTML += 'Non sei registrato';
    }
});



//gioco dei dadi

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
let random_number_gamer = Math.ceil(Math.random()* 6);
//console.log(random_number_gamer);
let gamer = document.querySelector('.gamer');
gamer.innerHTML += `: ${random_number_gamer}`;
let random_number_computer = Math.ceil(Math.random() * 6);
//console.log(random_number_computer);
let computer = document.querySelector('.computer');
computer.innerHTML += `: ${random_number_computer}`;

let risultato = document.querySelector('.risultato');

//Stabilire il vincitore, in base a chi fa il punteggio più alto
if (random_number_gamer > random_number_computer) {
    //console.log('hai vinto');
    risultato.innerHTML += 'HAI VINTO'
} else if (random_number_gamer == random_number_computer){
    //console.log('pareggio');
    risultato.innerHTML += 'PAREGGIO'
} else {
    //console.log('ha vinto il computer');
    risultato.innerHTML += 'NON HAI VINTO'
}


