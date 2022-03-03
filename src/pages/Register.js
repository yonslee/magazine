import { useRef } from "react";
import { Button } from "../util";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkEmail, checkNickname, checkPW } from "../shared/CheckInput";
import styled from "styled-components";

// const REGISTER_URL = '/users/signup'

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const nicknameRef = useRef();
  const pwRef = useRef();
  const pwCheckRef = useRef();

  const onRegist = e => {
    e.preventDefault();

    const email = emailRef.current.value;
    const nickname = nicknameRef.current.value;
    const pw = pwRef.current.value;
    const pwCheck = pwCheckRef.current.value;

    if (!checkEmail(email).res) {
      emailRef.current.focus();
      alert(checkEmail(email).msg);
      return;
    }

    if (!checkNickname(nickname).res) {
      nicknameRef.current.focus();
      alert(checkNickname(nickname).msg);
      return;
    }

    if (!checkPW(pw, pwCheck, nickname).res) {
      if (checkPW(pw, pwCheck, nickname).focus === 'pwRef') {
        pwRef.current.focus();
      } else if (checkPW(pw, pwCheck, nickname).focus === 'pwCheckRef') {
        pwCheckRef.current.focus();
      }
      alert(checkPW(pw, pwCheck, nickname).msg);
      return;
    }

    const registerData = {
      email: email,
      username: nickname,
      password: pw,
      passwordCheck: pwCheck,
    };

    dispatch(registerData);
    navigate('/', { replace: true });
  };

  //   try {
  //     const response = await Axios.post(REGISTER_URL,
  //       state,
  //       {
  //         headers: { 'Content-Type': 'application/json' },
  //         withCredentials: true
  //       }
  //     );
  //     console.log(JSON.stringify(response?.data));
  //     setSuccess(true);
  //     setState.userId("");
  //     setState.nickname("");
  //     setState.password("");
  //     setState.matchPwd("");
  //   } catch (err) {
  //     if (!err?.response) {
  //       setState.errMsg("no server response")
  //     } else if (err.response?.status === 409) {
  //       setState.errMsg('이미 사용중인 메일입니다');
  //     } else {
  //       setState.errMsg('가입 실패')
  //     }
  //   }
  // }

  return (
    <Form onSubmit={onRegist}>
      <Box>
        <Label htmlFor='이메일'>이메일</Label>
        <Input ref={emailRef} type='text' placeholder='이메일을 입력하세요' />
      </Box>
      <Box>
        <Label htmlFor='닉네임'>
          닉네임
          <LabelDesc>
            알파벳 대소문자, 숫자로 이루어진 최소 3자 이상으로 입력해주세요
          </LabelDesc>
        </Label>
        <Input
          ref={nicknameRef}
          type='text'
          placeholder='닉네임을 입력하세요'
        />
      </Box>
      <Box>
        <Label htmlFor='비밀번호'>
          비밀번호
          <LabelDesc>
            닉네임과 연관되지 않게 최소 4자 이상으로 입력해주세요
          </LabelDesc>
        </Label>
        <Input
          ref={pwRef}
          type='password'
          placeholder='비밀번호를 입력하세요'
        />
      </Box>
      <Box>
        <Label htmlFor='비밀번호 확인'>비밀번호 확인</Label>
        <Input
          ref={pwCheckRef}
          type='password'
          placeholder='비밀번호를 다시 입력하세요'
        />
      </Box>
      <Info>* 이메일, 닉네임은 필수기입사항입니다.</Info>
      <Button name={'회원가입하기'} />
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

const LabelDesc = styled.span`
  margin-left: 1em;
  font-size: 0.5rem;
  font-weight: 300;
  color: blue;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.3em 0.1em;
`;

const Info = styled.p`
  font-size: 0.5rem;
  color: blue;
`;

export default Register;