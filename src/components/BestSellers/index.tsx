import { StyledBestSellersSession } from "./styles";
import ArrowLeft from '../../assets/left.png'
import ArrowRight from '../../assets/rigth.png'
import { useNavigate } from 'react-router-dom';
import { Product } from "../../providers/ContextCart";
import { MouseEvent } from 'react';

interface BestSellersProductProps {
  bestSellersProducts: Product[];
  buyProduct: (event: MouseEvent<HTMLButtonElement>, product: Product) => void;
}

export const BestSellers = ({ bestSellersProducts, buyProduct }: BestSellersProductProps) => {
    const navigate = useNavigate();

    function navigateToProductDetails(productId: string) {
      navigate(`/product/${productId}`);
    } 

    return (
      <StyledBestSellersSession>
        <section className='best-sellers'>
            <h1>OS MAIS VENDIDOS</h1>
            <ul>
                <img className='arrow' src={ArrowLeft} alt="ArrowLeft" />
                {bestSellersProducts.map((product) => (
                <li key={product.id} onClick={() => navigateToProductDetails(product.id.toString())}>
                  <div className="tags">
                      {product.discount && (<p className="tag-discount">{product.discount}</p>)}
                      {product.new && (<p>Novo</p>)}
                      {product.freeShipping && (<p>Frete Grátis</p>)}
                    </div>
                    <img src={product.image} alt={product.name} />
                    <ul className="size-container">
                      {product.size?.map((size) => (
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
      </StyledBestSellersSession>
    );
  };