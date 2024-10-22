import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Back from "src/assets/SignUpBackButton.svg";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.ContentWrapper>
          <S.SignUpWrapper>
            <img
              src={Back}
              alt="img"
              style={{ position: "absolute", left: 700, top: 150 }}
              onClick={() => navigate(-1)}
            />
            <S.SignUpTitleWrapper>
              <span style={{ fontSize: 24, fontFamily: "pretendard", marginBottom: "3%" }}>Welspy가 처음이신가요?</span>
              <span
                style={{
                  fontSize: 20,
                  color: "#999999",
                  fontFamily: "pretendard",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Welspy는 사용자들이 챌린지에 돈을 저금하고 그 돈으로 제휴된 상품을 싸게 구매할 수 있는 서비스에요.
              </span>
            </S.SignUpTitleWrapper>
            <S.SignUpInputWrapper>
              <S.UserInfoInput placeholder="이메일을 입력해주세요" />
              <S.UserInfoInput placeholder="이름을 입력해주세요" />
              <S.UserInfoInput placeholder="전화번호를 입력해주세요" />
              <S.UserInfoInput placeholder="비밀번호를 입력해주세요" />
              <S.SignUpButton>회원가입</S.SignUpButton>
            </S.SignUpInputWrapper>
          </S.SignUpWrapper>
        </S.ContentWrapper>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default SignUp;
