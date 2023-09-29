import { Header } from "../../components/Header";
import { StyledDashboard } from "./styles";
import Banner from '../../assets/banner principal.png'
import { Categories } from "../../components/Categories";
import { Realises } from "../../components/Releases";
import { BestSellers } from "../../components/BestSellers";
import { Offers } from "../../components/Offers";
import { Footer } from "../../components/Footer";
import { useContext } from "react";
import { ContextCart } from "../../providers/ContextCart"
import { ModalCart } from "../../components/Modal";



export const Dashboard = () =>{
    const { openModal, isModalOpen, closeModal, addProductinCart, setaddProductinCart} = useContext(ContextCart);

    return(
        <StyledDashboard>
            <Header openModal={openModal}/>
            <div className="div-banner">
                <img className='logo-banner' src={Banner} alt='Banner' />
            </div>
            <div className="container-products">
                <Realises />
                <BestSellers />
                <Categories />
                <Offers />
                <Footer />
                <ModalCart isOpen={isModalOpen} onClose={closeModal} addProductinCart={addProductinCart} setaddProductinCart={setaddProductinCart}/>
            </div>

        </StyledDashboard>
    )
}