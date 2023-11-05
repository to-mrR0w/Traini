import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const user = useSelector((state) => state.user.username);
  return (
    <div className="text-center">
      <h1 className="my-10 mb-4 px-4  text-xl font-semibold sm:my-16 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {user === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Go to Menu {user}
        </Button>
      )}
    </div>
  );
}

export default Home;
