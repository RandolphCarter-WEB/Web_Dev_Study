import Item from "./component/Item.js"

class app {
    constructor() {
        const $app = document.querySelector("#app");
        new Item($app);
    }
}

new app();