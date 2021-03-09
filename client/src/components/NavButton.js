import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavButton({ name, path }) {
  return (
    <Link to={path}>
      <button>{name}</button>
    </Link>
  );
}

NavButton.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string
}

export default NavButton;