
interface IinitalState {
    counter: number
}
const initalState = {
    counter: 0
}

export function rootReducer(state: IinitalState = initalState, action: any) {
    switch (action.type) {
        case 'INCREMENT': {
            return { ...state, counter: state.counter + 1 }
        }
        case 'DECREMENT': {
            return { ...state, counter: state.counter - 1 }
        }
        default:
            return state
    }
}