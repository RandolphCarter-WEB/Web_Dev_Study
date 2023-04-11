import CustomLitElement from "./basicComponent";

export default class OperatorButton extends CustomLitElement {
    static get properties() {
        return {
            state: { type: Array }
        };
    }

    template() {
        const items = ["%", "+/-", "x", "/", "+", "-", "="];

        return html`
            <div class="Operator-Div">
                ${items.map((element) => {
                    return html`<button type="button" value="${element}">${element}</button>`
                })}
            </div>`;
    }

    setState(newState) {
        this.state = [ ...this.state, newState ];
    }

    setEvent() {
        const ButtonList = this.shadowRoot.querySelectorAll("button");
        ButtonList.forEach(element => {
            element.addEventListener("click", () => {
                if(element.value != "=") {
                    const operator = element.value;
                    this.setState(operator);
                }
                else {
                    console.log("= Operator is Active!!");
                }
            });
        });
    }
}