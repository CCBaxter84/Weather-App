import PropTypes from 'prop-types';
import NavButton from './NavButton';
import styled from 'styled-components';
import { StyledButton } from '../sharedStyles.js';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
`;

function Header({ openModal }) {
  return (
    <StyledHeader>
      <NavButton name='Home' path='/'/>
      <NavButton name='Table View' path='/TableView'/>
      <NavButton name='Chart View' path='/ChartView'/>
      <StyledButton onClick={openModal}>Track</StyledButton>
    </StyledHeader>
  );
}

Header.propTypes = {
  openModal: PropTypes.func
}

export default Header;