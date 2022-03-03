import { useRef } from "react";
import { Button } from "../util";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkEmail } from "../shared/CheckInput";

import styled from "styled-components";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const pwRef = useRef();

  const onLogin = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const pw = pwRef.current.value;

    if (!checkEmail(email).res) {
      emailRef.current.focus();
      alert(checkEmail(email).msg);
      return;
    }

    if (pw === "") {
      pwRef.current.focus();
      alert('비밀번호를 입력해주세요');
    }

    const loginData = {
      email: email,
      password: pw,
    };

    dispatch(loginData);
    navigate('/', { replace: true });
  };

  return (
    <Form onSubmit={onLogin}>
      <Box>
        <Label htmlFor="이메일">이메일</Label>
        <Input ref={emailRef} type="text" placeholder="이메일을 입력하세요" />
      </Box>
      <Box>
        <Label htmlFor="비밀번호">비밀번호</Label>
        <Input ref={pwRef} type="text" placeholder="비밀번호를 입력하세요" />
      </Box>
      <Button name={'로그인'} />
    </Form>
  );
};


const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em 0;
`;

const Label = styled.label`
  font-size: 0.7rem;
  font-weight: bold;
  margin-bottom: 0.2em;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.3em 0.1em;
`;

export default Login;