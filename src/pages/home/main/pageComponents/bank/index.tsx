import { useEffect } from "react";
import * as S from "./style";
import UseBank from "src/hooks/bank/useBank";
import UseAccountLog from "src/hooks/home/useAccountLog";
import UseProfile from "src/hooks/profile/useProfile";

const Bank = () => {
  const { UserBank, bank } = UseBank();
  const { accountlog, AccountLog } = UseAccountLog();
  const { profile, UserProfile } = UseProfile();

  useEffect(() => {
    UserBank();
    AccountLog();
    UserProfile();
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.BankWrapper>
          <S.MyBankWrapper>
            <S.MyBankMainWrapper>
              <S.MyBankInfoWrapper>
                <S.TitleSpan>{`${bank?.email} 님의 계좌`}</S.TitleSpan>
              </S.MyBankInfoWrapper>
              <S.InfoSpan style={{ alignSelf: "center", marginBottom: 60 }}>{`${bank?.balance
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원`}</S.InfoSpan>
            </S.MyBankMainWrapper>
          </S.MyBankWrapper>
          <S.BankLogWrapper>
            <S.BankLogItemWrapper>
              <S.BankLogItemTitle>
                <S.BankLogTitleSpan>거래 내역</S.BankLogTitleSpan>
                <div style={{ width: "90%", height: "5%", background: "lightgray" }}></div>
              </S.BankLogItemTitle>
              <S.BankLogInfoWrapper>
                {accountlog?.data.map((item) => (
                  <S.BankLogInfoItemWrapper>
                    <S.BankLogInfoPic src={profile?.imageUrl} alt="img" />
                    <S.BankLogInfoContent>
                      <S.InfoContentSpan>기무건우 님</S.InfoContentSpan>
                      {accountlog?.data[0].bankType === "SEND" ? (
                        <S.InfoContentSpan>
                          -{`${item.money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원`}
                        </S.InfoContentSpan>
                      ) : (
                        <S.InfoContentSpan>
                          +{`${item.money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원`}
                        </S.InfoContentSpan>
                      )}
                    </S.BankLogInfoContent>
                  </S.BankLogInfoItemWrapper>
                ))}
              </S.BankLogInfoWrapper>
            </S.BankLogItemWrapper>
          </S.BankLogWrapper>
        </S.BankWrapper>
      </S.Wrapper>
    </>
  );
};

export default Bank;
