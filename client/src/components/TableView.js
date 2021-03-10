import PropTypes from 'prop-types';
import { Container } from '../sharedStyles.js';
import Table from './Table.js';

function TableView({ data, setField, city }) {
  return (
    <Container>
      {data.map(entry => <Table key={entry._id} entry={entry} setField={setField} />)}
    </Container>
  );
}

TableView.propTypes = {
  data: PropTypes.array,
  setField: PropTypes.func,
  city: PropTypes.string
}

export default TableView;