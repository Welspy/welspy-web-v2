import UseAllChallenge from "src/hooks/home/useAllChallenge";
import * as S from "./style";
import { useEffect, useState } from "react";
import OtherChallengeModal from "src/modal/otherchallengemodal";
import { AllChallengeProps, MyChallengeProps } from "src/type/challenge.types";
import MakeModal from "src/modal/makemodal";
import UseAccountLog from "src/hooks/home/useAccountLog";
import UseMyChallenge from "src/hooks/home/useMyChallenge";
import MyChallengeModal from "src/modal/mychallengemodal";
import Img from "src/assets/image 5.png";
import Bank from "./pageComponents/bank";
import Profile from "./pageComponents/profile";
import UseHomeProduct from "src/hooks/home/useHomeProduct";
import DummyImg from "src/assets/rotion_dummy.png";
import Logo from "src/assets/Logo.svg";

const Home = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [makemodal, setMakeModal] = useState<boolean>(false);
  const [mymodal, setMyModal] = useState<boolean>(false);
  const [color, setColor] = useState<boolean>(false);

  const [page, setPage] = useState<string>("main");

  const [roomdata, setRoomData] = useState<AllChallengeProps>();
  const [myroomdata, setMyRoomData] = useState<MyChallengeProps>();
  const [productid, setProductId] = useState<number[]>([]);
  const { challenge, AllChallenge } = UseAllChallenge();
  const { accountlog, AccountLog } = UseAccountLog();
  const { mychallenge, MyChallenge } = UseMyChallenge();
  const { homeproduct } = UseHomeProduct({ productid });

  const ClickModal = (item: AllChallengeProps) => {
    setModal(!modal);
    setRoomData(item);
  };

  const ClickMakeModal = () => {
    setMakeModal(!makemodal);
  };

  const ClickMyModal = (item: MyChallengeProps) => {
    setMyModal(!mymodal);
    setMyRoomData(item);
  };

  const ChangeBank = () => {
    setPage("bank");
  };

  const ChangeProfile = () => {
    setPage("profile");
  };

  const ChangeMain = () => {
    setPage("main");
    setColor(true);
  };

  useEffect(() => {
    MyChallenge();
    AllChallenge();
    AccountLog();
  }, []);

  useEffect(() => {
    setProductId(challenge.map((item) => item.productId));
  }, [challenge]);

  console.log(homeproduct);

  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.HeaderNav>
          <S.HeaderContentWrapper>
            <img src={Logo} alt="logo" />
            <S.SearchWrapper>
              <S.SearchInput placeholder="원하는 챌린지를 검색하세요" />
            </S.SearchWrapper>
            <S.MysteryBox></S.MysteryBox>
          </S.HeaderContentWrapper>
        </S.HeaderNav>
        <S.ChallengeMainWrapper>
          <S.ChallengeContentWrapper>
            <S.ChallengeTitleWrapper>
              <S.CategorrySpanWrapper>
                <S.CategorrySpan onClick={ChangeMain} clicked={page === "main" ? true : false}>
                  챌린지
                </S.CategorrySpan>
                <S.CategorrySpan onClick={ChangeBank} clicked={page === "bank" ? true : false}>
                  계좌
                </S.CategorrySpan>
                <S.CategorrySpan onClick={ChangeProfile} clicked={page === "profile" ? true : false}>
                  프로필
                </S.CategorrySpan>
              </S.CategorrySpanWrapper>
              <button onClick={ClickMakeModal}>챌린지 생성하기</button>
            </S.ChallengeTitleWrapper>
            {page === "main" && (
              <S.MainChallengeComponent>
                <S.MyChallengeWrapper>
                  <S.MyChallengeSpan>내 챌린지</S.MyChallengeSpan>
                  <S.MyChallengeItemWrapper>
                    {mychallenge.map((item, idx) => (
                      <S.MyChallengeContentWrapper
                        key={idx}
                        onClick={() => {
                          ClickMyModal(item);
                        }}
                      >
                        <S.MyChallengeImgWrapper>
                          <S.MyChallengeImg src={DummyImg} alt="img" />
                          <S.BlurOveray>
                            <S.BlurMainWrapper>
                              <S.BlurSpan>123123</S.BlurSpan>
                            </S.BlurMainWrapper>
                          </S.BlurOveray>
                        </S.MyChallengeImgWrapper>
                      </S.MyChallengeContentWrapper>
                    ))}
                  </S.MyChallengeItemWrapper>
                </S.MyChallengeWrapper>
                <S.OtherChallengeWrapper>
                  <S.MyChallengeSpan>챌린지 리스트</S.MyChallengeSpan>
                  <S.MyChallengeItemWrapper>
                    {challenge.length > 0 ? (
                      challenge.map((item, idx) => (
                        <S.OtherChallenge onClick={() => ClickModal(item)} key={idx}>
                          <S.OtherChallengeImgWrapper src={item.imageUrl} alt="challenge" />
                          <S.OtherChallengeDescriptionWrapper>
                            <S.DescriptionMainWrapper>
                              <S.TitleWrapper>
                                <S.TitleSpan>{item.title}</S.TitleSpan>
                                <S.CategoryWrapper>
                                  <span style={{ fontSize: 10, color: "white" }}>#{item.category}</span>
                                </S.CategoryWrapper>
                              </S.TitleWrapper>
                              <S.RoomTypeWrapper>
                                {/* <span style={{ fontSize: 12, fontWeight: 700, color: "#5b94f3" }}>{item.roomType}</span> */}
                              </S.RoomTypeWrapper>
                              <S.ContentWrapper>
                                <S.DisCountWrapper>
                                  <span style={{ fontSize: 11, textDecoration: "line-through", color: "#aeaeae" }}>
                                    {homeproduct?.price}원
                                  </span>
                                  <span style={{ fontSize: 20, marginTop: 5 }}>{homeproduct?.discountedPrice}원</span>
                                </S.DisCountWrapper>
                                <span style={{ fontSize: 29, color: "red" }}>{homeproduct?.discount}%</span>
                              </S.ContentWrapper>
                            </S.DescriptionMainWrapper>
                          </S.OtherChallengeDescriptionWrapper>
                        </S.OtherChallenge>
                      ))
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          background: "#aeaeae",
                          borderRadius: 10,
                        }}
                      >
                        <span style={{ fontSize: 24 }}>챌린지가 없습니다</span>
                      </div>
                    )}
                  </S.MyChallengeItemWrapper>
                </S.OtherChallengeWrapper>
              </S.MainChallengeComponent>
            )}
            {page === "bank" && <Bank />} {/* 계좌 페이지 */}
            {page === "profile" && <Profile />} {/* 프로필 페이지 */}
          </S.ChallengeContentWrapper>
        </S.ChallengeMainWrapper>
      </S.MainWrapper>
      <S.SideBarWrapper>
        <S.SideBarHeaderMainWrapper>
          <S.SideBarHeader>
            <S.SideBarHeaderTextWrapper>
              <S.SideBarHeaderText>거래 내역</S.SideBarHeaderText>
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
      {mymodal === true ? <MyChallengeModal MyRoomData={myroomdata} setModal={setMyModal} modal={mymodal} /> : <></>}
      {makemodal === true ? <MakeModal ClickMakeModal={ClickMakeModal}></MakeModal> : <></>}
      {modal === true ? <OtherChallengeModal RoomData={roomdata} setModal={setModal} modal={modal} /> : <></>}
    </S.Wrapper>
  );
};

export default Home;
