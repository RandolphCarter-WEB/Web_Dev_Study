import { usePlusTwoNums } from "../hooks/usePlusTwoNums"

export default function CustomCompo01() {
    let [a, b] = [1, 10];
    let result = usePlusTwoNums(a, b);

    return (
        <div>
            <h1>Custom Compo01</h1>
            <p>Result: {result}</p>
        </div>
    );
}