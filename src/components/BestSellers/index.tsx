import { StyledBestSellersSession } from "./styles";
import { mockData } from "../../MockDataJs";
import ArrowLeft from '../../assets/left.png'
import ArrowRight from '../../assets/rigth.png'

export const BestSellers = () => {

    const bestSellersProducts = mockData.products.slice(4, 8);

    function navigateToProductDetails(productId: string) {
      window.location.href = `/product/${productId}`;
    } 

    return (
      <StyledBestSellersSession>
        <section className='best-sellers'>
            <h1>OS MAIS VENDIDOS</h1>
            <ul>
                <img className='arrow' src={ArrowLeft} alt="ArrowLeft" />
                {bestSellersProducts.map((product) => (
                <li key={product.id} onClick={() => navigateToProductDetails(product.id.toString())}>
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
      </StyledBestSellersSession>
    );
  };