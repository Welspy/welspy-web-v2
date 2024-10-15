import {AllChallengeProps} from "src/type/challenge.types";
import * as S from "../style";
import {useEffect, useState} from "react";
import UseProduct from "src/hooks/modal/useProduct";
import UseJoinChallenge from "src/hooks/modal/useJoinChallenge";

interface Props {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    RoomData: AllChallengeProps | undefined;
    modal: boolean;
}

const OtherChallengeModal = ({setModal, modal, RoomData}: Props) => {
    const [productview, setProductView] = useState<boolean>(true);
    const {product, Product} = UseProduct({RoomData});
    const {JoinChallengeButton} = UseJoinChallenge({RoomData});

    const ClickModal = () => {
        setModal(!modal);
    };

    useEffect(() => {
        Product();
    }, []);

    return (
        <S.Wrapper>
            {productview === true ? (
                <S.PositionWrapper>
                    <S.MainWrapper>
                        <S.ModalDeleteButtonWrapper onClick={ClickModal}>X</S.ModalDeleteButtonWrapper>
                        <S.MainContentWrapper>
                            <S.ContentTitleWrapper>
                                <S.TitleSpan>{RoomData?.title}</S.TitleSpan>
                                <S.CategorySpanWrapper>
                                    <S.CategorySpan>#{RoomData?.category}</S.CategorySpan>
                                </S.CategorySpanWrapper>
                            </S.ContentTitleWrapper>
                            <S.GoalMoneyWrapper>
                                <S.GoalMoneySpan>목표금액 : {RoomData?.goalMoney}</S.GoalMoneySpan>
                                <S.MemberWrapper>
                                    <S.MemberLimitSpan>멤버 제한 : {RoomData?.memberLimit}</S.MemberLimitSpan>
                                    <S.CurrentMemberSpan>현재 멤버 : {RoomData?.currentMember}</S.CurrentMemberSpan>
                                </S.MemberWrapper>
                            </S.GoalMoneyWrapper>
                            <S.ContenWrapper>
                                <S.ChallengeImgWrapper>
                                    <img src={RoomData?.imageUrl} style={{width: "100%", height: "100%"}} alt=""/>
                                </S.ChallengeImgWrapper>
                                <S.DescriptionWrapper>{RoomData?.description}</S.DescriptionWrapper>
                            </S.ContenWrapper>
                            <S.ChallengeJoinButton onClick={JoinChallengeButton}>챌린지 가입</S.ChallengeJoinButton>
                        </S.MainContentWrapper>
                    </S.MainWrapper>
                    <button onClick={() => setProductView(!productview)}>제품 정보</button>
                </S.PositionWrapper>
            ) : (
                <S.PositionWrapper>
                    <S.MainWrapper>
                        <S.ModalDeleteButtonWrapper onClick={ClickModal}>X</S.ModalDeleteButtonWrapper>

                        <S.MainContentWrapper>
                            <S.ContentTitleWrapper>
                                <S.TitleSpan>제품 정보</S.TitleSpan>
                            </S.ContentTitleWrapper>
                            <S.ContentTitleWrapper>
                                <S.ProductNameSpan>{product?.name}</S.ProductNameSpan>
                            </S.ContentTitleWrapper>
                            <S.ChallengeImgWrapper>
                                <img style={{width: "40%", height: "100%", objectFit: "cover"}} src={product?.imageUrl}
                                     alt=""/>
                            </S.ChallengeImgWrapper>
                            <S.GoalMoneyWrapper>
                                {/*<S.GoalMoneySpan style={{ color: "red" }}>가격 : {product?.discountedPrice}</S.GoalMoneySpan>*/}
                                <S.MemberWrapper style={{flexDirection: "column"}}>
                                    <S.MemberLimitSpan>원가 : {product?.price}</S.MemberLimitSpan>
                                    <S.CurrentMemberSpan style={{color: " blue "}}>할인율
                                        : {product?.discount}</S.CurrentMemberSpan>
                                </S.MemberWrapper>
                            </S.GoalMoneyWrapper>
                            <S.DescriptionWrapper
                                style={{height: "40%", marginTop: 20, whiteSpace: "pre-line", wordBreak: "break-word"}}
                            >
                                {product?.description}
                            </S.DescriptionWrapper>
                        </S.MainContentWrapper>
                    </S.MainWrapper>
                    <button onClick={() => setProductView(!productview)}>챌린지 정보</button>
                </S.PositionWrapper>
            )}
        </S.Wrapper>
    );
};

export default OtherChallengeModal;