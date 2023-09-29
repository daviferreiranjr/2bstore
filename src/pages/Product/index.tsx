import { useParams } from "react-router-dom";
import { BestSellers } from "../../components/BestSellers"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { InfoProduct } from "../../components/InfoProduct"
import { DescriptionProduct } from "../../components/ProductDescription"
import { StyledInfoProduct } from "./styles"
import { ModalCart } from "../../components/Modal";
import { useContext } from "react";
import { ContextCart } from "../../providers/ContextCart"


export const InfoProductPage = () => {
    const { id } = useParams();
    const { openModal, isModalOpen, closeModal, addProductinCart, setaddProductinCart} = useContext(ContextCart);

    return(
        <StyledInfoProduct>
            <Header openModal={openModal}/>
            <InfoProduct productId={id} setaddProductinCart={setaddProductinCart}/>
            <DescriptionProduct />
            <BestSellers />
            <Footer />
            <ModalCart isOpen={isModalOpen} onClose={closeModal} addProductinCart={addProductinCart} setaddProductinCart={setaddProductinCart}/>
        </StyledInfoProduct>
    )
}