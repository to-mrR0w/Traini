import { useFetcher } from 'react-router-dom';
import Button from '../../UI-reuseable/Button';
import { updateOrder } from '../../services/apiRestaurant';

// eslint-disable-next-line react/prop-types
function UpdateOrder({ order }) {
  console.log(order);
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      {' '}
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
// eslint-disable-next-line react/prop-types
export async function action({ request, params }) {
  console.log(request, params);
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
