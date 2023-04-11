import CustomLitElement from "./basicComponent";

export default class NumPadButton extends CustomLitElement {
    static get properties() {
        return {
            state: { type: String }
        };
    }

    template() {
        const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "00", "."];

        return html`
            <div class="NumberPad-Div">
                ${items.map((element) => {
                    return html`<button type="button" value="${element}">${element}</button>`
                })}
            </div>`;
    }

    setState(newState) {
        this.state = this.state + newState;
    }

    setEvent() {
        const ButtonList = this.shadowRoot.querySelectorAll("button");
        ButtonList.forEach(element => {
            element.addEventListener("click", () => {
                const number = element.value;
                this.setState(number);
            });
        });
    }
}