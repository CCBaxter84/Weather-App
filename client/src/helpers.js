module.exports = {
  reducer: (state, action) => {
    let updatedState;
    switch (action.type) {
      case 'temperature':
        updatedState = state.map(entry => {
          if (action.id === entry._id) {
            return {...entry, temperature: action.value};
          }
          return entry;
        });
        return updatedState;
      case 'feelsLike':
        updatedState = state.map(entry => {
          if (action.id === entry._id) {
            return { ...entry, feelsLike: action.value };
          }
          return entry;
        });
        return updatedState;
      case 'humidity':
        updatedState = state.map(entry => {
          if (action.id === entry._id) {
            return { ...entry, humidity: action.value };
          }
          return entry;
        });
        return updatedState;
      case 'city':
        updatedState = state.map(entry => {
          if (action.id === entry._id) {
            return { ...entry, city: action.value };
          }
          return entry;
        });
        return updatedState;
      case 'windSpeed':
        updatedState = state.map(entry => {
          if (action.id === entry._id) {
            return { ...entry, windSpeed: action.value };
          }
          return entry;
        });
        return updatedState;
      case 'dateTime':
        updatedState = state.map(entry => {
          if (action.id === entry._id) {
            return { ...entry, dateTime: action.value };
          }
          return entry;
        });
        return updatedState;
      case 'setAll':
        return action.value;
      default:
        return state;
    }
  },

  hotOrCold: (temp, windSpeed) => {
    if (temp < 50 && windSpeed > 5) {
      return 'Wind Chill';
    } else if (temp > 80) {
      return 'Heat Index';
    } else {
      return 'Feels Like';
    }
  },

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

  isANumber: input => typeof input === 'number'
}