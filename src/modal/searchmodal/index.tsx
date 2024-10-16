import { SetStateAction, useEffect, useState } from "react";
import UseSearch from "src/hooks/modal/useSearch";
import styled from "styled-components";

interface Props {
  serch: boolean;
  setSearch: React.Dispatch<SetStateAction<boolean>>;
}

const SearchModal = ({ setSearch, serch }: Props) => {
  const { setTitle, SearchChallenge, title, searchData } = UseSearch();

  useEffect(() => {
    SearchChallenge();
  }, [title]);

  console.log(searchData);

  return (
    <Wrapper
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setSearch(!serch);
        }
      }}
    >
      <SearchWrapper>
        <SearchInput placeholder="검색어를 입력해주세요" onChange={(e) => setTitle(e.target.value)}></SearchInput>
        <SearchContetentWrapper>
          <SearchTitleWrapper>
            {title.length <= 0 ? <TitleSpan>전체 챌린지</TitleSpan> : <TitleSpan>검색 내용</TitleSpan>}

            <TitleSpan>오늘 14:38기준</TitleSpan>
          </SearchTitleWrapper>
          <SearchContentWrapper>
            {searchData.map((item, idx) => (
              <SearchContentItemWrapper key={idx}>
                <SearchContentItemNumberWrppaer>
                  <NumberSpan>{idx + 1}</NumberSpan>
                  <SearchContentItemNumberProfileWrapper>
                    <ProfileImg src={item.imageUrl} alt="img" />
                    <NumberSpan style={{ marginLeft: "5%", fontSize: 14 }}>{item.title}</NumberSpan>
                  </SearchContentItemNumberProfileWrapper>
                </SearchContentItemNumberWrppaer>
                <SearchContentItemInfoWrapper>
                  <span style={{ fontSize: 12 }}> 목표금액 :</span>
                  <span style={{ fontSize: 12, color: " red" }}>
                    {item.goalMoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                ₩</span> 
                </SearchContentItemInfoWrapper>
              </SearchContentItemWrapper>
            ))}
          </SearchContentWrapper>
        </SearchContetentWrapper>
      </SearchWrapper>
    </Wrapper>
  );
};

export default SearchModal;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
`;

export const SearchWrapper = styled.div`
  width: 38%;
  height: 600px;
  display: flex;
  background-color: #fff;
  margin-right: 150px;
  margin-top: 10px;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 90%;
  height: 40px;
  background-color: #f3f4f5;
  margin-top: 10px;
  border-radius: 20px;
  padding-left: 5%;
  border: none;
  color: #191f28;
`;

export const SearchContetentWrapper = styled.div`
  width: 90%;
  height: 280px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
`;

export const SearchTitleWrapper = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const TitleSpan = styled.span`
  font-size: 13px;
  font-weight: bold;
  font-family: "pretendard";
`;

export const SearchContentWrapper = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: column;
`;

export const SearchContentItemWrapper = styled.div`
  width: 100%;
  height: 45px;
  display: flex;

  justify-content: space-between;
`;

export const SearchContentItemNumberWrppaer = styled.div`
  width: 68%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10%;
`;

export const SearchContentItemNumberProfileWrapper = styled.div`
  width: 90%;
  height: 100%;

  display: flex;

  align-items: center;
`;

export const NumberSpan = styled.span`
  font-size: 13px;
  font-weight: bold;
  font-family: "pretendard";
`;

export const ProfileImg = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 100px;
  background-color: #aeaeae;
  object-fit: cover;
`;

export const SearchContentItemInfoWrapper = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
