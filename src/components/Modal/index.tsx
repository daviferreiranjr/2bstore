import { StyledModalCart } from "./styles";
import { Product } from  "../../providers/ContextCart"
import { useEffect, useState  } from 'react';
import { IoCloseSharp } from 'react-icons/io5'
import { useNavigate } from "react-router-dom";
import Trash from "../../assets/trash-2.png"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    addProductinCart?: Product | null;
    setaddProductinCart: React.Dispatch<React.SetStateAction<Product | null | undefined>>;
    cart: Product[];
    setCart: React.Dispatch<React.SetStateAction<Product[]>>
  }

export const ModalCart = ({ isOpen, onClose, addProductinCart, setaddProductinCart, cart, setCart}: ModalProps) => {

    const navigate = useNavigate();
    const [total, setTotal] = useState<number>(0);

    const addToProduct = () => {
      const updatedCart = [...cart];
      const item = updatedCart.find((product) => product.id === addProductinCart?.id);
    
      if (item) {
        item.quantity = (item.quantity || 0) + 1;
      } else {
        if(addProductinCart){
          updatedCart.push({ ...addProductinCart, quantity: 1 });
        }
      }
      setCart(updatedCart);
      setaddProductinCart(null)
    };

    useEffect(() => {
      if (addProductinCart) {
        addToProduct();
      }
    }, [addProductinCart]);

    const incrementQuantity = (productId: string) =>{
      const updatedCart = cart.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: (product.quantity || 0) + 1 };
        }
        return product;
  });
  setCart(updatedCart);
    }

    const decrementQuantity = (productId: string) =>{
      const updatedCart = cart.map((product) => {
        if (product.id === productId) {
          const newQuantity = (product.quantity || 0) - 1;
          return { ...product, quantity: Math.max(newQuantity, 1) };
        }
        return product;
  });
  setCart(updatedCart);
    }

    const removeToCart = (productId: string) =>{
      const updatedCart = cart.filter((product) => product.id !== productId);
      setCart(updatedCart);
    }

    useEffect(() => {
      const calculateTotal = () => {
        let sum = 0;
        cart.forEach((product) => {
          const priceWithoutCurrency = product.price.replace("R$", "").replace(",", "");
          const numericPrice = parseFloat(priceWithoutCurrency) / 100;
          const quantity = product.quantity || 0;
    
          if (!isNaN(numericPrice) && !isNaN(quantity)) {
            sum += numericPrice * quantity;
          }
        });
        return parseFloat(sum.toFixed(2));
      };
    
      const newTotal = calculateTotal();
      setTotal(newTotal);
    }, [cart]);

    if (!isOpen) return null;

    const handleClickDashboard = () => {
      navigate('/');
      onClose()
    };

    return (
      <StyledModalCart>
      <div className="modal-overlay">
      <div className="modal">
        <div className="header-modal">
            <h2>Meu Carrinho</h2>
            <IoCloseSharp className="close-button" size={22} onClick={onClose}/>
        </div>
        {cart.length === 0 ? (
            <div className="cart-null">
                <h2>Sua sacola está vazia!</h2>
                <p>Continue navegando em nossa loja para descobrir promoções e os melhores produtos!</p>
                <button onClick={handleClickDashboard}>CONTINUAR COMPRANDO</button>
            </div>
        ) : (
        <div  className="cart-products">
            <ul>
                {cart.map((product) => (
                <li key={product.id}>
                    <img src={product.image} alt="image-product" />
                    <div className="cart-products-info">
                        <p>{product.name}</p>
                        <span>Tamanho: 44</span>
                        <div className="cart-products-info-count">
                            <p className="less" onClick={() => decrementQuantity(product.id)}>-</p>
                            <p>{product.quantity} </p>
                            <p className="more" onClick={() => incrementQuantity(product.id)}>+</p>
                        </div>
                    </div>
                    <div className="cart-products-info-price">
                        <img src={Trash} alt="trash" className="trash-image" onClick={() => removeToCart(product.id)}/>
                        <div className="info-price">
                            <p className="original-price">{product?.originalPrice}</p> <p>{product?.price}</p>
                        </div>
                    </div>
                </li>
                ) )}
                <div className="total-monay">
                  <div className="total-monay-value">
                    <p className="title">Subtotal</p>
                    <p className="price">R$ {total.toFixed(2)}</p>
                  </div>
                  <button>FINALIZAR COMPRA</button>
                </div>

            </ul>
        </div>
        )}
      </div>
    </div>
      </StyledModalCart>
    );
  };