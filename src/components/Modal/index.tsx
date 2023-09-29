import { StyledModalCart } from "./styles";
import { Product } from  "../../providers/ContextCart"
import { useState, useEffect  } from 'react';
import { IoCloseSharp } from 'react-icons/io5'
import { useNavigate } from "react-router-dom";
import Trash from "../../assets/trash-2.png"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    addProductinCart?: Product | null;
    setaddProductinCart: React.Dispatch<React.SetStateAction<Product | null>>;
  }

export const ModalCart = ({ isOpen, onClose, addProductinCart}: ModalProps) => {

    const navigate = useNavigate();
    const [cart, setCart] = useState<Product[]>([]);
    const [count, setCount] = useState(1);

    const incrementProduct = () => {
        setCount(count + 1);
    };

    const decrementProduct = () => {
        setCount(count - 1);
    };

    const removeFromCart = (productId: string) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
      };
    

    useEffect(() => {
        if (addProductinCart) {
          setCart((prevCart) => [...prevCart, addProductinCart]);
        }
      }, [addProductinCart]);

    console.log(cart)
    if (!isOpen) return null;


  const handleClickDashboard = () => {
    navigate('/');
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
                            <p className="less" onClick={decrementProduct}>-</p>
                            <p>{count}</p>
                            <p className="more" onClick={incrementProduct}>+</p>
                        </div>
                    </div>
                    <div className="cart-products-info-price">
                        <img src={Trash} alt="trash" className="trash-image" onClick={() => removeFromCart(product.id)}/>
                        <div className="info-price">
                            <p className="original-price">{product?.originalPrice}</p> <p>{product?.price}</p>
                        </div>
                    </div>
                </li>
                ) )}
            </ul>
        </div>
        )}
      </div>
    </div>
      </StyledModalCart>
    );
  };