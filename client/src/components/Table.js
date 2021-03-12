import styled from 'styled-components';
import PropTypes from 'prop-types';
import { dateTimePrettier } from '../helpers.js';

const StyledTable = styled.table`
  --azalea: rgb(181, 25, 119);
  background-color: white;
  border: 2px solid var(--azalea);
  border-radius: 5px;
  margin: 5px;
`;

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

// Use set Field helper function to provide capability to modify tracked weather data
function Table({ entry, setField, error }) {
  return (
    <StyledTable>
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
    </StyledTable>
  );
}

Table.propTypes = {
  entry: PropTypes.object.isRequired,
  setField: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
}

export default Table;