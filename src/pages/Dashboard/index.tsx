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
import { mockData } from "../../MockDataJs";



export const Dashboard = () =>{
    const { openModal, isModalOpen, closeModal, addProductinCart, setaddProductinCart, cart, setCart, buyProduct } = useContext(ContextCart);
    const realeasesProducts = mockData.products.slice(0, 4);
    const bestSellersProducts = mockData.products.slice(4, 8);
    const lastProduct = mockData.products[mockData.products.length - 1];

    return(
        <StyledDashboard>
            <Header openModal={openModal} cart={cart}/>
            <div className="div-banner">
                <img className='logo-banner' src={Banner} alt='Banner' />
            </div>
            <div className="container-products">
                <Realises realeasesProducts={realeasesProducts} buyProduct={buyProduct}/>
                <BestSellers bestSellersProducts={bestSellersProducts} buyProduct={buyProduct}/>
                <Categories />
                <Offers lastProduct={lastProduct} buyProduct={buyProduct}/>
                <Footer />
                <ModalCart isOpen={isModalOpen} onClose={closeModal} addProductinCart={addProductinCart} setaddProductinCart={setaddProductinCart}
                cart={cart} setCart={setCart}
                />
            </div>

        </StyledDashboard>
    )
}