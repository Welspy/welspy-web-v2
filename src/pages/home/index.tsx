import UseAllChallenge from "src/hooks/home/useAllChallenge";
import * as S from "./style";
import { useEffect, useState } from "react";
import OtherChallengeModal from "src/modal/otherchallengemodal";
import { AllChallengeProps } from "src/type/challenge.types";
import MakeModal from "src/modal/makemodal";
import UseAccountLog from "src/hooks/home/useAccountLog";
import UseMyChallenge from "src/hooks/home/useMyChallenge";
import MyChallengeModal from "src/modal/mychallengemodal";

const Home = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [makemodal, setMakeModal] = useState<boolean>(false);
  const [mymodal, setMyModal] = useState<boolean>(false);

  const [roomdata, setRoomData] = useState<AllChallengeProps>();
  const { challenge, AllChallenge } = UseAllChallenge();
  const { accountlog, AccountLog } = UseAccountLog();
  const { mychallenge, MyChallenge } = UseMyChallenge();

  const ClickModal = (item: AllChallengeProps) => {
    setModal(!modal);
    setRoomData(item);
  };

  const ClickMakeModal = () => {
    setMakeModal(!makemodal);
  };

  const ClickMyModal = () => {
    setMyModal(!mymodal);
  };

  useEffect(() => {
    MyChallenge();
    AllChallenge();
    AccountLog();
  }, []);

  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.HeaderNav />
        <S.ChallengeMainWrapper>
          <S.ChallengeContentWrapper>
            <S.ChallengeTitleWrapper>
              <S.CategorrySpanWrapper></S.CategorrySpanWrapper>
              <button onClick={ClickMakeModal}>챌린지 생성하기</button>
            </S.ChallengeTitleWrapper>
            <S.MyChallengeWrapper>
              <S.MyChallengeSpan>내 챌린지</S.MyChallengeSpan>
              <S.MyChallengeItemWrapper onClick={ClickMyModal}>
                <S.OtherChallenge>
                  <S.OtherChallengeImgWrapper src="/" alt="challenge" />
                  <S.OtherChallengeDescriptionWrapper>
                    <S.DescriptionMainWrapper>
                      <S.TitleWrapper>
                        <S.TitleSpan></S.TitleSpan>
                        <S.CategoryWrapper>
                          <span style={{ fontSize: 10, color: "white" }}></span>
                        </S.CategoryWrapper>
                      </S.TitleWrapper>
                      <S.RoomTypeWrapper>
                        <span style={{ fontSize: 10, color: "white" }}></span>
                      </S.RoomTypeWrapper>
                      <S.ContentWrapper></S.ContentWrapper>
                    </S.DescriptionMainWrapper>
                  </S.OtherChallengeDescriptionWrapper>
                </S.OtherChallenge>
              </S.MyChallengeItemWrapper>
            </S.MyChallengeWrapper>
            <S.OtherChallengeWrapper>
              <S.MyChallengeSpan>챌린지 리스트</S.MyChallengeSpan>
              <S.MyChallengeItemWrapper>
                {challenge.map((item, idx) => (
                  <S.OtherChallenge onClick={() => ClickModal(item)} key={idx}>
                    <S.OtherChallengeImgWrapper src="/" alt="challenge" />
                    <S.OtherChallengeDescriptionWrapper>
                      <S.DescriptionMainWrapper>
                        <S.TitleWrapper>
                          <S.TitleSpan>{item.title}</S.TitleSpan>
                          <S.CategoryWrapper>
                            <span style={{ fontSize: 10, color: "white" }}>#{item.category}</span>
                          </S.CategoryWrapper>
                        </S.TitleWrapper>
                        <S.RoomTypeWrapper>
                          <span style={{ fontSize: 10, color: "white" }}>{item.roomType}</span>
                        </S.RoomTypeWrapper>
                        <S.ContentWrapper>{item.description}</S.ContentWrapper>
                      </S.DescriptionMainWrapper>
                    </S.OtherChallengeDescriptionWrapper>
                  </S.OtherChallenge>
                ))}
              </S.MyChallengeItemWrapper>
            </S.OtherChallengeWrapper>
          </S.ChallengeContentWrapper>
        </S.ChallengeMainWrapper>
      </S.MainWrapper>

      <S.SideBarWrapper>
        <S.SideBarHeaderMainWrapper>
          <S.SideBarHeader>
            <S.SideBarHeaderTextWrapper>
              <S.SideBarHeaderText>이체 내역</S.SideBarHeaderText>
            </S.SideBarHeaderTextWrapper>
          </S.SideBarHeader>

          <S.AccountLogWrapper>
            <S.AccountLogItemWrapper>
              <S.AccountLogProfileWrapper>
                <S.AccountLogProfileImg />
                <S.AccountLogProfileSpan>{accountlog?.accountNumber}</S.AccountLogProfileSpan>
              </S.AccountLogProfileWrapper>
              <S.AccountLogItemDescriptionWrapper>
                <S.AccountLogSpan>{`${accountlog?.money} 원`}</S.AccountLogSpan>
              </S.AccountLogItemDescriptionWrapper>
            </S.AccountLogItemWrapper>
          </S.AccountLogWrapper>
        </S.SideBarHeaderMainWrapper>
      </S.SideBarWrapper>
      {mymodal === true ? (
        <MyChallengeModal RoomData={roomdata} setModal={setMyModal} modal={mymodal}></MyChallengeModal>
      ) : (
        <></>
      )}
      {makemodal === true ? <MakeModal ClickMakeModal={ClickMakeModal}></MakeModal> : <></>}
      {modal === true ? <OtherChallengeModal RoomData={roomdata} setModal={setModal} modal={modal} /> : <></>}
    </S.Wrapper>
  );
};

export default Home;
