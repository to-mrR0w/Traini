/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../UI-reuseable/Button';
import { formatCurrency } from '../../utils/helpers';
import {
  addItem,
  getCurrQuantityById,
  increaseItemQuantity,
} from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrQuantityById(id));
  const isInCart = currentQuantity > 0;
  function handleAddToCart(e) {
    e.preventDefault();
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  function handleIncrease(e) {
    e.preventDefault();
    dispatch(increaseItemQuantity(id));
  }
  return (
    <li className="flex gap-4" key={id}>
      <img
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut && !isInCart && (
            <>
              {' '}
              <Button onClick={handleAddToCart} type="small">
                Add to Cart
              </Button>
            </>
          )}
          {isInCart && (
            <>
              <Button onClick={handleIncrease} type="small">
                {`Increase (${currentQuantity})`}
              </Button>{' '}
              <DeleteItem id={id} />
            </>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
