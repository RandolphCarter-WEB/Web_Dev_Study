export default class CustomNavHeader extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"}).append(temp.content.cloneNode(true));
    }
}

customElements.define("custom-header", CustomNavHeader);