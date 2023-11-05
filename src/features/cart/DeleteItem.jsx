import { useDispatch } from 'react-redux';
import Button from '../../UI-reuseable/Button';
import { deleteItem } from './cartSlice';

// eslint-disable-next-line react/prop-types
function DeleteItem({ id }) {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(deleteItem(id))} type="small">
      Delete
    </Button>
  );
}

export default DeleteItem;
