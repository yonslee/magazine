import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Text, Button} from "../util";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const loginSim = () => setLoggedIn(true);
  const logoutSim = () => setLoggedIn(false);
  

  const navigate = useNavigate();

  if (loggedIn) {
    return (
      <Fragment>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text margin="0px" size="24px" bold>사진+닉네임</Text>
          </Grid>
          <Grid is_flex>
            <Button text="내정보"></Button>
            <Button text="알림"></Button>
            <Button text="로그아웃" onClick={logoutSim}></Button>
          </Grid>
        </Grid>
      </Fragment>
    );
  };

    return (
      <Fragment>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text margin="0px" size="24px" bold>메인으로</Text>
            <Button text="로긴확인" onClick={loginSim}></Button>
          </Grid>
          <Grid is_flex>
            <Button text="로그인" onClick={() => ("/login")}></Button>
            <Button text="회원가입" onClick={() =>navigate("/register")}></Button>
          </Grid>
        </Grid>
      </Fragment>
    )
}


Header.defaultProps = {}

export default Header;