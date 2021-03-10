import { useState, useEffect } from 'react';
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
  width: 20px;
`;

function Table({ entry }) {
  const [ temp, setTemp ] = useState(entry.temperature);
  const [ feelsLike, setFeelsLike ] = useState(entry.feelsLike);
  const [ humidity, setHumidity ] = useState(entry.humidity);
  const [ windSpeed, setWindSpeed ] = useState(entry.windSpeed);
  const [ dateTime, setDateTime ] = useState(dateTimePrettier(entry.dateTime));

  const handleClick = event => {
    console.log('clicked');
  }

  return (
    <table>
      <tbody>
        <tr>
          <TableField>Temperature</TableField>
          <TableData>
            <Input
              type='text'
              value={temp}
              onChange={e => setTemp(e.target.value)}
            />&#176;F
          </TableData>
        </tr>
        <tr>
          <TableField>Feels Like</TableField>
          <TableData>
            <Input
              type='text'
              value={feelsLike}
              onChange={e => setFeelsLike(e.target.value)}
            />&#176;F
          </TableData>
        </tr>
        <tr>
          <TableField>Humidity</TableField>
          <TableData>
            <Input
              type='text'
              value={humidity}
              onChange={e => setHumidity(e.target.value)}
            />%
          </TableData>
        </tr>
        <tr>
          <TableField>Wind Speed</TableField>
          <TableData>
            <Input
              type='text'
              value={windSpeed}
              onChange={e => setWindSpeed(e.target.value)}
            />mph
          </TableData>
        </tr>
        <tr>
          <TableField>Date / Time</TableField>
          <TableData>{dateTime}</TableData>
        </tr>
      </tbody>
    </table>
  );
}

Table.propTypes = {
  entry: PropTypes.object
}

export default Table;