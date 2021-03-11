import PropTypes from 'prop-types';
import NavButton from './NavButton';
import styled from 'styled-components';
import { StyledButton } from '../sharedStyles.js';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
`;

function Header({ changeModal }) {
  return (
    <StyledHeader>
      <NavButton name='Home' path='/'/>
      <NavButton name='Table View' path='/TableView'/>
      <NavButton name='Chart View' path='/ChartView'/>
      <StyledButton onClick={() => changeModal(true)}>Track</StyledButton>
    </StyledHeader>
  );
}

Header.propTypes = {
  changeModal: PropTypes.func
}

export default Header;