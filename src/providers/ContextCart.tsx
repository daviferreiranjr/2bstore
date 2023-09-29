import { ReactNode, createContext, useState } from 'react';

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
}

interface CartContextType {
    openModal: () => void;
    closeModal: () => void;
    isModalOpen: boolean;
    addProductinCart: Product | null; 
    setaddProductinCart: React.Dispatch<React.SetStateAction<Product | null>>;
  }


export const ContextCart = createContext<CartContextType>({
    openModal: () => {},
    closeModal: () => {},
    isModalOpen: false,
    addProductinCart: null,
    setaddProductinCart: () => {},
});


interface CartProviderProps {
    children: ReactNode;
  }

export const CartProvider = ({ children }: CartProviderProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addProductinCart, setaddProductinCart] = useState<Product | null>(null);


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ContextCart.Provider
      value={{
        openModal,
        closeModal,
        isModalOpen,
        addProductinCart,
        setaddProductinCart
      }}
    >
      {children}
    </ContextCart.Provider>
  );
};