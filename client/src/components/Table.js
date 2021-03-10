import styled from 'styled-components';
import PropTypes from 'prop-types';
import { dateTimePrettier } from '../helperFunctions.js';

const TableField = styled.th`
  color: blue;
`;

const TableData = styled.td`
`;

const Input = styled.input`
  border: none;
  text-align: right;
  width: 25px;
`;

function Table({ entry, setField }) {

  return (
    <table>
      <tbody>
        <tr>
          <TableField>Temperature</TableField>
          <TableData>
            <Input
              type='text'
              value={entry.temperature}
              onChange={e => setField('temperature', e.target.value, entry._id)}
            />&#176;F
          </TableData>
        </tr>
        <tr>
          <TableField>Feels Like</TableField>
          <TableData>
            <Input
              type='text'
              value={entry.feelsLike}
              onChange={e => setField('feelsLike', e.target.value, entry._id)}
            />&#176;F
          </TableData>
        </tr>
        <tr>
          <TableField>Humidity</TableField>
          <TableData>
            <Input
              type='text'
              value={entry.humidity}
              onChange={e => setField('humidity', e.target.value, entry._id)}
            />%
          </TableData>
        </tr>
        <tr>
          <TableField>Wind Speed</TableField>
          <TableData>
            <Input
              type='text'
              value={entry.windSpeed}
              onChange={e => setField('windSpeed', e.target.value, entry._id)}
            />mph
          </TableData>
        </tr>
        <tr>
          <TableField>Date / Time</TableField>
          <TableData>{dateTimePrettier(entry.dateTime)}</TableData>
        </tr>
      </tbody>
    </table>
  );
}

Table.propTypes = {
  entry: PropTypes.object
}

export default Table;