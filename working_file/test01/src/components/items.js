import Component from "../core/Component.js"

export default class Items extends Component {
    setUp() {
        this.state = { items : [`items`, `items`] };
    }

    template () {
        const { items } = this.state;

        return `
            <ul>
                ${items.map((item, key) => `
                    <li>
                        ${item}
                        <button class="deleteBtn" data-index="${key}">Remove</button>
                    </li>`).join(``) }
            </ul>
            <button class="addBtn">Add</button>
        `
    }

    setEvent () {
        this.$target.addEventListener('click', ({ target }) => {
            const items = [ ...this.state.items ];

            if(target.classList.contains('addBtn')) {
                this.setState({ items: [ ...items, `item${items.length + 1}`]});
            }

            if(target.classList.contains('deleteBtn')) {
                items.splice(target.dataset.index, 1);
                this.setState({ items });
            }
        });
    }
}