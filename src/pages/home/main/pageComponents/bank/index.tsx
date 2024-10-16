import { useEffect } from "react";
import * as S from "./style";
import UseBank from "src/hooks/bank/useBank";

const Bank = () => {
  const { UserBank, bank } = UseBank();

  useEffect(() => {
    UserBank();
  }, []);
  return (
    <S.Wrapper>
      <S.BankWrapper>
        <S.MyBankWrapper>
          <S.MyBankMainWrapper>
            <S.MyBankInfoWrapper>
              <S.TitleSpan>{`${bank?.email} 님의 계좌`}</S.TitleSpan>
              <S.InfoSpan>{`${bank?.balance} 원`}</S.InfoSpan>
            </S.MyBankInfoWrapper>
            <S.ChargeButton>충전</S.ChargeButton>
          </S.MyBankMainWrapper>
        </S.MyBankWrapper>
        <S.BankLogWrapper>
          <S.BankLogItemWrapper>
            <S.BankLogItemTitle>
              <S.BankLogTitleSpan>오늘</S.BankLogTitleSpan>
              <div style={{ width: "90%", height: "5%", background: "lightgray" }}></div>
            </S.BankLogItemTitle>
            <S.BankLogInfoWrapper>
              <S.BankLogInfoItemWrapper>
                <S.BankLogInfoPic></S.BankLogInfoPic>
                <S.BankLogInfoContent>
                  <S.InfoContentSpan>챌린지 1</S.InfoContentSpan>
                  <S.InfoContentSpan>-1000원</S.InfoContentSpan>
                </S.BankLogInfoContent>
              </S.BankLogInfoItemWrapper>
              <S.BankLogInfoItemWrapper>
                <S.BankLogInfoPic></S.BankLogInfoPic>
                <S.BankLogInfoContent>
                  <S.InfoContentSpan>챌린지 1</S.InfoContentSpan>
                  <S.InfoContentSpan>-1000원</S.InfoContentSpan>
                </S.BankLogInfoContent>
              </S.BankLogInfoItemWrapper>
            </S.BankLogInfoWrapper>
          </S.BankLogItemWrapper>
          <S.BankLogItemWrapper style={{ marginTop: 28 }}>
            <S.BankLogItemTitle>
              <S.BankLogTitleSpan>어제</S.BankLogTitleSpan>
              <div style={{ width: "90%", height: "5%", background: "lightgray" }}></div>
            </S.BankLogItemTitle>
            <S.BankLogInfoWrapper>
              <S.BankLogInfoItemWrapper>
                <S.BankLogInfoPic></S.BankLogInfoPic>
                <S.BankLogInfoContent>
                  <S.InfoContentSpan>챌린지 1</S.InfoContentSpan>
                  <S.InfoContentSpan>-1000원</S.InfoContentSpan>
                </S.BankLogInfoContent>
              </S.BankLogInfoItemWrapper>
              <S.BankLogInfoItemWrapper>
                <S.BankLogInfoPic></S.BankLogInfoPic>
                <S.BankLogInfoContent>
                  <S.InfoContentSpan>챌린지 1</S.InfoContentSpan>
                  <S.InfoContentSpan>-1000원</S.InfoContentSpan>
                </S.BankLogInfoContent>
              </S.BankLogInfoItemWrapper>
            </S.BankLogInfoWrapper>
          </S.BankLogItemWrapper>
        </S.BankLogWrapper>
      </S.BankWrapper>
    
    </S.Wrapper>
  );
};

export default Bank;
