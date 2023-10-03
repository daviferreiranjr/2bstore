import { StyledOffersSession } from "./styles";
import ArrowLeft from '../../assets/left.png'
import ArrowRight from '../../assets/rigth.png'
import { useNavigate } from "react-router-dom";
import { Product } from "../../providers/ContextCart";
import { MouseEvent } from 'react';

interface OffersProductProps {
    lastProduct: Product;
    buyProduct: (event: MouseEvent<HTMLButtonElement>, product: Product) => void;
  }

export const Offers = ({  lastProduct, buyProduct }: OffersProductProps) => {

    const navigate = useNavigate();
    const productsToRender = Array(4).fill(lastProduct);

    function navigateToProductDetails(productId: string) {
        navigate(`/product/${productId}`);
    } 

    return (
      <StyledOffersSession>
        <section className='offers'>
            <h1>OFERTAS IMPERDÍVEIS</h1>
            <ul>
                <img className='arrow' src={ArrowLeft} alt="ArrowLeft" />
                {productsToRender.map((product, index) => (
                <li key={index} onClick={() => navigateToProductDetails(product.id.toString())}>
                    <div className="tags">
                      {product.discount && (<p className="tag-discount">{product.discount}</p>)}
                      {product.new && (<p>Novo</p>)}
                      {product.freeShipping && (<p>Frete Grátis</p>)}
                    </div>
                    <img src={product.image} alt={product.name} />
                    <ul className="size-container">
                      {product.size?.map((size: string) => (
                        <li key={size}>{size}</li>
                      ))}
                    </ul>
                    <h2>{product.name}</h2>
                    <div className="div-price">
                        <div className="div-price-value">
                            <p className="original-price">{product.originalPrice}</p> <p>{product.price}</p>
                        </div>
                        <div>
                            <p className="division">{product.division}</p> <span>{product.installment}</span>
                        </div>
                    </div>
                    <button className="buy" onClick={(event) => buyProduct(event, product)}>COMPRAR</button>
                </li>
        ))}
                <img className='arrow' src={ArrowRight} alt="ArrowRight" />
             </ul>
        </section>
      </StyledOffersSession>
    );
  };