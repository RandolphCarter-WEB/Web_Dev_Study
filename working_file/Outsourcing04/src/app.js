import gameData from "./data/data.js"
import {QuestionUI, HangmanUI, keyboardBtn} from "./component/component.js";
import { isIncludes, isWin, isLose, showHint, canvas, animate } from "./event/event.js";

class App {
    constructor($target) {
        this.$target = $target;
        this.setElement();
        this.setEvent();
        canvas(stickman);
    }

    setElement() {
        this.random_question = Math.floor(Math.random() * 2);
        this.random_data = Math.floor(Math.random() * (this.random_question == 0 ? 6 : 4));

        this.MAX_HP = 10;
        this.randomData = [
            gameData[this.random_question].key,
            Array.from(gameData[this.random_question].data[this.random_data].categories),
            gameData[this.random_question].data[this.random_data].hint
        ]
        this.answer = [ ... new Set(this.randomData[1].filter(element => !(element == '-')))];

        //TODO:DELELETE SHOW ANSWER
        console.log(this.answer);

        this.userHP = 10;
        this.userAnswer = [];

        this.render();

        questionDiv.innerHTML = QuestionUI(this.randomData, this.userHP, this.userAnswer);
        gameUI.innerHTML = HangmanUI();
        keyUI.innerHTML = keyboardBtn();
    }

    render() {
        this.$target.innerHTML = this.template();
    }

    template() {
        return `
            <div id="gameTitle">
                <h1>HANGMAN</h1>
                <h3>VANILLA JAVASCRIPT HANGMAN GAME</h3>
                <p>Use the alphabet below to guess the word, or click hint to get a clue.</p>
            </div>

            <div id="questionDiv"></div>
            <div id="gameUI"></div>
            <div id="keyUI"></div>
            <div id="userUI">
                <button id="showHintBtn">Hint</button>
                <button id="resetBtn">Reset</button>
            </div>
        `;
    }

    setEvent() {
        const keyBtns = document.querySelectorAll("#keyUI button");

        keyBtns.forEach(Btn => {
            Btn.addEventListener("click", (e) => {
                if(isIncludes(this.userAnswer, e.target.dataset.key, this.answer) == 0) {
                    this.userHP--;
                    animate(stickman, this.userHP);
                }

                e.target.disabled = "true";
                questionDiv.innerHTML = QuestionUI(this.randomData, this.userHP, this.userAnswer);
                console.log(this.userHP);
                if(this.userHP == 0) {
                    userLife.innerHTML = isLose();
                } else {
                    userLife.innerHTML = isWin(this.answer, this.userAnswer) == 0
                        ? userLife.innerHTML
                        : isWin(this.answer, this.userAnswer);
                }
            });
        });

        document.querySelector("#showHintBtn").addEventListener("click", showHint);
        document.querySelector("#resetBtn").addEventListener("click", () => { location.reload(true); });
    }
}

const main = document.querySelector("#mainContainer");
new App(main);