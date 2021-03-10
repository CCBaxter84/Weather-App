import PropTypes from 'prop-types';
import { hotOrCold, dateTimePrettier, kelvinConverter } from '../helperFunctions.js';

function Table({ entry }) {
  const temperature = kelvinConverter(entry.temperature);
  const feelsLike = kelvinConverter(entry.windSpeed);
  const indexOrChill = hotOrCold(temperature, entry.windSpeed);
  const date = dateTimePrettier(entry.dateTime);

  return (
    <table>
      <tbody>
        <tr>
          <th>Temperature</th>
          <td>{temperature}</td>
        </tr>
        <tr>
          <th>{indexOrChill}</th>
          <td>{feelsLike}</td>
        </tr>
        <tr>
          <th>Humidity</th>
          <td>{`${entry.humidity}%`}</td>
        </tr>
        <tr>
          <th>Wind Speed</th>
          <td>{`${entry.windSpeed} mph`}</td>
        </tr>
        <tr>
          <th>Date / Time</th>
          <td>{date}</td>
        </tr>
      </tbody>
    </table>
  );
}

Table.propTypes = {
  entry: PropTypes.object
}

export default Table;