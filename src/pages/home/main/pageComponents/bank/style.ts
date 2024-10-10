import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ChallengePaidWrapper = styled.div`
  width: 30%;
  height: 80%;
  display: flex;

  flex-direction: column;
  border: 1px solid black;
`;

export const BankWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
`;

export const MyBankWrapper = styled.div`
  margin-top: 5px;
  background-color: #f5f5f5;
  width: 100%;
  height: 28%;
  display: flex;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const MyBankMainWrapper = styled.div`
  width: 90%;
  height: 75%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const MyBankInfoWrapper = styled.div`
  width: 50%;
  height: 50%;

  display: flex;
  transform: translateX(2rem);
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
  font-family: "pretendard";
`;

export const InfoSpan = styled.span`
  font-size: 30px;
  font-weight: 670;
  font-family: "pretendard";
`;

export const ChargeButton = styled.button`
  width: 120px;
  height: 70px;
  border-radius: 15px;
  border: 1px solid #c7c7c7;
  transform: translateX(27.5rem);
  font-size: 25px;
  font-family: "pretendard";
  background-color: #fff;
`;

export const BankLogWrapper = styled.div`
  height: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BankLogItemWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  display: flex;
  flex-direction: column;
`;

export const BankLogItemTitle = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BankLogTitleSpan = styled.span`
  font-size: 28px;
  font-weight: 600;
  font-family: "pretendard";
`;

export const BankLogInfoWrapper = styled.div`
  width: 100%;
  height: auto;
  flex-direction: column;
  display: flex;
  margin-top: 30px;
`;

export const BankLogInfoItemWrapper = styled.div`
  width: 100%;
  height: 80px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #eaecef;
  }
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BankLogInfoPic = styled.img`
  width: 50px;
  height: 50px;
  background-color: #aeaeae;
  border-radius: 100px;
`;

export const BankLogInfoContent = styled.div`
  width: 85%;
  height: 50px;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
`;

export const InfoContentSpan = styled.span`
  font-size: 17px;
  font-family: "pretendard";
`;
