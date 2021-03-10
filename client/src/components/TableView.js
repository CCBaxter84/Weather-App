import PropTypes from 'prop-types';
import Table from './Table.js';

function TableView({ data }) {
  return (
    <section>
      {data.map(entry => <Table key={entry.id} entry={entry}/>)}
    </section>
  );
}

TableView.propTypes = {
  data: PropTypes.array
}

export default TableView;