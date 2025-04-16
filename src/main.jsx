import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Profile from './Profile.jsx';
import HomePage from './HomePage.jsx';
import ProductsPage from './ProductsPage.jsx';
import ProductDetail from './ProductDetail.jsx';
import WishListPage from './WishListPage.jsx';
import UserCart from './UserCart.jsx';

const router=createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<HomePage/>
    },
    {
      path:'/profile',
      element:<Profile/>
    
  },
    {
      path:'/product',
      element:<ProductsPage/>
    
  },
    {
      path:'/productDetail',
      element:<ProductDetail />
    
  },
    {
      path:'/wishList',
      element:<WishListPage />
    
  },
    {
      path:'/yourCart',
      element:<UserCart />
    
  },
  
]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
