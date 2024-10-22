import { useEffect } from "react";
import * as S from "./style";
import UseProfile from "src/hooks/profile/useProfile";
import UseMyChallenge from "src/hooks/home/useMyChallenge";
import UseBank from "src/hooks/bank/useBank";

const Profile = () => {
  const { profile, UserProfile } = UseProfile();
  const { mychallenge, MyChallenge } = UseMyChallenge();
  const { UserBank, bank } = UseBank();

  useEffect(() => {
    UserProfile();
    MyChallenge();
    UserBank();
  }, []);


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
            <S.ProfileChallengeGoalTitleSpan>내가남긴 댓글</S.ProfileChallengeGoalTitleSpan>
            {mychallenge.length !== 0 ? (
              <S.ProfileChallengeGoalContentWrapper>
                {mychallenge.slice(0, 3).map((item, idx) => (
                  <S.ProfileChallengeGoalMainWrapper key={idx}></S.ProfileChallengeGoalMainWrapper>
                ))}

                <S.MoreProfileChallenge>
                  <span style={{ fontSize: 20, color: "#aeaeae", fontWeight: 500, fontFamily: "pretendard" }}>
                    더보기
                  </span>
                </S.MoreProfileChallenge>
              </S.ProfileChallengeGoalContentWrapper>
            ) : (
              <S.UndefinedChallenge>
                <S.UndefinedSpan>남긴 댓글이 없습니다</S.UndefinedSpan>
              </S.UndefinedChallenge>
            )}
          </S.ProfileChallengeGoalWrapper>
        </S.ProfileChallengeWrapper>
      </S.Wrapper>
    </>
  );
};

export default Profile;
