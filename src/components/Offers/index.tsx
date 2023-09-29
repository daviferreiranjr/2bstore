import { StyledOffersSession } from "./styles";
import ArrowLeft from '../../assets/left.png'
import ArrowRight from '../../assets/rigth.png'
import { mockData } from "../../MockDataJs";

export const Offers = () => {

    const lastProduct = mockData.products[mockData.products.length - 1];
    const productsToRender = Array(4).fill(lastProduct);

    function navigateToProductDetails(productId: string) {
        window.location.href = `/product/${productId}`;
    }

    return (
      <StyledOffersSession>
        <section className='offers'>
            <h1>OFERTAS IMPERDÍVEIS</h1>
            <ul>
                <img className='arrow' src={ArrowLeft} alt="ArrowLeft" />
                {productsToRender.map((product, index) => (
                <li key={index} onClick={() => navigateToProductDetails(product.id.toString())}>
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <div className="div-price">
                        <div className="div-price-value">
                            <p className="original-price">{product.originalPrice}</p> <p>{product.price}</p>
                        </div>
                        <div>
                            <p className="division">{product.division}</p> <span>{product.installment}</span>
                        </div>
                    </div>
                </li>
        ))}
                <img className='arrow' src={ArrowRight} alt="ArrowRight" />
             </ul>
        </section>
      </StyledOffersSession>
    );
  };