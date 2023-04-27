import styled, {css} from "styled-components";

function Compo02() {
    const H1Style = styled.h1`
        font-size: 1.5rem;
        text-align : center;
        color : purple;
    `;

    const CustomButton = css`
        width : 100px;
        height : 50px;
    `;

    const StyledBtn1 = styled.button`
        background : blue;
        color : white;

        &:hover {
            color : red;
        }

        ${CustomButton}
    `;


    return (
        <div>
            <H1Style>Hello Component02</H1Style>
            <StyledBtn1>Button</StyledBtn1>
        </div>
    );
}

export default Compo02;