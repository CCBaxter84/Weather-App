import PropTypes from 'prop-types';
import Table from './Table.js';

function TableView({ data, setField, city }) {
  return (
    <section>
      {data.map(entry => <Table key={entry._id} entry={entry} setField={setField} />)}
    </section>
  );
}

TableView.propTypes = {
  data: PropTypes.array,
  setField: PropTypes.func,
  city: PropTypes.string
}

export default TableView;