import styled from "styled-components";

function Compo07() {
    const Link = ({className, children}) => (
        <a className={className}>
            {children}
        </a>
    );

    const StyledLink = styled(Link)`
        color: blue;
        font-weight: bold;
    `;

    return (
        <div>
            <h1>Hellow Component07</h1>
            <Link>Basic Link</Link>
            <StyledLink>Basic Link2</StyledLink>
        </div>
    );
}

export default Compo07;