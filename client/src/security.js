module.exports = {
  isANumber: input => {
    return !isNaN( Number(input) );
  },

  containsInvalidChars: input => {
    const regex = /[^a-zA-Z,\s]/g;
    return regex.test(input);
  },

  formContainsErrors: (city, state, country, errorSetter) => {
    const containsInvalidChars = input => {
      const regex = /[^a-zA-Z,\s]/g;
      return regex.test(input);
    }

    const triggerError = errorMsg => {
      errorSetter(errorMsg);
      setTimeout(() => errorSetter(''), 3000);
    }

    if (containsInvalidChars(city)) {
      triggerError('Must be a city');
      return true;
    }

    if (country === 'us' && state === '') {
      triggerError('Must provide a state');
      return true;
    }

    if (country === 'foreign' && state !== '') {
      triggerError('State should be N/A for non-US cities');
      return true;
    }

    if (country === '') {
      triggerError('Must select a country')
      return true;
    }
    return false;
  }
}