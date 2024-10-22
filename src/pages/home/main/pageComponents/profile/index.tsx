import { useEffect, useState } from "react";
import * as S from "./style";
import UseProfile from "src/hooks/profile/useProfile";
import UseMyChallenge from "src/hooks/home/useMyChallenge";
import UseBank from "src/hooks/bank/useBank";
import UseProduct from "src/hooks/modal/useProduct";
import ExitButton from "src/components/common/exitbutton";

const Profile = () => {
  const { profile, UserProfile } = UseProfile();
  const { mychallenge, MyChallenge } = UseMyChallenge();
  const { UserBank, bank } = UseBank();
  const [idx, setIdx] = useState<number>(0);
  const { product, Product } = UseProduct(idx);

  useEffect(() => {
    UserProfile();
    MyChallenge();
    UserBank();
  }, []);

  useEffect(() => {
    Product();
  }, [idx]);
  return (
    <>
      <S.Wrapper>
        <S.ProfileWrapper>
          <S.ProfliePictureWrapper>
            <img
              src={profile?.imageUrl}
              alt="proflie"
              style={{ width: "100%", height: "100%", borderRadius: 10, objectFit: "contain", background: "#aeaeae" }}
            />
          </S.ProfliePictureWrapper>
          <S.ProfileContentWrapper>
            <S.ProfileContentMainWrapper>
              <S.ProfilePersonalWrapper>
                <S.ProfileName>{profile?.name}</S.ProfileName>
                <S.ProfilePersonalSpan>{`email : ${profile?.email}`}</S.ProfilePersonalSpan>
                <S.ProfilePersonalSpan>{`phoneNumber : ${profile?.phoneNumber}`}</S.ProfilePersonalSpan>
              </S.ProfilePersonalWrapper>
              <S.ProfileChallengeInformation>{`현재 참여중인 챌린지 : ${mychallenge.length}`}</S.ProfileChallengeInformation>
            </S.ProfileContentMainWrapper>
          </S.ProfileContentWrapper>
        </S.ProfileWrapper>
        <S.ProfileChallengeWrapper>
          <S.ProfileChallengeBankWrapper>
            <S.ProfileChallengeBankTitleSpan>내 계좌</S.ProfileChallengeBankTitleSpan>
            <S.ProfileChallengeBankContentWrapper>
              <S.ProfileChallengeBankMainWrapper>
                <S.ProfileChallengeInfoWrapper>
                  <S.InfoSpan>{`${bank?.email} 님의 계좌`}</S.InfoSpan>
                  <S.InfoSpan>{`${bank?.balance
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원`}</S.InfoSpan>
                </S.ProfileChallengeInfoWrapper>
              </S.ProfileChallengeBankMainWrapper>
            </S.ProfileChallengeBankContentWrapper>
          </S.ProfileChallengeBankWrapper>
          <S.ProfileChallengeGoalWrapper>
            <S.ProfileChallengeGoalTitleSpan>성공한 챌린지</S.ProfileChallengeGoalTitleSpan>
            {mychallenge.length !== 0 ? (
              <S.ProfileChallengeGoalContentWrapper>
                {mychallenge.slice(0, 3).map((item, idx) => (
                  <>
                    {item.goalMoney <= item.balance ? (
                      <S.ProfileChallengeGoalMainWrapper key={idx}>
                        <S.ProfileChallengeItemWrapper>
                          <span>{item.title}</span>
                          <S.ProfileChallengeItemContentWrapper>
                            <img
                              src={item.imageUrl}
                              alt="img"
                              style={{ width: "30%", height: "100%", objectFit: "cover", borderRadius: 10 }}
                            />
                            <S.ProfileChallengeItemContentDescriptionWrapper>
                              <S.ProfileChallengeSuccess onClick={() => setIdx(item.roomId)} href={product?.productUrl}>
                                상품 구매
                              </S.ProfileChallengeSuccess>
                              <ExitButton RoomId={item.roomId} />
                            </S.ProfileChallengeItemContentDescriptionWrapper>
                          </S.ProfileChallengeItemContentWrapper>
                        </S.ProfileChallengeItemWrapper>
                      </S.ProfileChallengeGoalMainWrapper>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </S.ProfileChallengeGoalContentWrapper>
            ) : (
              <S.UndefinedChallenge>
                <S.UndefinedSpan>진행중인 챌린지가 없습니다</S.UndefinedSpan>
              </S.UndefinedChallenge>
            )}
          </S.ProfileChallengeGoalWrapper>
        </S.ProfileChallengeWrapper>
      </S.Wrapper>
    </>
  );
};

export default Profile;
