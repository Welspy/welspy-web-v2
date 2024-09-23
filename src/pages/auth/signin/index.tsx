import UseSignIn from "../../../hooks/auth/useSignIn";
import * as S from "./style";

const SignIn = () => {
  const { handleInputChange, SignInButton, signin } = UseSignIn();
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.SignInMainWrapper>
          <S.TitleSpan>로그인</S.TitleSpan>
          <S.InputWrapper>
            <S.EmailInput
              placeholder="이메일을 입력해주세요"
              name="email"
              onChange={handleInputChange}
              value={signin.email}
            />
            <S.PwInput
              placeholder="비밀번호를 입력해주세요"
              name="password"
              onChange={handleInputChange}
              value={signin.password}
            />
            <S.SignInButton onClick={SignInButton}>로그인</S.SignInButton>
          </S.InputWrapper>
        </S.SignInMainWrapper>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default SignIn;
