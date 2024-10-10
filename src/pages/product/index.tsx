import React, { useState } from 'react';
import ProductRegistrationModal from 'src/modal/productRegistrationModal';
import * as S from "./style"

const ProductRegistrationForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <S.FormWrapper>
            <S.RegisterButton onClick={handleOpenModal}>제품 등록</S.RegisterButton>
            {isModalOpen && <ProductRegistrationModal onClose={handleCloseModal} />}
        </S.FormWrapper>
    );
};

export default ProductRegistrationForm;
