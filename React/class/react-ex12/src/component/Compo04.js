import styled, {css} from "styled-components";

function Compo04() {
    const Total = css`padding: 5px; font-size: 2rem;`;

    const Input01 = styled.input.attrs({type:"text"})` background-color : cyan; ${Total}`;
    const Input02 = styled.input.attrs({type:"number"})` background-color : yellow; ${Total}`;
    const Input03 = styled.input.attrs({type:"search"})` background-color : lightgreen; ${Total}`;

    return (
        <div>
            <Input01 type="text"></Input01>
            <Input02 type="number"></Input02>
            <Input03 type="search"></Input03>
        </div>
    );
}

export default Compo04;