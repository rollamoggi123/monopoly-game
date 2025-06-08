const diceImages = [
    { img: "assets/dice/1cecay.png", word: "cecay（一）" },
    { img: "assets/dice/2tosa.png", word: "tosa（二）" },
    { img: "assets/dice/3tolo.png", word: "tolo（三）" },
    { img: "assets/dice/4sepat.png", word: "sepat（四）" },
    { img: "assets/dice/5lima.png", word: "lima（五）" },
    { img: "assets/dice/6enem.png", word: "enem（六）" }
];

function rollDice() {
    const roll = Math.floor(Math.random() * 6);
    const dice = document.getElementById("dice");
    const result = document.getElementById("result");
    dice.src = diceImages[roll].img;
    result.textContent = `🎉 你擲出了：${diceImages[roll].word}`;
}
