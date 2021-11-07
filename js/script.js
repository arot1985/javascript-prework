
function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if (argMoveId == 2){
        return 'papier';
    } else if (argMoveId == 3){
        return 'nożyce';
    } else {
        return 'nieznany ruch';
    }
} 

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove){
    if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Ja wygrywam!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ja wygrywam!');
    }  else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Ja wygrywam!');
    }  else if (computerMove == playerMove){
        printMessage('Remis!');
   } else {
        printMessage('Ty wygrywasz!');
    }
}



/*function displayResult(argComputerMove, argPlayerMove){
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    }  else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Ja wygrywam!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ja wygrywam!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }  else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Ja wygrywam!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == computerMove && argPlayerMove == playerMove){
        printMessage('Remis!');
   } else {
        printMessage('Błąd! Nieznany ruch!');
    }
}*/
    displayResult(computerMove, playerMove);

