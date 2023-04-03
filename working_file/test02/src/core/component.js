export default class Component {
    $target;
    state;

    constructor ($target) {
        this.$target = $target;
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