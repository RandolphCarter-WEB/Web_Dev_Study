import CustomLitElement from "../component.js"

export default class CustomHeader extends CustomLitElement {
    static get properties() {
        return {
            menu: { type: Array }
        };
    }

    constructor() {
        super();
        this.menu = ['HOME', 'NEW', 'Popular', 'Trending', 'Categories'];
    }

    template() {
        return html`
            <div id="main_header_container">
                <img src="#" id="main_header_logo">
                <ul class="navi">
                    ${this.menu.map((item) => html`<li class="${item}">${item}</li>`)}
                </ul>
            </div>`;
    }

    setEvent() {
        this.$target.addEventListener("click", () => {
            console.log("Click Event Active!!");
        });
    }
}