
//Chiedi all’utente la sua email
const lista_utenti = ['federico@gmail.com', 'alessio@gmail.com', 'fernanda@gmail.com', 'gabriella@gmail.com', 'alberto@hotmail.com', 'vincenzo@libero.it'];

const login = document.querySelector('.email');
const accedi_btn = document.querySelector('.accedi');

accedi_btn.addEventListener('click', function(){


    for (let i = 0; i < lista_utenti.length; i++) {
        const element = lista_utenti[i];

        //controlla che sia nella lista di chi può accedere
        if (login.value == element) {
            //stampa un messaggio appropriato sull’esito del controllo.
            console.log('sei registrato');
        } else if (login.value != element) {
            //stampa un messaggio appropriato sull’esito del controllo.
            console.log('non sei registrato');
        }
    }
});



//gioco dei dadi

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
/* let random_number_gamer = Math.ceil(Math.random()* 6);
console.log(random_number_gamer);
let random_number_computer = Math.ceil(Math.random() * 6);
console.log(random_number_computer);

//Stabilire il vincitore, in base a chi fa il punteggio più alto
if (random_number_gamer > random_number_computer) {
    console.log('hai vinto');
} else if (random_number_gamer == random_number_computer){
    console.log('pareggio');
} else {
    console.log('ha vinto il computer');
}


 */