import { useDispatch, useSelector } from "react-redux";
import { changeMyName } from "../store/store";

export default function Profile() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Profile</h1>
            <h3>My name : {state.profile.name}</h3>
            <h3>My age : {state.profile.age}</h3>
            <br />
            <button onClick={() => dispatch(changeMyName("OST %OH StoneCat"))}>change Name</button>
        </div>
    )
}