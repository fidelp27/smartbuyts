import { useRoutes } from 'react-router-dom';
import React from 'react';
import {Home} from '../Pages/Home';
import { Orders } from '../Pages/Orders';
import { NotFound } from '../Pages/NotFound';
import { Order } from '../Pages/Order';
import { SignIn } from '../Pages/SignIn';
import { Account } from '../Pages/Account';

export const AppRoutes: React.FC = ()=>{
    let routes = useRoutes([
      {path: '/', element: <Home />},
      {path: '/signin', element: <SignIn />},
      {path: '/account', element: <Account />},
      {path: '/orders',element: <Orders />},      
      {path: '/order/:id', element: <Order />},
      {path: '*', element: <NotFound />},

    ])
    return routes;
  }