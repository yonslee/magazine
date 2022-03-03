import { Fragment, useState } from "react";
import { Grid, Text, Input, Button } from "../util";
import { validEmail } from "../shared/Regex";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [pwd, setPwd] = useState("");
  const [matchPwd, setMatchPwd] = useState("");

  const signup = () => {
    if (id === "" || nickname === "" || pwd === "") {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }

    if(!validEmail(id)){
      window.alert('이메일 형식이 맞지 않습니다!');
      return;
    }

    if (pwd !== matchPwd) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }

    navigate('/login', {replace:true});

  };

  return (
    <Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          회원가입
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            onChange={(e) => {
              setMatchPwd(e.target.value);
            }}
          />
        </Grid>

        <Button text="회원가입하기" onClick={signup}></Button>
      </Grid>
    </Fragment>
  );
};

Register.defaultProps = {};

export default Register;