import { ReactNode, createContext, useState,  MouseEvent } from 'react';

  export interface Product {
    id: string;
    image: string;
    name: string;
    price: string;
    originalPrice?: string;
    division?: string;
    installment?: string;
    new?: boolean;
    freeShipping?: boolean
    quantity?: number
    discount?: string
    size?: string[]
}

interface CartContextType {
    openModal: () => void;
    closeModal: () => void;
    isModalOpen: boolean;
    addProductinCart: Product | null; 
    setaddProductinCart: React.Dispatch<React.SetStateAction<Product | null>>;
    cart: Product[]; 
    setCart: React.Dispatch<React.SetStateAction<Product[]>>
    buyProduct: (event: MouseEvent<HTMLButtonElement>, product: Product) => void;
  }


export const ContextCart = createContext<CartContextType>({
    openModal: () => {},
    closeModal: () => {},
    isModalOpen: false,
    addProductinCart: null,
    setaddProductinCart: () => {},
    cart: [],
    setCart:  () => {},
    buyProduct: () => {}
});


interface CartProviderProps {
    children: ReactNode;
  }

export const CartProvider = ({ children }: CartProviderProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addProductinCart, setaddProductinCart] = useState<Product | null>(null);
    const [cart, setCart] = useState<Product[]>([]);


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
    setIsModalOpen(false);
  };

  const buyProduct = (event: MouseEvent<HTMLButtonElement>, product: Product) => {
      event.stopPropagation();
      setaddProductinCart(product);
      openModal()
    };

  return (
    <ContextCart.Provider
      value={{
        openModal,
        closeModal,
        isModalOpen,
        addProductinCart,
        setaddProductinCart,
        cart,
        setCart,
        buyProduct
      }}
    >
      {children}
    </ContextCart.Provider>
  );
};