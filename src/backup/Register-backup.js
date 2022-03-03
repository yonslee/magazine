import { Fragment, useEffect, useRef, useState } from "react";
import { Grid, Text, Input, Button } from "../util";
import { validEmail } from "../shared/Regex";
import Axios from "../shared/Axios";

const REGISTER_URL = '/users/signup'

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [userId, setUserId] = useState("");
  const [validId, setValidId] = useState(false);
  const [idFocus, setIdFocus] = useState(false);

  const [nickname, setNickname] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setValidId(validEmail.test(userId));
  }, [userId])

  useEffect(() => {
    setValidName(nickname.length > 0);
  }, [nickname])

  useEffect(() => {
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg("");
  }, [userId, nickname, pwd, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = validEmail.test(userId);
    if (!v1) {
      setErrMsg("Invalid Entry");
      return;
    } try {
      const response = await Axios.post(REGISTER_URL,
        JSON.stringify({ userId, nickname, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      setSuccess(true);
      setUserId("");
      setNickname("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("no server response")
      } else if (err.response?.status === 409) {
        setErrMsg('이미 사용중인 메일입니다');
      } else {
        setErrMsg('가입 실패')
      }
      errRef.current.focus();
    }
  }

  return (
    <Fragment>
      {success ? (
        <Grid padding="16px">
          <h1>Success!</h1>
          <p>
            <a href="#">Sign in</a>
          </p>
        </Grid>
      ) : (
        <Grid padding="16px">
          <p ref={errRef} className={
            errMsg ? "errmsg" : "offscreen"
          } aria-live="assertive">{errMsg}</p>
          <Text size="32px" bold>
            회원가입
          </Text>
          <form onSubmit={handleSubmit}>
            <Grid padding="16px 0px">
              <label htmlFor="userid">
                Username:
                <span className={validId ? "valid" : "hide"}>ok</span>
                <span className={validId || !userId ? "hide" : "invalid"}>X</span>
              </label>
              <Input
                type="text"
                id="userid"
                ref={userRef}
                autocomplete="off"
                placeholder="아이디를 입력해주세요."
                onChange={(e) => setUserId(e.target.value)}
                required
                aria-invalid={validId ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setIdFocus(true)}
                onBlur={() => setIdFocus(false)}
              />
              <p id="uidnote" className={(
                idFocus && userId && !validId
              )?(
                "instructions"
              ):(
                "offscreen"
              )}>
                이메일 형식을 지켜주세요!
              </p>
            </Grid>

            <Grid padding="16px 0px">
              <label htmlFor="nickname">
                nickname:
                <span className={validName ? "valid" : "hide"}>ok</span>
                <span className={validName || !nickname ? "hide" : "invalid"}>X</span>
              </label>
              <Input
                type="nickname"
                id="nickname"
                placeholder="닉네임을 입력해주세요"
                onChange={(e) => setNickname(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
              />
              <p id="pwdnote" className={nameFocus && !validName ? "instructions" : "offscreen"}>
                한글자 이상 입력해야 합니다
              </p>
            </Grid>

            <Grid padding="16px 0px">
              <label htmlFor="password">
                password:
                <span className={validPwd ? "valid" : "hide"}>ok</span>
                <span className={validPwd || !pwd ? "hide" : "invalid"}>X</span>
              </label>
              <Input
                type="password"
                id="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                비밀번호는 최소 6자 이상이어야 합니다
              </p>
            </Grid>

            <Grid padding="16px 0px">
              <label htmlFor="confirm_pwd">
                Confirm password:
                <span className={validMatch && matchPwd ? "valid" : "hide"}>ok</span>
                <span className={validMatch || !matchPwd ? "hide" : "invalid"}>X</span>
              </label>
              <Input
                type="password"
                id="confirm_password"
                placeholder="비밀번호를 한번 더 입력해주세요."
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                같은 비밀번호를 입력해주세요.
              </p>
            </Grid>

            <Button disabled={(
              !validName || !validPwd || !validMatch
              ) ? (
              true
              ) : (
              false
              )} text="회원가입하기">
            </Button>
          </form>
        </Grid>
      )}
    </Fragment>
  );
};

Register.defaultProps = {};

export default Register;