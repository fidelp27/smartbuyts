import React, { useContext } from 'react';
import './App.css';
import { AppRoutes } from '../../Routes/AppRoutes';
import { NavBar } from '../../Components/Navbar';
import { ContextApp } from '../../Context';
import { AsideCartItems } from '../AsideCartItems';
import { LayoutAside } from '../../Components/LayoutAside';
import { ProductDetails } from '../../Components/ProductDetail';
/*
Pasar la lógica para mostrar detalles de producto o carrito a app directamente. Condicionar para mostrar uno u otro
*/ 
const App:React.FC=()=>{
  const {cartItems, productDetail, openedAsideCart, openedAside} = useContext(ContextApp);
  return (
    <>  
    <NavBar/>  
    <AppRoutes />
    <LayoutAside title={openedAsideCart ? "Cart" : "Specifications"}>
      {openedAsideCart && cartItems && <AsideCartItems items={cartItems} />}
      {openedAside && productDetail && <ProductDetails title={productDetail.title} price={productDetail.price} description={productDetail.description} img={productDetail.img} category={productDetail.category} />}
    </LayoutAside>
    </>
  );  
}
export default App;
