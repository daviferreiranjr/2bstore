import { StyledHeader } from './styles'
import Logo2bDigital from '../../assets/logotipo.svg'
import LogoCart from '../../assets/cart.png'
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  openModal: () => void;
}

export const Header = ({ openModal }: HeaderProps) => {

  const navigate = useNavigate();

  const handleClickDashboard = () => {
    navigate('/');
  };

    return (
      <StyledHeader>
        <div className='div-header'>
            <p><span>Frete Grátis</span> para compras a partir de R$199!</p>
        </div>
        <div className='div-navbar'>
            <img className='logo-image' src={Logo2bDigital} alt='Logo2bDigital' onClick={handleClickDashboard}/>
            <ul>
                <li>MASCULINO</li>
                <li>FEMININO</li>
                <li>PLUS SIZE</li>
                <li>JUVENIL</li>
                <li>INFANTIL</li>
                <li>ACESSÓRIOS</li>
                <span>OFERTAS</span>
            </ul>
            <img className='logo-cart' src={LogoCart} alt='LogoCart' onClick={openModal}/>
        </div>
      </StyledHeader>
    );
  };