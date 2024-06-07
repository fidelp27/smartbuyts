import React, { useContext } from 'react';
import './App.css';
import { AppRoutes } from '../../Routes/AppRoutes';
import { NavBar } from '../../Components/Navbar';
import { ContextApp } from '../../Context';
import { AsideCartItems } from '../../Components/AsideCartItems';
import { LayoutAside } from '../../Components/LayoutAside';
import { ProductDetails } from '../../Components/ProductDetail';
import { OrderDetail } from '../../Components/OrderDetail';
/*
Pasar la lógica para mostrar detalles de producto o carrito a app directamente. Condicionar para mostrar uno u otro
*/ 
const App:React.FC=()=>{
  const {cartItems, productDetail, openedAsideCart, openedAside, openedAsideOrderDetail, orderDetail} = useContext(ContextApp);
  return (
    <>  
    <NavBar/>  
    <AppRoutes />
    <LayoutAside title={openedAsideCart ? "Cart" : openedAside ? "Specifications" : "Order Detail"}>
      {openedAsideCart && cartItems && <AsideCartItems items={cartItems} />}
      {openedAside && productDetail && <ProductDetails title={productDetail.title} price={productDetail.price} description={productDetail.description} img={productDetail.img} category={productDetail.category} />}
      {openedAsideOrderDetail && orderDetail && <OrderDetail 
        items={orderDetail.items}
        totalAmount={orderDetail.totalAmount}
        totalItems={orderDetail.totalItems}
        createdAt={orderDetail.createdAt}
        id={orderDetail.id}
        />}
    </LayoutAside>
    </>
  );  
}
export default App;
