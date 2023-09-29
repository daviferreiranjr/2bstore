import TShirts from '../../assets/banner_01.png'
import Mugs from '../../assets/banner_02.png'
import Squeeze from '../../assets/banner_03.png'
import Bottons from '../../assets/banner_04.png'
import { StyledCategoriesSession } from './styles';

export const Categories = () => {
    return (
      <StyledCategoriesSession>
        <section className='categories'>
            <ul>
                <li><img src={TShirts} alt="TShirts" /></li>
                <li><img src={Mugs} alt="Mugs" /></li>
                <li><img src={Squeeze} alt="Squeeze" /></li>
                <li><img src={Bottons} alt="Bottons" /></li>
            </ul>
        </section>
      </StyledCategoriesSession>
    );
  };