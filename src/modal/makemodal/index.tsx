import UseMakeChallenge from "src/hooks/modal/useMakeChallenge";
import * as S from "../style";

interface Props {
  ClickMakeModal: () => void;
}

const MakeModal = ({ ClickMakeModal }: Props) => {
  const { MakeChallengeButton, MakeChallengeHandle, makeChallenge } = UseMakeChallenge();
  return (
    <S.Wrapper>
      <button style={{ position: "absolute", right: 500, top: 100 }} onClick={ClickMakeModal}>
        x
      </button>
      <S.PositionWrapper>
        <S.MainWrapper>
          <S.MainContentWrapper>
            <S.MakeModalBigTitleWrapper>
              <span style={{ fontSize: 24 }}>챌린지 생성하기</span>
            </S.MakeModalBigTitleWrapper>

            <S.MakeModalTitleWrapper>
              <S.TitleInput
                placeholder="제목을 입력해주세요"
                name="title"
                onChange={MakeChallengeHandle}
                value={makeChallenge.title}
              />
            </S.MakeModalTitleWrapper>
            <S.ChallengeLimitWrapper>
              <S.LimitInput
                placeholder="목적치를 입력해주세요"
                name="goal"
                onChange={MakeChallengeHandle}
                value={makeChallenge.goalMoney}
              />
              <S.LimitInput
                placeholder="인원수 제한을 입력해주세요"
                name="limit"
                onChange={MakeChallengeHandle}
                value={makeChallenge.memberLimit}
              />
              <S.LimitInput
                placeholder="공개 설정을 입력해주세요"
                name="setting"
                onChange={MakeChallengeHandle}
                value={makeChallenge.roomType}
              />
            </S.ChallengeLimitWrapper>
            <S.CategoryWrapper>
              <S.CategoryInput
                placeholder="카테고리를 골라주세요"
                name="category"
                onChange={MakeChallengeHandle}
                value={makeChallenge.category}
              />
            </S.CategoryWrapper>
            <S.MakeDescriptionWrapper>
              <S.MakeDescription
                placeholder="내용을 입력해주세요"
                name="description"
                onChange={MakeChallengeHandle}
                value={makeChallenge.description}
              />
            </S.MakeDescriptionWrapper>
            <S.ImgInputWrapper>
              <S.ImgInput
                type="file"
                name="challengeImg"
                onChange={MakeChallengeHandle}
                value={makeChallenge.imageUrl}
              />
              <S.ProductImgInput
                type="file"
                name="productImg"
                onChange={MakeChallengeHandle}
                value={makeChallenge.productImageUrl}
              />
            </S.ImgInputWrapper>
            <S.MakeChallengeButtonWrapper>
              <S.MakeChallengeButton onClick={MakeChallengeButton}>챌린지 생성하기</S.MakeChallengeButton>
            </S.MakeChallengeButtonWrapper>
          </S.MainContentWrapper>
        </S.MainWrapper>
      </S.PositionWrapper>
    </S.Wrapper>
  );
};

export default MakeModal;
