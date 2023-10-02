import { StyledHeader } from './styles'
import Logo2bDigital from '../../assets/logotipo.svg'
import LogoCart from '../../assets/cart.png'
import { useNavigate } from 'react-router-dom';
import { Product } from '../../providers/ContextCart';

interface HeaderProps {
  openModal: () => void;
  cart: Product[];
}

export const Header = ({ openModal, cart }: HeaderProps) => {

  const navigate = useNavigate();

  const handleClickDashboard = () => {
    navigate('/');
  };

  const categoriesNavBar = [
    {
      id: 1,
      titlle: "MASCULINO"
    },
    {
      id: 2,
      titlle: "FEMININO",
    },
    {
      id: 3,
      titlle: "PLUS SIZE",
    },
    {
      id: 4,
      titlle: "JUVENIL",
    },
    {
      id: 5,
      titlle: "INFANTIL",
    },
    {
      id: 6,
      titlle: "ACESSÓRIOS",
    },
  ]

  const countTotalProducts = (cart: Product[]) => {
    let total = 0;
  
    cart.forEach((product: Product) => {
      if (product.quantity) {
        total += product.quantity;
      }
    });
  
    return total;
  };

    return (
      <StyledHeader>
        <div className='div-header'>
            <p><span>Frete Grátis</span> para compras a partir de R$199!</p>
        </div>
        <div className='div-navbar'>
            <img className='logo-image' src={Logo2bDigital} alt='Logo2bDigital' onClick={handleClickDashboard}/>
            <ul>
            {categoriesNavBar.map((el) => (
                <li key={el.id}>
                  {el.titlle}
                </li>
              ))}
                <span>OFERTAS</span>
            </ul>
              <img className='logo-cart' src={LogoCart} alt='LogoCart' onClick={openModal}/>
              <p className='countTotalProducts'>{countTotalProducts(cart)}</p>
        </div>
      </StyledHeader>
    );
  };