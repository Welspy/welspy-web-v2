import * as S from "../style";

interface Props {
  ClickMakeModal: () => void;
}

const MakeModal = ({ ClickMakeModal }: Props) => {
  return (
    <S.Wrapper>
      <button style={{ position: "absolute", right: 500, top: 100 }} onClick={ClickMakeModal}>
        x
      </button>
      <S.PositionWrapper>
        <S.MainWrapper>
          <S.MainContentWrapper>
            <S.MakeModalTitleWrapper>
              <S.TitleInput placeholder="제목을 입력해주세요" />
            </S.MakeModalTitleWrapper>
            <S.ChallengeLimitWrapper>
              <S.LimitInput placeholder="목적치를 입력해주세요" />
              <S.LimitInput placeholder="인원수 제한을 입력해주세요" />
              <S.LimitInput placeholder="공개 설정을 입력해주세요" />
            </S.ChallengeLimitWrapper>
            <S.CategoryWrapper>
              <S.CategoryInput placeholder="카테고리를 골라주세요" />
            </S.CategoryWrapper>
            <S.MakeDescriptionWrapper>
              <S.MakeDescription placeholder="내용을 입력해주세요" />
            </S.MakeDescriptionWrapper>
            <S.ImgInputWrapper>
                <S.ImgInput type="file" />
            </S.ImgInputWrapper>
            <S.MakeChallengeButtonWrapper>
                <S.MakeChallengeButton>챌린지 생성하기</S.MakeChallengeButton>
            </S.MakeChallengeButtonWrapper>
          </S.MainContentWrapper>
        </S.MainWrapper>
      </S.PositionWrapper>
    </S.Wrapper>
  );
};

export default MakeModal;
