import React, {useEffect, useState} from 'react'
import axios from "axios";
import CONFIG from '../../config/config.json'
import * as S from "./style";
import useProductRegistration from "../../hooks/product/useProductRegistration";

const Product = () => {
    const {productData, error, loading, handleChange, handleSubmit} = useProductRegistration();
    return (
        <>
            
        </>
    )
}