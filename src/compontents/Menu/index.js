import Navbar from '../Nav'
import { MenuContainer } from './Menuelements'


import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './Menuelements';
import { Link } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import Context from '../../store/context'

const Products = ({ head, data }) => {

    const { state, actions } = useContext(Context);
    return (

        <ProductsContainer>
            <Navbar />
            <ProductsHeading>Wybierz rozważnie</ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price} zł</ProductPrice>
                                <Link to="/ProductDetails" onClick={() => {
                                    actions({ type: 'setState', payload: { ...state, value: product.id } })
                                }}>
                                    <ProductButton>{product.butt}</ProductButton></Link>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>


    )
}

export default Products
export const Pizzaid2 = Products.Pizzaid
