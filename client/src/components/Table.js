import PropTypes from 'prop-types';

function Table({ entry }) {
  return (
    <table>
      <tr>
        <th>Temperature</th>
        <tr>{entry.temperature}</tr>
      </tr>
      <tr>
        <th>Heat Index | Wind Chill</th>
        <tr>{entry.feelsLike}</tr>
      </tr>
      <tr>
        <th>Humidity</th>
        <tr>{entry.windSpeed}</tr>
      </tr>
      <tr>
        <th>Date and Time</th>
        <tr>{entry.dateTime}</tr>
      </tr>
    </table>
  );
}

Table.propTypes = {
  entry: PropTypes.object
}

export default Table;