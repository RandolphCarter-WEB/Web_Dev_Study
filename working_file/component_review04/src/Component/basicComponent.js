import { LitElement, html, render } from `lit-element`;

export default class CustomLitElement extends LitElement {
    static get properties() {
        return {
            state: { type: Object }
        };
    }

    constructor() {
        super();
        this.setEvent();
    }

    template() { return `` }
    render() {
        const content = this.template();

        if(content instanceof HTMLElement) {
            render(content, this.shadowRoot);
        }
        else if (typeof content == `string`) {
            render(html`${content}`, this.shadowRoot);
        }
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.requestUpdate();
    }

    setEvent() { }
}