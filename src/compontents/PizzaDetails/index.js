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
import Navbar from '../Nav'
import { pizzaData } from '../Menu/data'
import { Link } from 'react-router-dom';

const data = pizzaData;

export default function PizzaDetails(props) {

    const { additem, attachedId } = props
    return (

        <ProductsContainer>
            <Navbar />
            <ProductsHeading>Id:{attachedId}</ProductsHeading>
            <ProductWrapper>
                {data.filter(dat => { if (dat.id === attachedId) return 1 }).map((product) => {
                    return (
                        <ProductCard>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price} zł</ProductPrice>
                                <Link to="/cart" onClick={() => additem(product)}> <ProductButton>Dodaj do koszyka</ProductButton></Link>

                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>


    )
}
