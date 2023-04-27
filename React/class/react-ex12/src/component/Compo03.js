import styled from "styled-components";

function Compo03() {
    const StyledH1 = styled.h1`
        ${(props) => {
            switch(props.$mode) {
                case "red":
                    return `
                        color:red;
                    `;
                case "blue":
                    return `
                        color:blue;
                    `;
                case "green":
                    return `
                        color:green;
                    `;
                default:
                    return `
                        color:black;
                    `;
            }
        }}
    `;

    return (
        <div>
            <StyledH1 $mode="red">This is h1 Tag</StyledH1>
            <StyledH1 $mode="blue">This is h1 Tag</StyledH1>
            <StyledH1 $mode="green">This is h1 Tag</StyledH1>
            <StyledH1>This is h1 Tag</StyledH1>
        </div>
    );
}

export default Compo03;