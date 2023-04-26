import gameData from "./data/data.js";

class App {
    constructor() {
        this.render();
    }

    render() { this.innerHTML = this.template(); }

    setDefault(key, {answer, hint}) {
        this.Question = key;
        this.Answer = answer;
        this.Hint = hint;

        this.HP = 10;

        this.render();
    }

    template() {
        const buttons = [];

        for (let i = 97; i <= 122; i++) {
            const letter = String.fromCharCode(i);
            buttons.push(`<button>${letter}</button>`);
        }

        return `
            <div id="gameTitle">
                <h2>HANGMAN</h2>
                <h5>VANILLA JAVASCRIPT HANGMAN GAME</h5>
                <p>Use the alphabet below to guess the word, or click hint to get a clue.</p>
            </div>

            <div id="keyBoard">
                ${buttons.join('\n')}
            </div>

            <div id="gameUI">
                <p id="question">${this.Question}</p>
                <p id="answer">${#}</p>
                <p id="userHP">You Have ${this.HP} lives!</p>
            </div>

            <div id="hangManUI"><div>
            <button 
        `;
    }
}

const randomCategory = gameData[Math.floor(Math.random() * 2)];
const randomData = randomCategory.data[Math.floor(Math.random() * randomCategory.data.length)];

const app = new App;
app.setDefault(randomCategory.key, randomData);