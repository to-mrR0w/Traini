import LinkButton from '../../UI-reuseable/LinkButton';
import Button from '../../UI-reuseable/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  let cart = useSelector(getCart);
  if (cart.length === 0) return <EmptyCart />;
  function handleClear(e) {
    e.preventDefault();
    console.log('daw');
    dispatch(clearCart());
  }
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mt-3 divide-y divide-stone-300 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button onClick={handleClear} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
