import PropTypes from 'prop-types';
import { StyledButton } from '../sharedStyles.js';
import { Link } from 'react-router-dom';

function NavButton({ name, path }) {
  return (
    <Link to={path}>
      <StyledButton>{name}</StyledButton>
    </Link>
  );
}

NavButton.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default NavButton;