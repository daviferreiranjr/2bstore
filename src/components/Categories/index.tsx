import TShirts from '../../assets/banner_01.png'
import Mugs from '../../assets/banner_02.png'
import Squeeze from '../../assets/banner_03.png'
import Bottons from '../../assets/banner_04.png'
import { StyledCategoriesSession } from './styles';

export const Categories = () => {

  const categories = [
    {
      id: 1,
      src: TShirts,
      alt: "TShirts"
    },
    {
      id: 2,
      src: Mugs,
      alt: "Mugs"
    },
    {
      id: 3,
      src: Squeeze,
      alt: "Squeeze"
    },
    {
      id: 4,
      src: Bottons,
      alt: "Bottons"
    },
  ]
    return (
      <StyledCategoriesSession>
        <section className='categories'>
            <ul>
              {categories.map((el) => (
                <li key={el.id}>
                  <img src={el.src} alt={el.alt} />
                </li>
              ))}
            </ul>
        </section>
      </StyledCategoriesSession>
    );
  };