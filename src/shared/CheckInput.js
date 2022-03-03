export const checkEmail = (email) => {
  let reg = RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$")
  return reg.test(email);
}

export const checkNickname = nickname => {
  if (nickname === "") {
    return { res: false, msg: "닉네임을 입력해주세요" };
  }
  return { res: true };
};

export const checkPW = (pw, pwCheck) => {
  if (pw === "") {
    return { res: false, msg: "비밀번호를 입력해주세요', focus: 'pwRef" };
  } else if (pwCheck === "") {
    return { res: false, msg: '비밀번호를 입력해주세요', focus: 'pwCheckRef' };
  }
  else if (!pw === pwCheck) {
    return {
      res: false,
      msg: "비밀번호를 올바르게 입력했는지 확인해주세요",
      focus: "pwRef",
    };
  }
  return {
    res: true,
  };
};