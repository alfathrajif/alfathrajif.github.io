var question = true;

while (question) {

    // Capture Player Choice
    var player = prompt("Pilih : batu, gunting, kertas");

    // Capture Computer Choice
    var computer = Math.round(Math.random() * 10);

    console.log(computer);

   if (computer < 3 ) {
       computer = 'batu';
   } else if (computer >= 3 && computer < 6) {
        computer = 'gunting';
   } else {
       computer = 'kertas';
   }

    // Define Rules
    var result = '';

    if (player == computer) {
        result = 'SERI!';
    } else if (player == 'batu') {
        result = ( computer == 'gunting') ? 'MENANG!' : 'KALAH!';
    } else if (player == 'gunting') {
        result = ( computer == 'kertas') ? 'MENANG!' : 'KALAH!';
    } else if (player == 'kertas') {
        result = ( computer == 'batu') ? 'MENANG!' : 'KALAH!';
    } else {
        result = 'Masukkan pilihan yang benar!!';
    }

    // Show Results
    alert ('kamu memilih : ' + player +' dan komputer : ' + computer + ' jadi Kamu : ' + result);

    question = confirm('lagi?');
}

alert ('Terima Kasih sudah bermain');