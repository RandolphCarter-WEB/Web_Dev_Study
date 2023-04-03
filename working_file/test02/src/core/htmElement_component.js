export default class HTMLElement {
    constructor () {
        super();
        this.setUp();
        this.setEvent();
        this.render();
    }

    setUp() { }
    template() { return `` }
    render() {
        this.$target.innerHTML = this.template();
    }

    setEvent() { }
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }
}