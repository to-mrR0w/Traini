import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';

// eslint-disable-next-line react/prop-types
function CartItem({ item }) {
  // eslint-disable-next-line react/prop-types
  const { name, quantity, totalPrice, pizzaId } = item;
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <DeleteItem id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
