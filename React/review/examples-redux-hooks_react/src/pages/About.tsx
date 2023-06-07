import * as React from 'react';
import { useLocation, useHistory } from 'react-router-dom';



export function About() {
    const location: any = useLocation()
    const history = useHistory()

    const goBackHandle = () => {
        history.goBack()
    }

    return (
        <React.Fragment>
            <div>About</div>
            <div>Location = {location.pathname}</div>
            <div>From = {location.state.from}</div>
            <button onClick={goBackHandle}> Go Back  </button>

        </React.Fragment>
    )
}