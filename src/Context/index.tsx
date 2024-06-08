import { createContext, useEffect, useState } from "react";
import {  ChildrenProps, ContextProps, ProductProps, CartProps, CardProps, OrderProps } from "../Interfaces";
import { v4 as uuidv4 } from 'uuid';
import {useDebounce} from "../CustomHooks";

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
    openedAsideOrderDetail: false,
    setOrderDetail: (order: OrderProps) => {},
    orderDetail: null,
    handleAsideOrderDetail: (order: OrderProps) => {},
    search: "",
    setSearch: () => {}
}
export const ContextApp = createContext<ContextProps>(defaultProps);

export const ContextAppProvider:React.FC<ChildrenProps> = ({ children }) => {
    const [items, setItems] = useState<ProductProps[]>([]);
    const [cartItems, setCartItems] = useState<CartProps[]>([]);
    const [filteredItems, setFilteredItems] = useState<ProductProps[]>(items);
    const [openedAside, setOpenedAside] = useState<boolean>(false);
    const [openedAsideCart, setOpenedAsideCart] = useState<boolean>(false);
    const [openedAsideOrderDetail, setOpenedAsideOrderDetail] = useState<boolean>(false);
    const [productDetail, setProductDetail] = useState<CardProps | null>(null);
    const [orders, setOrders] = useState<OrderProps[]>([]);
    const [orderDetail, setOrderDetail] = useState<OrderProps | null>(null);
    const [search, setSearch] = useState<string>("");
    
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
    // Filter logic
    const filterItems = (category:string) => {        
        if(category === "") return setFilteredItems(items);
        const newItems = items.filter(item => {
            if(category ==="Others"){
                const categories = ["Electronics", "Clothes", "Furniture"]
                return !categories.includes(item.category.name)
            }
            return item.category.name === category;
        });
        setFilteredItems(newItems);
    }
    
    const debouncedSearch = useDebounce(search, 500);
    
    
    //aside logic
    const handleOpenAside= () => {
        setOpenedAside(true);
        setOpenedAsideCart(false);
    }
    const handleCloseAside = () => {
        setOpenedAside(false);
        setOpenedAsideCart(false);
        setOpenedAsideOrderDetail(false);
    }
    //Cart aside logic
    const handleOpenAsideCart= () => {
        setOpenedAsideCart(true);
        setOpenedAside(false);
        setOpenedAsideOrderDetail(false);
    }
   // Orders logic
   const addOrder = (products:CartProps[], totalAmount: number, totalItems: number) => {
        const newOrder = {id: uuidv4(), totalAmount: totalAmount, totalItems: totalItems, createdAt: new Date().toISOString(), items: products};
        setOrders([...orders, newOrder]);
        setOpenedAsideCart(false);
        setCartItems([]);        
   }
   // Order detail logic
   const handleAsideOrderDetail = (order: OrderProps) => {
    setOpenedAsideOrderDetail(true);
    setOrderDetail(order);
    setOpenedAsideCart(false);
    setOpenedAside(false);        
   }

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

    useEffect(() => {
        if (debouncedSearch.length > 0) {
            setFilteredItems(items.filter(item => item.title.toLowerCase().includes(debouncedSearch.toLowerCase())));
          } else {
            setFilteredItems(items);
          }
    }, [debouncedSearch, items])

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
        handleAsideOrderDetail,
        openedAsideOrderDetail,
        setOrderDetail,
        orderDetail,
        search,
        setSearch
      };

    return(
        <ContextApp.Provider value={contextValue}>
            {children}
        </ContextApp.Provider>
    )
}