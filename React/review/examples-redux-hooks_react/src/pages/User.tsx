import * as React from 'react';
import { useParams } from 'react-router-dom';


export function User({ match }: any) {
    const { firstname, lastname } = useParams()
    return (
        <React.Fragment>
            <div>
                <div><b>User :</b> {firstname}  {lastname} </div>
            </div>
        </React.Fragment>
    )
}