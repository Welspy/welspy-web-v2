import * as S from "./style";

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
}

const Modal = ({ setModal, modal }: Props) => {
  const ClickModal = () => {
    setModal(!modal);
  };
  return (
    <S.Wrapper onClick={ClickModal}>
      <S.MainWrapper></S.MainWrapper>
    </S.Wrapper>
  );
};

export default Modal;
