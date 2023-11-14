import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './UI-reuseable/Home';
import Menu, { menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import Order, { orderLoader } from './features/order/Order';
import CreateOrder, { createOrderAction } from './features/order/CreateOrder';
import AppLayout from './UI-reuseable/AppLayout';
import Error from './UI-reuseable/Error';
import { action as updateOrderAction } from './features/order/UpdateOrder';

const router = createBrowserRouter([
  {
    element: <AppLayout />, //Layout Route
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        action: updateOrderAction,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
