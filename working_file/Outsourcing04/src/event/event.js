export function isIncludes(input, key, answer) {
    if(answer.includes(key)) {
        input.push(key);
        return 1;
    } else {
        input.push(key);
        return 0;
    }
}

export function isLose() {
    DefaultBtn();
    return `YOU LOSE!!`;
}

export function isWin(answer, userAnswer) {
    if(answer.sort().toString() == userAnswer.sort().toString   ()) {
        DefaultBtn();
        return `YOU WIN!!`;
    } else {
        return 0;
    }
}

export function showHint() {
    hint.style.display == "none" ? "inline" : null;
}

function DefaultBtn() {
    const buttons = document.getElementByIdAll("button:not(#resetBtn)");
    buttons.forEach(button => {
        button.disabled = true;
    });
}

export function animate(target, hp) {
    drawArray[hp](target);
}

export function canvas($target) {
    const context = $target.getContext("2d");

    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
}

function Draw($target, $pathFromx, $pathFromy, $pathTox, $pathToy) {
    const context = $target.getContext("2d");

    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
}

function head($target) {
    const context = $target.getContext("2d");

    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
}

const drawArray = [
    (target) => Draw(target,60, 70, 100, 100),
    (target) => Draw(target,60, 70, 20, 100),
    (target) => Draw(target,60, 46, 100, 50),
    (target) => Draw(target,60, 46, 20, 50),
    (target) => Draw(target,60, 36, 60, 70),
    (target) => head(target),
    (target) => Draw(target,60, 5, 60, 15),
    (target) => Draw(target,0, 5, 70, 5),
    (target) => Draw(target,10, 0, 10, 600),
    (target) => Draw(target,0, 150, 150, 150)
]

export default { isIncludes, isWin, isLose, showHint, canvas, animate };