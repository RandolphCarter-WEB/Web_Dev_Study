import styled from "styled-components";

function Compo06() {
    const Btn = styled.button`
        display : block;
        margin: 1rem;
        padding: 0.25rem 1rem;

        border: 2px solid blue;
        border-radius: 3px;

        font-size: 1rem;
    `;

    return (
        <div>
            <h1>Hello Component06</h1>
            <Btn as={"a"} href="https://naver.com">Button</Btn>
        </div>
    );
}

export default Compo06;