import { StyledFooter } from "./styles";
import Logo2BDigital from '../../assets/logotipo-2bigital.svg'

export const Footer = () => {
    return (
      <StyledFooter>
        <div className="div-container">
            <div className="div-infos">
                <h2>© 2022 AGÊNCIA 2B DIGITAL</h2>
                <div className="div-infos-address">
                    <p>Avenida Ibirapuera, 2315 - Moema, São Paulo</p>
                    <p>Loja fictícia desenvolvida para fins de estudos e testes</p>
                </div>
            </div>
            <img src={Logo2BDigital} alt="Logo2BDigital" />
        </div>
      </StyledFooter>
    );
  };