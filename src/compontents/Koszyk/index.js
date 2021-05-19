import React from 'react';
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
} from '../Menu/Menuelements';
import Navbar from '../Nav';

export default function Koszyk(props) {
    const { Cart, additem, removeitem, wipeCart } = props;
    const PriceSummary = Cart.reduce((a, c) => a + c.price * c.qty, 0);

    return (

        <ProductsContainer>
            <Navbar />
            <ProductsHeading>Koszyk</ProductsHeading>
            <ProductWrapper>
                {Cart.length === 0 && <div>Koszyk jest pusty</div>}
                {Cart.map((item) => (
                    <ProductCard key={item.id}>

                        <ProductImg src={item.img} alt={item.alt} />
                        <ProductInfo>
                            <ProductTitle>{item.name}</ProductTitle>
                            <ProductDesc>{item.desc}</ProductDesc>
                            <ProductPrice>{item.qty} x {item.price.toFixed(2)} zł
                                </ProductPrice>
                            <div>
                                <ProductButton onClick={() => additem(item)}>+ </ProductButton>
                                <ProductButton onClick={() => removeitem(item)}>- </ProductButton>
                            </div>


                        </ProductInfo>

                    </ProductCard>

                ))}
                {Cart.length !== 0 && (
                    <ProductCard>
                        <ProductInfo>
                            <ProductTitle>Podsumowanie</ProductTitle>
                            <ProductDesc>Należność</ProductDesc>
                            <ProductPrice>{PriceSummary.toFixed(2)} zł</ProductPrice>
                            <ProductButton onClick={() => wipeCart()}>Zapłać </ProductButton>
                        </ProductInfo>

                    </ProductCard>

                )}
            </ProductWrapper>
        </ProductsContainer>



    )

}