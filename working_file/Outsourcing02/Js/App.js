import CustomHeader from "../component/HeaderComponent.js"

customElements.define("headerNav", CustomHeader);

const mainContainer = document.querySelector("#mainContainer");
const headerNav = document.createElement("headerNav");

mainContainer.append(headerNav);