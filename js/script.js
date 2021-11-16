{
  const playGame = function (playerInput){

    clearMessages ();

    const getMoveName = function (argMoveId){
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

    const displayResult = function (argComputerMove, argPlayerMove){
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

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);
    
    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove); 
}

document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1);});
document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2)});
document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3)});

}
