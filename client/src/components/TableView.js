import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, ErrorArticle, Title } from '../sharedStyles.js';
import Table from './Table.js';

const InnerContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
`;
// Render Tables of each time weather data was tracked for the current location
function TableView({ data, setField, currentLocation, error }) {
  return (
    <Container>
      <Title><h2>{currentLocation.currentCity} Weather</h2></Title>
      <InnerContainer>
        {data.map(entry => <Table key={entry._id} entry={entry} setField={setField} error={error}/>)}
      </InnerContainer>
      {error.length > 0 && <ErrorArticle><h2>{error}!</h2></ErrorArticle>}
    </Container>
  );
}

TableView.propTypes = {
  data: PropTypes.array.isRequired,
  setField: PropTypes.func.isRequired,
  currentLocation: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired
}

export default TableView;