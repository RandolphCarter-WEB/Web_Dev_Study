function Comp01({val, setfunc}) {
    const setAddCount = () => setfunc(val => ++val);
    const setDisCount = () => setfunc(val => --val);

    return (
        <div>
            <h1>count : {val}</h1>
            <button onClick={setAddCount}>Click!!</button>
            <button onClick={setDisCount}>Click!!</button>
        </div>
    );
}

export default Comp01;