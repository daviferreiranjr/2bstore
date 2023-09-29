import { StyledRealisesSession } from "./styles";
import ArrowLeft from '../../assets/left.png'
import ArrowRight from '../../assets/rigth.png'
import { mockData } from "../../MockDataJs";

export const Realises = () => {

    const realeasesProducts = mockData.products.slice(0, 4);

    function navigateToProductDetails(productId: string) {
      window.location.href = `/product/${productId}`;
    }

    return (
      <StyledRealisesSession>
        <section className='realises'>
            <h1>LANÇAMENTOS</h1>
            <ul>
                <img className='arrow' src={ArrowLeft} alt="ArrowLeft" />
                {realeasesProducts.map((product) => (
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
      </StyledRealisesSession>
    );
  };