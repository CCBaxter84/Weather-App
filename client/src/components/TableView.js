import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from '../sharedStyles.js';
import Table from './Table.js';

const InnerContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
`;

function TableView({ data, setField, city, error }) {
  return (
    <Container>
      <InnerContainer>
        {data.map(entry => <Table key={entry._id} entry={entry} setField={setField} error={error}/>)}
      </InnerContainer>
    </Container>
  );
}

TableView.propTypes = {
  data: PropTypes.array,
  setField: PropTypes.func,
  city: PropTypes.string,
  error: PropTypes.string
}

export default TableView;