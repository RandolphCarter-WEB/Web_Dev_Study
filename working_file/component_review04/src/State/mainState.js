export default class MathematicsState {
    static get properties() {
        return {
            state: { type: Object }
        }
    }

    constructor() {
        this.state = { };
        this.Strategy = null;
    }

    setStrategy(strategy) {
        this.Strategy = strategy;
    }
    setState(newState) {
        this.state = { ...this.state, ...newState };
    }

    excuteStrategy() {
        if(this.strategy) {
            this.strategy.excute(this.state);
        }
    }

    render() {
        
    }
}