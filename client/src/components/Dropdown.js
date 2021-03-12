import PropTypes from 'prop-types';

function Dropdown({ handleChange, options }) {
  return (
    <select onChange={handleChange}>
      {options.map(({ value, label }) => {
        return <option key={label} value={value}>{label}</option>
      })}
    </select>
  );
}

Dropdown.propTypes = {
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}

export default Dropdown;