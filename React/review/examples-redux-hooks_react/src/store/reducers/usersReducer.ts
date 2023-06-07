interface IinitalState {
    users: Array<any>
}
const initalState = {
    users: []
}

export function usersReducer(state: IinitalState = initalState, action: any) {

    switch (action.type) {
        case 'FETCH_USERS': {
            return {
                ...state,
                users: action.users
            }
        }
        default:
            return state
    }
}