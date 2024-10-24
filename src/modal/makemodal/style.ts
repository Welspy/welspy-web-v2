import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
`;

export const MainWrapper = styled.div`
    width: 40%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

export const ModalCloseButton = styled.button`
    align-self: flex-end;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
`;

export const ImgWrapper = styled.div`
    width: 100%;
    margin: 10px 0;
`;

export const ProductImgInput = styled.input`
    //width: 100%;
    display: none;
    height: 80%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const ProductInputWrapper = styled.div`
    width: 80%;
    margin-left: 10px;
`;

export const ProductRegistrationInputWrapper = styled.div`
    display: flex;
`;

export const TitleInput = styled.input`
    width: 90%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: "pretendard";
    font-weight: 500;
`;

export const ProductDescriptionInput = styled.textarea`
    width: 90%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
    height: 60px;
    font-family: "pretendard";
    font-weight: 500;
`;

export const PriceInputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
`;

export const PriceInput = styled.input`
    width: 37%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: "pretendard";
    font-weight: 500;
    @media (max-width: 600px) {
        width: 100%;
        margin-bottom: 10px;
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 15px 10px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    background-color: #446fb6;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-family: "pretendard";
    font-weight: 500;

    &:hover {
        background-color: #375992;
    }
`;

export const PreviewImage = styled.img`
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: contain;
    border-radius: 5px;
`;

export const DeleteButton = styled.button`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: red;
    color: white;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: darkred;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    //height: 80%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const CustomButton = styled.label`
    display: inline-block;
    padding: 15px 20px;
    background-color: #5b94f3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    transition: background-color 0.3s;
    font-family: "pretendard";
    font-weight: 500;

    &:hover {
        background-color: #5285db;
    }
`;

export const SetDiscountRate = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: "pretendard";
    font-weight: 500;
`;
export const DiscountedPrice = styled.div`
    font-family: "pretendard";
    color: red; // 예시 스타일
    font-size: 16px; // 예시 스타일
`;

export const CateGorryWrapper = styled.div`
    width: 300px;
    height: 220px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

// export const CateGorryMainWrapper = styled.div`
//   width: 100%;
//   height: 82%;
//   border-radius: 5px;
//   border: 1px solid #ccc;
//   padding: 10px;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 5px;
// `;

export const Cartegory = styled.select`
    background-color: #5b94f3;
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: none;
`

export const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;

    input {
        display: none;
    }

    span {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 2px solid #007bff;
        border-radius: 50%;
        margin-right: 10px;
        position: relative;
        background: white;
        transition: background 0.2s;
    }

    input:checked + span {
        background: #007bff;
    }

    input:checked + span::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: white;
    }
`;

export const CateGorryMainWrapper = styled.div`
    margin-top: 15px;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    input {
        margin-bottom: 10px; // 각 입력 필드 간격
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
    }
`;

export const EEE = styled.input`
    width: 60%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: "pretendard";
    font-weight: 500;
    @media (max-width: 600px) {
        width: 100%;
        margin-bottom: 10px;
    }
`;