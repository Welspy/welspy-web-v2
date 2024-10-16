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
    width: 90%;
    max-width: 600px;
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
    height: 80%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const ProductInputWrapper = styled.div`
    width: 100%;
    margin: 10px 0;
`;
export const ProductRegistrationInputWrapper = styled.div`
    display: flex;
`

export const TitleInput = styled.input`
    width: 90%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const ProductDescriptionInput = styled.textarea`
    width: 90%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
    height: 60px;
`;

export const PriceInputWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const PriceInput = styled.input`
    width: 40%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;

    @media (max-width: 600px) {
        width: 100%;
        margin-bottom: 10px;
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    background-color: black;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #444;
    }
`;

// 기존 스타일에 추가

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
