import UseSignIn from "../../../hooks/auth/useSignIn";
import * as S from "./style";
import Logo from "src/assets/AuthLogo.svg";

const SignIn = () => {
  const { handleInputChange, SignInButton, signin } = UseSignIn();

  return (
    <S.Wrapper>
      <S.MainWrapper>
        <img src={Logo} alt="img" style={{ width: 80, height: 80 }} />
        <S.ContentWrapper>
          <S.SignInWrapper>
            <S.SignInTitleWrapper>
              <span style={{fontSize: 22}}>Welspy에 온 걸 환영해요!</span>
            </S.SignInTitleWrapper>
          </S.SignInWrapper>
        </S.ContentWrapper>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default SignIn;
