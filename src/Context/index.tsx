import { createContext, useEffect, useState } from "react";
import {  ChildrenProps, ContextProps, ProductProps, CartProps, CardProps, OrderProps } from "../Interfaces";
import { v4 as uuidv4 } from 'uuid';

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
    setProductDetail: (item:CardProps) => {},
    openedAsideCart: false,
    handleOpenAsideCart: () => {},
    addOrder: (products:CartProps[], totalAmount: number, totalItems: number) => {},
    orders: [],
}
export const ContextApp = createContext<ContextProps>(defaultProps);

export const ContextAppProvider:React.FC<ChildrenProps> = ({ children }) => {
    const [items, setItems] = useState<ProductProps[]>([]);
    const [cartItems, setCartItems] = useState<CartProps[]>([]);
    const [filteredItems, setFilteredItems] = useState<ProductProps[]>(items);
    const [openedAside, setOpenedAside] = useState<boolean>(false);
    const [openedAsideCart, setOpenedAsideCart] = useState<boolean>(false);
    const [productDetail, setProductDetail] = useState<CardProps | null>(null);
    const [orders, setOrders] = useState<OrderProps[]>([]);
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
        setOpenedAsideCart(false);
    }
    const handleCloseAside = () => {
        setOpenedAside(false);
        setOpenedAsideCart(false);
    }
    //Cart aside logic
    const handleOpenAsideCart= () => {
        setOpenedAsideCart(true);
        setOpenedAside(false);
    }
   // Orders logic
   const addOrder = (products:CartProps[], totalAmount: number, totalItems: number) => {
        const newOrder = {id: uuidv4(), totalAmount: totalAmount, totalItems: totalItems, createdAt: new Date().toISOString(), items: products};
        setOrders([...orders, newOrder]);
        console.log(uuidv4());
        
        setCartItems([]);
        
   }
   console.log(orders);

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
        setProductDetail,
        openedAsideCart,
        handleOpenAsideCart,
        addOrder,
        orders,
      };

    return(
        <ContextApp.Provider value={contextValue}>
            {children}
        </ContextApp.Provider>
    )
}