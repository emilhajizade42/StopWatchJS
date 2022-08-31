let btnAll = document.querySelectorAll(".game-square");
let playerNumber = document.querySelector("#game-heading");
let restartBtn = document.querySelector("#restart-button");

btnAll.forEach(btn=> {
  btn.addEventListener("click", function () {
    if (playerNumber.innerHTML == "Players 1's Turn") {
      btn.innerHTML = "X";
      playerNumber.innerHTML = "Players 2's Turn";
      btn.disabled = true;
    } else {
      btn.innerHTML = "O";
      playerNumber.innerHTML = "Players 1's Turn";
      btn.disabled = true;
    }
    if (
      btnAll[0].innerHTML == btnAll[1].innerHTML &&
      btnAll[1].innerHTML == btnAll[2].innerHTML &&
      btnAll[1].innerHTML !== ""
    ) {
      this.innerHTML == "X"
        ? (playerNumber.innerHTML = "Player 1 Won!")
        : (playerNumber.innerHTML = "Player 2 Won!");
      restartBtnBlock();
    }
    if (
      btnAll[3].innerHTML == btnAll[4].innerHTML &&
      btnAll[4].innerHTML == btnAll[5].innerHTML &&
      btnAll[4].innerHTML !== ""
    ) {
      this.innerHTML == "X"
        ? (playerNumber.innerHTML = "Player 1 Won!")
        : (playerNumber.innerHTML = "Player 2 Won!");
      restartBtnBlock();
    }
    if (
      btnAll[6].innerHTML == btnAll[7].innerHTML &&
      btnAll[7].innerHTML == btnAll[8].innerHTML &&
      btnAll[7].innerHTML !== ""
    ) {
      this.innerHTML == "X"
        ? (playerNumber.innerHTML = "Player 1 Won!")
        : (playerNumber.innerHTML = "Player 2 Won!");
      restartBtnBlock();
    }
    if (
      btnAll[0].innerHTML == btnAll[3].innerHTML &&
      btnAll[3].innerHTML == btnAll[6].innerHTML &&
      btnAll[3].innerHTML !== ""
    ) {
      this.innerHTML == "X"
        ? (playerNumber.innerHTML = "Player 1 Won!")
        : (playerNumber.innerHTML = "Player 2 Won!");
      restartBtnBlock();
    }
    if (
      btnAll[1].innerHTML == btnAll[4].innerHTML &&
      btnAll[4].innerHTML == btnAll[7].innerHTML &&
      btnAll[4].innerHTML !== ""
    ) {
      this.innerHTML == "X"
        ? (playerNumber.innerHTML = "Player 1 Won!")
        : (playerNumber.innerHTML = "Player 2 Won!");
      restartBtnBlock();
    }
    if (
      btnAll[2].innerHTML == btnAll[5].innerHTML &&
      btnAll[5].innerHTML == btnAll[8].innerHTML &&
      btnAll[5].innerHTML !== ""
    ) {
      this.innerHTML == "X"
        ? (playerNumber.innerHTML = "Player 1 Won!")
        : (playerNumber.innerHTML = "Player 2 Won!");
      restartBtnBlock();
    }
    if (
      btnAll[0].innerHTML == btnAll[4].innerHTML &&
      btnAll[4].innerHTML == btnAll[8].innerHTML &&
      btnAll[4].innerHTML !== ""
    ) {
      this.innerHTML == "X"
        ? (playerNumber.innerHTML = "Player 1 Won!")
        : (playerNumber.innerHTML = "Player 2 Won!");
      restartBtnBlock();
    }
    if (
      btnAll[2].innerHTML == btnAll[4].innerHTML &&
      btnAll[4].innerHTML == btnAll[6].innerHTML &&
      btnAll[4].innerHTML !== ""
    ) {
      this.innerHTML == "X"
        ? (playerNumber.innerHTML = "Player 1 Won!")
        : (playerNumber.innerHTML = "Player 2 Won!");
      restartBtnBlock();
    }
    if (Array.from(btnAll).every(btn => btn.innerHTML.trim() != "")) {
      playerNumber.innerHTML = "Tie Game!";
      btn.disabled = true;
      restartBtn.style.display = "block";
    }
    function restartBtnBlock() {
      restartBtn.style.display = "block";
      btnAll.forEach(btn => btn.disabled = true)
    }
  });
})

restartBtn.addEventListener("click", function () {
  btnAll.forEach(btn =>{
    btn.innerHTML = "";
    btn.disabled = false;
  })
  playerNumber.innerHTML = "Players 1's Turn";
  restartBtn.style.display = "none";
});