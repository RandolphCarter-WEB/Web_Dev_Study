function Compo01({text01:ReactText, text02:defaultData}) {
    return (
        <h1>Hello {ReactText}, {defaultData}</h1>
    )
}

Compo01.defaultProps = {
    text02 : "JavaScript"
}

export default Compo01;