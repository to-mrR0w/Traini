import { useDispatch, useSelector } from 'react-redux';
import Button from '../../UI-reuseable/Button';
import {
  decreaseItemQuantity,
  getCurrQuantityById,
  increaseItemQuantity,
} from './cartSlice';

// eslint-disable-next-line react/prop-types
function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrQuantityById(pizzaId));

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
