import { Fragment } from "react";
import styled from "styled-components";

import {Text, Grid} from "./index";

const Input = (props) => {
  const {label, name, placeholder, onChange} = props;
  return (
    <Fragment>
      <Grid>
        <Text margin="0px">{label}</Text>
        <ElInput name={name} placeholder={placeholder} onChange={onChange} />
      </Grid>
    </Fragment>
  );
}

Input.defaultProps = {
  label: '텍스트',
  name: '이름',
  placeholder: '텍스트를 입력해주세요.',
  onChange: () => {}
}

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;