import { useRoutes } from 'react-router-dom';
import React, { useContext } from 'react';
import {Home} from '../Pages/Home';
import { Orders } from '../Pages/Orders';
import { NotFound } from '../Pages/NotFound';
import { SignIn } from '../Pages/SignIn';
import { Account } from '../Pages/Account';
import { ContextApp } from '../Context';

export const AppRoutes: React.FC = ()=>{
  const {orders} = useContext(ContextApp);
    let routes = useRoutes([
      {path: '/', element: <Home />},
      {path: '/all', element: <Home />},
      {path: '/clothes', element: <Home />},
      {path: '/electronics', element: <Home />},
      {path: '/furniture', element: <Home />},
      {path: '/others', element: <Home />},
      {path: '/signin', element: <SignIn />},
      {path: '/account', element: <Account />},
      {path: '/orders',element: <Orders orders={orders}/>},      
      {path: '*', element: <NotFound />},

    ])
    return routes;
  }