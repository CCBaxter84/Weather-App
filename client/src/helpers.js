module.exports = {
  dateTimePrettier: uglyDate => {
    const fullDate = new Date(uglyDate);
    const month = fullDate.getMonth() + 1;
    const date = fullDate.getDate();
    const year = fullDate.getFullYear();
    const hours = fullDate.getHours();
    const minutes = fullDate.getMinutes();
    const amOrPM = hours > 11 ? 'PM' : 'AM';

    const addZero = timeDigit => {
      if (timeDigit < 10) {
        return '0' + timeDigit;
      }
      return timeDigit;
    };

    const nonMilHours = hours > 12 ? hours - 12 : hours;
    const finalHours = addZero(nonMilHours);
    const finalMinutes = addZero(minutes);

    return `${month}-${date}-${year} ${finalHours}:${finalMinutes} ${amOrPM}`;
  },

  getWeatherCategory: (cat, dataset = []) => {
    if (!dataset || dataset.length === 0) {
      return [];
    }
    return dataset.map(entry => entry[cat]);
  },

  dropdownOptions: [
    { value: 'N/A', label: 'N/A' },
    { value: 'Alabama', label: 'AL' },
    { value: 'Alaska', label: 'AK' },
    { value: 'Arizona', label: 'AZ' },
    { value: 'Arkansas', label: 'AR' },
    { value: 'California', label: 'CA' },
    { value: 'Colorado', label: 'CO' },
    { value: 'Connecticut', label: 'CT' },
    { value: 'Delaware', label: 'DE' },
    { value: 'Florida', label: 'FL' },
    { value: 'Georgia', label: 'GA' },
    { value: 'Hawaii', label: 'HI' },
    { value: 'Idaho', label: 'ID' },
    { value: 'Illinois', label: 'IL' },
    { value: 'Indiana', label: 'IN' },
    { value: 'Iowa', label: 'IA' },
    { value: 'Kansas', label: 'KS' },
    { value: 'Kentucky', label: 'KY' },
    { value: 'Louisiana', label: 'LA' },
    { value: 'Maine', label: 'ME' },
    { value: 'Massachusetts', label: 'MA' },
    { value: 'Maryland', label: 'MD' },
    { value: 'Michigan', label: 'MI' },
    { value: 'Minnesota', label: 'MN' },
    { value: 'Mississippi', label: 'MS' },
    { value: 'Missouri', label: 'MO' },
    { value: 'Montana', label: 'MT' },
    { value: 'Nebraska', label: 'NE' },
    { value: 'Nevada', label: 'NV' },
    { value: 'New Hampshire', label: 'NH' },
    { value: 'New Jersey', label: 'NJ' },
    { value: 'New Mexico', label: 'NM' },
    { value: 'New York', label: 'NY' },
    { value: 'North Carolina', label: 'NC' },
    { value: 'North Dakota', label: 'ND' },
    { value: 'Ohio', label: 'OH' },
    { value: 'Oklahoma', label: 'OK' },
    { value: 'Oregon', label: 'OR' },
    { value: 'Pennsylvania', label: 'PA' },
    { value: 'Rhode Island', label: 'RI' },
    { value: 'South Carolina', label: 'SC' },
    { value: 'South Dakota', label: 'SD' },
    { value: 'Tennessee', label: 'TN' },
    { value: 'Texas', label: 'TX' },
    { value: 'Utah', label: 'UT' },
    { value: 'Vermont', label: 'VT' },
    { value: 'Virginia', label: 'VA' },
    { value: 'Washington', label: 'WA' },
    { value: 'West Virginia', label: 'WV' },
    { value: 'Wisconsin', label: 'WI' },
    { value: 'Wyoming', label: 'WY' },
  ],

  formatCityForAPI: (rawCity, state, country) => {
    const formatCity = city => {
      const callback = word => {
        const trimmed = word.trim();
        if (trimmed.length > 1) {
          return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
        }
        return trimmed;

      }
      const callback2 = word => {
        return word !== '';
      }
      return city.split(' ').map(callback).filter(callback2).join(' ');
    }
    const city = formatCity(rawCity);

    if (country === 'United States') {
      return `${city},us`;
    }

    return city;
  },
  formatCityForUI: (rawCity) => {
    const formatCity = city => {
      const callback = word => {
        const trimmed = word.trim();
        if (trimmed.length > 1) {
          return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
        }
        return trimmed;

      }
      const callback2 = word => {
        return word !== '';
      }
      return city.split(' ').map(callback).filter(callback2).join(' ');
    }
    const city = formatCity(rawCity);

    return city;
  }
}
