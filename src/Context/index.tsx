import { createContext, useEffect, useState } from "react";
import {  ChildrenProps, ContextProps, ProductProps, CartProps, CardProps } from "../Interfaces";


const defaultProps : ContextProps = {
    items: [],
    cartItems: [],
    filteredItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    filterItems: () => {},
    totalItemsCart: ()=> 0,
    totalAmountCart: ()=> 0,
    openedAside: false,
    handleOpenAside: () => {},
    handleCloseAside: () => {},
    productDetail: null,
    setProductDetail: (item:CardProps) => {}
}
export const ContextApp = createContext<ContextProps>(defaultProps);

export const ContextAppProvider:React.FC<ChildrenProps> = ({ children }) => {
    const [items, setItems] = useState<ProductProps[]>([]);
    const [cartItems, setCartItems] = useState<CartProps[]>([]);
    const [filteredItems, setFilteredItems] = useState<ProductProps[]>(items);
    const [openedAside, setOpenedAside] = useState<boolean>(false);
    const [productDetail, setProductDetail] = useState<CardProps | null>(null);
    // Cart logic
    const addToCart = (item: CartProps) => {
        setCartItems((prevCartItems) => {
          const existingProduct = prevCartItems.find((cartItem) => cartItem.title === item.title);
          if (existingProduct) {
            return prevCartItems.map((cartItem) =>
              cartItem.title === item.title ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
            );
          } else {
            return [...prevCartItems, { ...item, qty: 1 }];
          }
        });
      };

    const totalItemsCart =(items:CartProps[] ): number=>{
        return items.reduce((total, item)=> total + item.qty,0)
    }
    const totalAmountCart =(items:CartProps[] ): number=>{
        return items.reduce((total, item)=> total + item.price * item.qty,0)
    }
    const removeFromCart = (item:CartProps) => {
        const newCart = cartItems.filter(cartItem => cartItem.title !== item.title);
        setCartItems(newCart);
    }

    const filterItems = (category:string) => {
        const newItems = items.filter(item => item.category.name === category);
        setFilteredItems(newItems);
    }
    //aside logic
    const handleOpenAside= () => {
        setOpenedAside(true);
    }
    const handleCloseAside = () => {
        setOpenedAside(false);
    }
    //Product detail logic

    // products logic
    useEffect(() => {
        const getData = async () => {
            try{
                const response = await fetch("https://api.escuelajs.co/api/v1/products");
                if(!response.ok){
                throw new Error("We can't get data from the server");
                }
                const data:ProductProps[] = await response.json();
                setItems(data);     
                                
            }catch(error){
                console.error(error);
            }
        }
        getData();
    },[])
    const contextValue = {
        items,
        cartItems,
        addToCart,
        removeFromCart,
        filteredItems,
        filterItems,
        totalItemsCart,
        totalAmountCart,
        openedAside,
        handleOpenAside,
        handleCloseAside,
        productDetail,
        setProductDetail
      };

    return(
        <ContextApp.Provider value={contextValue}>
            {children}
        </ContextApp.Provider>
    )
}