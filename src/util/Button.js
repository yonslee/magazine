import styled from "styled-components";

const Button = ({text, onClick}) => {

  return (
    <ElButton onClick={onClick}>
      {text}
    </ElButton>
  );
}

Button.defaultProps = {
  text: "텍스트",
  onClick: () => {}
}

const ElButton = styled.button`
  width: 80%;
  background-color: #212121;
  color: #ffffff;
  padding: 12px 0px;
  margin: 10px;
  box-sizing: border-box;
  border: none;
`;

export default Button;