import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';
import { useSelector } from 'react-redux';

function AppLayout() {
  let { cart } = useSelector((state) => state.cart);

  const navigation = useNavigation();
  // eslint-disable-next-line no-unused-vars
  const isLoading = navigation.state === 'loading';
  return (
    <div className=" grid h-screen  grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}
      <Header />
      <div className=" overflow-scroll">
        <main className="">
          <Outlet />
        </main>
      </div>
      {cart.length === 0 ? null : <CartOverview />}
    </div>
  );
}

export default AppLayout;
