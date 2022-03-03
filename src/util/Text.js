import styled from "styled-components";

const Text = (props) => {
    const { bold, color, size, children } = props;
    const styles = {bold: bold, color: color, size: size, children: children};
    return (
        <P {...styles}>
            {children}
        </P>
    )
}

Text.defaultProps = {
    children: null,
    bold: false,
    color: 'grey',
    size: '14px',
}

const P = styled.p`
    color: ${(props) => props.color};
    size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold? "600" : "400")};
`

export default Text;