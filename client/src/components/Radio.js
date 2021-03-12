import PropTypes from 'prop-types';

function Radio({ handleChange }) {
  return (
    <section>
      <input type='radio' id='us' name='country'
        onChange={handleChange} value='us'
      />
      <label htmlFor='us'>USA</label>
      <input type='radio' id='foreign' name='country'
        onChange={handleChange} value='foreign'
      />
      <label htmlFor='foreign'>Abroad</label>
    </section>
  );
}

Radio.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default Radio;