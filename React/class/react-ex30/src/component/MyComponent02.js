export default function MyComponent02({age}) {
    return (
        <div>
            <button disabled={age < 19}>Join</button>
            {age < 19 ? 
                (<h3 style={{color: "red"}}>You Must be Over 19</h3>)
                : (<h3 style={{color: "blue"}}>You Can Join</h3>)}
        </div>
    );
}