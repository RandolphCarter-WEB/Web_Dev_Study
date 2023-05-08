import { useDispatch, useSelector } from'react-redux';
import { setAge, setName } from "../store/profileStore";
import { useState } from "react";

export default function Profile() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const [name, setStateName] = useState(state.profile.name);
    const [age, setStateAge] = useState(state.profile.age);

    const changeName = (e) => {
        setStateName(e.target.value);
    }

    const changeAge = (e) => {
        setStateAge(e.target.value);
    }

    const Submit = () => {
        dispatch(setName(name));
        dispatch(setAge(age));
    }

    return (
        <div>
            <h1>Profile Component</h1>
            <ul>
                <input type="text" id="userName" value={name} onChange={changeName} />
                <br />
                <input type="number" id="userAge" value={age} onChange={changeAge} />
                <p>Your Name is {name} and your age is {age}</p>
                <button onClick={Submit}>Submit</button>
            </ul>
        </div>
    )
}