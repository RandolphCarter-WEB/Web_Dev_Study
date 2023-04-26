export function keyboardBtn() {
    const item = "abcdefghijklmnopqrstuvwxyz".split("");

    const render = () => {
        return `
            ${item.map(element => {
                return `<button id=${element+"Key"} data-key="${element}">${element}</button>`
            }).join("\n")}
        `;
    }

    return render();
}

export function QuestionUI([question, answer, hint], life, userAnswer) {
    const answerUI = answer.map(element => {
        if(userAnswer.includes(element)) {
            return element;
        } else {
            if(element.match(/^[a-zA-Z]+$/)) {
                return `_`;
            } else {
                return element;
            }
        }
    });

    const render = () => {
        return `
            <h3 id="questionTitle">${question}</h3>
            <p id="userAnswer">${answerUI.join("")}</p>
            <p id="userLife">You have ${life} lives!</p>
            <p id="hintTitle">Clue - <span id="hint">${hint}</span></p>
        `;
    }

    return render();
}

export function HangmanUI() {
    const render = () => {
        return `
            <canvas id="stickman"></canvas>
        `;
    }

    return render();
}

export default {keyboardBtn, QuestionUI, HangmanUI};