import { useNavigate } from "react-router-dom";
import UseSignIn from "../../../hooks/auth/useSignIn";
import * as S from "./style";

const SignIn = () => {
  const { handleInputChange, SignInButton } = UseSignIn();
  const naviagte = useNavigate();

  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.ContentWrapper>
          <S.SignInWrapper>
            <S.SignInTitleWrapper>
              <span style={{ fontSize: 24, fontFamily: "pretendard", marginBottom: "3%" }}>
                Welspy에 온 걸 환영해요!
              </span>
              <span style={{ fontSize: 20, color: "#999999", fontFamily: "pretendard", fontWeight: 500 }}>
                로그인하고 Welspy의 다양한 혜택을 누려보세요!
              </span>
            </S.SignInTitleWrapper>
            <S.SignInInputWrapper>
              <S.UserInfoInput placeholder="이메일을 입력해주세요" name="email" onChange={handleInputChange} />
              <S.UserInfoInput placeholder="비밀번호를 입력해주세요" name="password" onChange={handleInputChange} />
            </S.SignInInputWrapper>
            <S.SignInBottomWrapper>
              <S.SignInButton onClick={SignInButton}>로그인</S.SignInButton>
              <S.TextWrapper>
                <span style={{ fontFamily: "pretendard", marginRight: "2%", fontSize: 18 }}>계정이 없으신가요?</span>
                <span
                  onClick={() => naviagte("/sign-up")}
                  style={{ fontFamily: "pretendard", color: "#5B94F3", fontSize: 18 }}
                >
                  회원가입 하기
                </span>
              </S.TextWrapper>
            </S.SignInBottomWrapper>
          </S.SignInWrapper>
        </S.ContentWrapper>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default SignIn;
