import { Link } from 'react-router-dom';

function Button(props) {
  // const className =
  //   'inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4';

  // eslint-disable-next-line react/prop-types
  const { type, children, disabeld, to, onClick } = props;
  const base =
    'text-sm inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-offset-2 disabled:cursor-not-allowed ';
  const styles = {
    primary: base + ' px-4 py-3 sm:px-6 sm:py-4 ',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'text-sm inline-block rounded-full px-4 py-3 sm:px-6 sm:py-4 bg-transparant border-2 border-stone-300  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-600 focus:ring-offset-2 disabled:cursor-not-allowed ',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabeld}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabeld}>
      {children}
    </button>
  );
}

export default Button;
