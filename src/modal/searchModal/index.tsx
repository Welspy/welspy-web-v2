import { SetStateAction } from "react";
import styled from "styled-components";

interface Props {
    search: boolean;
    setSearch: React.Dispatch<SetStateAction<boolean>>;
}

const SearchModal = ({ setSearch, search }: Props) => {
    return (
        <Wrapper
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    setSearch(!search);
                }
            }}
        >
            <SearchWrapper>
                <SearchInput placeholder="검색어를 입력해주세요"></SearchInput>
                <SearchContetentWrapper>
                    <SearchTitleWrapper>
                        <TitleSpan>인기검색</TitleSpan>
                        <TitleSpan>오늘 14:38기준</TitleSpan>
                    </SearchTitleWrapper>
                    <SearchContentWrapper>
                        <SearchContentItemWrapper>
                            <SearchContentItemNumberWrppaer>
                                <NumberSpan>1</NumberSpan>
                                <SearchContentItemNumberProfileWrapper>
                                    <ProfileImg />
                                    <NumberSpan>자동차 사기</NumberSpan>
                                </SearchContentItemNumberProfileWrapper>
                            </SearchContentItemNumberWrppaer>
                            <SearchContentItemInfoWrapper></SearchContentItemInfoWrapper>
                        </SearchContentItemWrapper>
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
  height: 500px;
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
  height: 35px;
  display: flex;

  justify-content: space-between;
`;

export const SearchContentItemNumberWrppaer = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchContentItemNumberProfileWrapper = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  justify-content: space-between;
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
`;

export const SearchContentItemInfoWrapper = styled.div`
  width: 30%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  align-items: center;
`;