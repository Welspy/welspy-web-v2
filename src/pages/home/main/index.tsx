import UseAllChallenge from "src/hooks/home/useAllChallenge";
import * as S from "./style";
import {useEffect, useState} from "react";
import OtherChallengeModal from "src/modal/otherchallengemodal";
import {AllChallengeProps, MyChallengeProps} from "src/type/challenge.types";
import MakeModal from "src/modal/makemodal";
import UseAccountLog from "src/hooks/home/useAccountLog";
import UseMyChallenge from "src/hooks/home/useMyChallenge";
import MyChallengeModal from "src/modal/mychallengemodal";
import Bank from "./pageComponent/bank";
import Profile from "./pageComponent/profile";
import UseHomeProduct from "src/hooks/home/useHomeProduct";
import DummyImg from "src/assets/rotion_dummy.png";
import Logo from "src/assets/Logo.svg";
import SearchModal from "src/modal/searchModal";

const Home = () => {
    const [modal, setModal] = useState<boolean>(false);
    const [makemodal, setMakeModal] = useState<boolean>(false);
    const [productmodal, setProductModal] = useState<boolean>(false);
    const [mymodal, setMyModal] = useState<boolean>(false);
    const [search, setSearch] = useState<boolean>(false);
    const [page, setPage] = useState<string>("main");

    const [roomdata, setRoomData] = useState<AllChallengeProps>();
    const [myroomdata, setMyRoomData] = useState<MyChallengeProps>();

    const [productid, setProductId] = useState<number[]>([]);

    const {challenge, AllChallenge} = UseAllChallenge();
    const {accountlog, AccountLog} = UseAccountLog();
    const {mychallenge, MyChallenge} = UseMyChallenge();
    const {homeproduct} = UseHomeProduct({productid});

    const ClickModal = (item: AllChallengeProps) => {
        setModal(!modal);
        setRoomData(item);
    };

    const ClickMakeModal = () => {
        setMakeModal(!makemodal);
    };

    const ClickProductModal = () => {
        setProductModal(!productmodal);
    }

    const ClickMyModal = (item: MyChallengeProps) => {
        setMyModal(!mymodal);
        setMyRoomData(item);
    };

    const ClickSearchModal = () => {
        setSearch(!search);
    };

    useEffect(() => {
        MyChallenge();
        AllChallenge();
        AccountLog();
    }, []);

    useEffect(() => {
        setProductId(challenge.map((item) => item.productId));
    }, [challenge]);

    console.log("challenge", challenge);
    console.log("mychallenge", mychallenge);

    return (
        <>
            <S.Wrapper>
                <S.MainWrapper>
                    <S.HeaderNav>
                        <S.HeaderContentWrapper>
                            <img src={Logo} alt="logo"/>
                            <S.SearchWrapper>
                                <S.SearchInput onClick={ClickSearchModal} placeholder="원하는 챌린지를 검색하세요"/>
                            </S.SearchWrapper>
                            <button onClick={ClickProductModal}>제품 등록하기</button>
                        </S.HeaderContentWrapper>
                    </S.HeaderNav>
                    <S.ChallengeMainWrapper>
                    <S.ChallengeContentWrapper>
                            <S.ChallengeTitleWrapper>
                                <S.CategorrySpanWrapper>
                                    <S.CategorrySpan onClick={() => setPage("main")}
                                                     clicked={page === "main" ? true : false}>
                                        챌린지
                                    </S.CategorrySpan>
                                    <S.CategorrySpan onClick={() => setPage("bank")}
                                                     clicked={page === "bank" ? true : false}>
                                        계좌
                                    </S.CategorrySpan>
                                    <S.CategorrySpan onClick={() => setPage("profile")}
                                                     clicked={page === "profile" ? true : false}>
                                        프로필
                                    </S.CategorrySpan>
                                </S.CategorrySpanWrapper>
                                <button onClick={ClickMakeModal}>챌린지 생성하기</button>
                            </S.ChallengeTitleWrapper>
                            {page === "main" && (
                                <S.MainChallengeComponent>
                                    <S.MyChallengeWrapper>
                                        <S.MyChallengeSpan>내 챌린지</S.MyChallengeSpan>
                                        {mychallenge.length !== 0 ? (
                                            <S.MyChallengeItemWrapper>
                                                {mychallenge.slice(0, 5).map((item, idx) => (
                                                    <S.MyChallengeContentWrapper
                                                        key={idx}
                                                        onClick={() => {
                                                            ClickMyModal(item);
                                                        }}
                                                    >
                                                        <S.MyChallengeImgWrapper>
                                                            <S.MyChallengeImg src={item.imageUrl} alt="img"/>
                                                            <S.BlurOveray>
                                                                <S.BlurMainWrapper>
                                                                    <S.BlurSpan>{item.title}</S.BlurSpan>
                                                                </S.BlurMainWrapper>
                                                            </S.BlurOveray>
                                                        </S.MyChallengeImgWrapper>
                                                    </S.MyChallengeContentWrapper>
                                                ))}
                                            </S.MyChallengeItemWrapper>
                                        ) : (
                                            <S.SkelethoneBox>
                                                <span style={{fontSize: 24}}>챌린지를 등록해보세요!</span>
                                            </S.SkelethoneBox>
                                        )}
                                    </S.MyChallengeWrapper>
                                    <S.OtherChallengeWrapper>
                                        <S.MyChallengeSpan>챌린지 리스트</S.MyChallengeSpan>
                                        <S.MyChallengeItemWrapper>
                                            {challenge.length > 0 ? (
                                                challenge.slice(0, 4).map((item, idx) => (
                                                    <S.OtherChallenge onClick={() => ClickModal(item)} key={idx}>
                                                        <S.OtherChallengeImgWrapper src={item.imageUrl}
                                                                                    alt="challenge"/>
                                                        <S.OtherChallengeDescriptionWrapper>
                                                            <S.DescriptionMainWrapper>
                                                                <S.TitleWrapper>
                                                                    <S.TitleSpan>{item.title}</S.TitleSpan>
                                                                    <S.CategoryWrapper>
                                                                        <span style={{
                                                                            fontSize: 10,
                                                                            color: "white"
                                                                        }}>#{item.category}</span>
                                                                    </S.CategoryWrapper>
                                                                </S.TitleWrapper>
                                                                <S.RoomTypeWrapper>
                                                                    {/* <span style={{ fontSize: 12, fontWeight: 700, color: "#5b94f3" }}>{item.roomType}</span> */}
                                                                </S.RoomTypeWrapper>
                                                                <S.ContentWrapper>
                                                                    <S.DisCountWrapper>
                                    <span style={{fontSize: 11, textDecoration: "line-through", color: "#aeaeae"}}>
                                      {homeproduct?.price}원
                                    </span>
                                                                        <span style={{
                                                                            fontSize: 20,
                                                                            marginTop: 5
                                                                        }}>{homeproduct?.discountedPrice}원</span>
                                                                    </S.DisCountWrapper>
                                                                    <span style={{
                                                                        fontSize: 29,
                                                                        color: "red"
                                                                    }}>{homeproduct?.discount}%</span>
                                                                </S.ContentWrapper>
                                                            </S.DescriptionMainWrapper>
                                                        </S.OtherChallengeDescriptionWrapper>
                                                    </S.OtherChallenge>
                                                ))
                                            ) : (
                                                <S.SkelethoneBox>
                                                    <span style={{fontSize: 24}}>챌린지가 없습니다</span>
                                                </S.SkelethoneBox>
                                            )}
                                        </S.MyChallengeItemWrapper>
                                    </S.OtherChallengeWrapper>
                                    {challenge.length > 5 ? (
                                        <S.ChallengeTextWrapper>
                                            {challenge.slice(4, 7).map((item, idx) => (
                                                <S.ChallengeText key={idx}>
                                                    <S.ChallengeTextSpan onClick={() => ClickModal(item)}>
                                                        {item.title}, {item.description.slice(0, 10)}...
                                                    </S.ChallengeTextSpan>
                                                    <S.SubTextSpan>{item.category}</S.SubTextSpan>
                                                </S.ChallengeText>
                                            ))}
                                            {challenge.slice(7, 10).map((item, idx) => (
                                                <S.ChallengeText key={idx}>
                                                    <S.ChallengeTextSpan onClick={() => ClickModal(item)}>
                                                        {item.title}, {item.description.slice(0, 10)}...
                                                    </S.ChallengeTextSpan>
                                                    <S.SubTextSpan>{item.category}</S.SubTextSpan>
                                                </S.ChallengeText>
                                            ))}
                                        </S.ChallengeTextWrapper>
                                    ) : (
                                        <></>
                                    )}
                                </S.MainChallengeComponent>
                            )}
                            {page === "bank" && <Bank/>} {/* 계좌 페이지 */}
                            {page === "profile" && <Profile/>} {/* 프로필 페이지 */}
                        </S.ChallengeContentWrapper>
                    </S.ChallengeMainWrapper>
                </S.MainWrapper>
                <S.SideBarWrapper>
                    <S.SideBarHeaderMainWrapper>
                        <S.SideBarHeader>
                            <S.SideBarHeaderTextWrapper>
                                <S.SideBarHeaderText>내 챌린지 현황</S.SideBarHeaderText>
                            </S.SideBarHeaderTextWrapper>
                        </S.SideBarHeader>
                        {mychallenge.length === 0 ? (
                            <S.AccountLogWrapper>

                                <S.UndefinedSpan>가입된 챌린지가 없습니다.</S.UndefinedSpan>

                            </S.AccountLogWrapper>
                        ) : (
                            <S.AccountLogWrapper>
                                {mychallenge.map((item, idx) => (
                                    <S.AccountLogItemWrapper key={idx}>
                                        <S.AccountLogProfileWrapper>
                                            <S.AccountLogProfileImg src={item.imageUrl} alt="img"/>
                                        </S.AccountLogProfileWrapper>
                                        <S.AccountLogItemDescriptionWrapper>
                                            <S.AccountLogProfileSpan>{item.title}</S.AccountLogProfileSpan>
                                        </S.AccountLogItemDescriptionWrapper>
                                    </S.AccountLogItemWrapper>
                                ))}
                            </S.AccountLogWrapper>
                        )}
                    </S.SideBarHeaderMainWrapper>
                </S.SideBarWrapper>
                {search === true ? <SearchModal setSearch={setSearch} search={search}></SearchModal> : <></>}
                {mymodal === true ?
                    <MyChallengeModal MyRoomData={myroomdata} setModal={setMyModal} modal={mymodal}/> : <></>}
                {makemodal === true ? <MakeModal ClickMakeModal={ClickMakeModal}></MakeModal> : <></>}
                {modal === true ? <OtherChallengeModal RoomData={roomdata} setModal={setModal} modal={modal}/> : <></>}
            </S.Wrapper>
        </>
    );
};

export default Home;