export const FETCH_USERS = "FETCH_USERS";

const fetchUsers = (dispatch: any) => {
    fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(res => dispatch({ type: FETCH_USERS, users: res.data }))
};
export default fetchUsers;