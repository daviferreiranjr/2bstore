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
import { mockData } from "../../MockDataJs";


export const InfoProductPage = () => {
    const { id } = useParams();
    const { openModal, isModalOpen, closeModal, addProductinCart, setaddProductinCart, cart, setCart, buyProduct} = useContext(ContextCart);
    const product = mockData.products.find((product) => product.id === id);
    const bestSellersProducts = mockData.products.slice(4, 8);

    return(
        <StyledInfoProduct>
            <Header openModal={openModal}/>
            <InfoProduct product={product} setaddProductinCart={setaddProductinCart} buyProduct={buyProduct}/>
            <DescriptionProduct />
            <BestSellers bestSellersProducts={bestSellersProducts} buyProduct={buyProduct}/>
            <Footer />
            <ModalCart isOpen={isModalOpen} onClose={closeModal} addProductinCart={addProductinCart} setaddProductinCart={setaddProductinCart}
            cart={cart} setCart={setCart}/>
        </StyledInfoProduct>
    )
}