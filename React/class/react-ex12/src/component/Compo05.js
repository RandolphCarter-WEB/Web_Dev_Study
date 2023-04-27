import styled from "styled-components";

function Compo05() {
    const Btn = styled.button`
        margin: 1rem;
        padding : 0.25rem 1rem;
        border : 2px solid blue;
        border-radius : 3px;
        font-size: 1rem;
        color : blue;
    `;

    const AbsBtn = styled(Btn)`
        color : red;
        border-color : red;
    `;

    return (
        <div>
            <Btn>Button!</Btn>
            <AbsBtn>Button!</AbsBtn>
        </div>
    );
}

export default Compo05;