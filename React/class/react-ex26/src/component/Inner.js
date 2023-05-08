export default function Inner({num, setNum}) {
    return (
        <div>
            <p>Num : {num}</p>
            <button onClick={() => setNum(state => state+1)}>+1</button>
            <button onClick={() => setNum(state => state-1)}>-1</button>
        </div>
    )
}