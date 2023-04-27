export function isIncludes(key, self) {
    if(self.answer.includes(key)) {
        self.userAnswer.push(key);
        return 1;
    } else {
        self.userAnswer.push(key);
        return 0;
    }
}

export function isLose() {
    DefaultBtn();
    return `YOU LOSE!!`;
}

export function isWin(self) {
    const isAllElementsInAnswer = self.answer.every(elem => self.userAnswer.includes(elem));

    if(isAllElementsInAnswer) {
        DefaultBtn();
        return `YOU WIN!!`;
    } else {
        return 0;
    }
}

export function showHint($target) {
    $target.style.opacity = $target.style.opacity == 0 ? 1 : 1;
}

function DefaultBtn() {
    const buttons = document.querySelectorAll("button:not(#resetBtn)");
    buttons.forEach(button => {
        button.disabled = true;
    });
}

const drawArray = [
    [60, 70, 100, 100],
    [60, 70, 20, 100],
    [60, 46, 100, 50],
    [60, 46, 20, 50],
    [60, 36, 60, 70],
    "head",
    [60, 5, 60, 15],
    [0, 5, 70, 5],
    [10, 0, 10, 600],
    [0, 150, 150, 150]
];

export function animate(target, hp) {
    const item = drawArray[hp];
    const $target = target.getContext("2d");

    item === "head" ? head($target) : Draw($target, item);
}

export function canvas($target) {
    const context = $target.getContext("2d");

    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
}

function Draw($target, [$pathFromx, $pathFromy, $pathTox, $pathToy]) {
    $target.moveTo($pathFromx, $pathFromy);
    $target.lineTo($pathTox, $pathToy);
    $target.stroke();
}

function head($target) {
    $target.beginPath();
    $target.arc(60, 25, 10, 0, Math.PI * 2, true);
    $target.stroke();
}