import "./Compo01.css";

function Compo01() {
    const inlineStyle = {
        backgroundColor: "yellowgreen",
        color:"darkblue"
    }

    return (
        <div>
            <h1 style={{backgroundColor: "yellow", color:"brown"}}>[Inline Style]This is Compo01</h1>
            <h1 style={inlineStyle}>[Inline Style]This is Compo01</h1>
            <h1 className={"cls1"}>[Inline Style]This is Compo01</h1>
            <h1 className={"cls2"}>[Inline Style]This is Compo01</h1>
        </div>
    );
}

export default Compo01;