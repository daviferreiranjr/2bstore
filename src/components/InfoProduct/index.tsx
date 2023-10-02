import { StyledProductDetails } from "./styles";
import { Product } from "../../providers/ContextCart";
import { MouseEvent } from 'react';

interface ProductInfoProps {
  product?: Product
  setaddProductinCart: React.Dispatch<React.SetStateAction<Product | null>>;
  buyProduct: (event: MouseEvent<HTMLButtonElement>, product: Product) => void;
}

export const InfoProduct = ({ product, buyProduct }: ProductInfoProps) => {

    return (
      <StyledProductDetails>
        <section className="info-images">
          <div className="extra-images">
            <img src={product?.image} alt="image" />
            <img src={product?.image} alt="image" />
            <img src={product?.image} alt="image" />
          </div>
          <div className="cover-image">
            <img src={product?.image} alt="image" />
          </div>
        </section>

        <section className="info-product">  
          <div className="tittle">
            <h1>{product?.name}</h1>
            <p>Ref.: 2B2022TIB</p>
          </div>
          <div className="price">
            <p className="original-price">{product?.originalPrice}</p> <p>{product?.price}</p>
            <p className="division">{product?.division}</p> <span>{product?.installment}</span>
          </div>
          <div className="size">
            <div className="size-select">
              <h3>Tamanho</h3><p>Selecione</p>
            </div>
            <ul className="size-container">
              {product?.size?.map((size) => (
              <li key={size}>{size}</li>
            ))}
            </ul>
          </div>
          <button className="buyProduct" onClick={(event) => buyProduct(event, product)}>ADICIONAR AO CARRINHO</button>

          
            <div className="info-shipping-container">
              <h3>Calcular frete e prazo</h3>
              <div className="info-shipping-value">
                <p>01234 - 000</p>
                <button>CALCULAR</button>
                <a>Não sei o CEP</a>
              </div>
            <div/>
            
            <div className="info-shipping-value-result">
              <div className="info-shipping-option">
                <p>Frete Expresso</p>
                <p>2 à 6 dias</p>
              </div>
            <p>R$ 19,90</p>
            </div>

            <div className="info-shipping-value-result">
              <div className="info-shipping-option">
                <p>Normal</p>
                <p>4 à 15 dias</p>
              </div>
            <p>R$ 12,90</p>
            </div>
          </div>
        </section>
      </StyledProductDetails>
    );
  };