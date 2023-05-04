import { useSelector } from "react-redux"

export default function Inner() {
    const state = useSelector(state => state);

    return (
        <div>
            <h1>Inner Component</h1>
            <h3>State Num : {state.num}</h3>
        </div>
    )
}