import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchUsers from '../store/actions/fetchUsers';

export function Fetch() {


    const { users }: any = useSelector((state: any) => state.users)
    const dispatch = useDispatch();


    return (
        <React.Fragment>
            <div>
                <div>
                    <h3>Example of REDUX and hooks using FETCH</h3>
                    <button onClick={() => fetchUsers(dispatch)}>FETCH USERS</button>
                </div>
                <div>
                    {users.length === 0 ?
                        <p>THERE ARE NO USERS</p> :
                        users.map((user: any) =>
                            <p key={user.id}>{user.first_name} - {user.email}</p>
                        )}
                </div>
            </div>
        </React.Fragment>
    )
}