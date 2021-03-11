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

  isANumber: input => {
    return !isNaN( Number(input) );
  },

  containsInvalidChars: input => {
    const regex = /[^a-zA-Z,\s]/g;
    return regex.test(input);
  },

  formatCityForAPI: place => {
    console.log(typeof place);
    const stateDictionary = {
      AL: 'Alabama',
      AK: 'Alaska',
      AZ: 'Arizona',
      AR: 'Arkansas',
      CA: 'California',
      CO: 'Colorado',
      CT: 'Connecticut',
      DE: 'Delaware',
      FL: 'Florida',
      GA: 'Georgia',
      HI: 'Hawaii',
      ID: 'Idaho',
      IL: 'Illinois',
      IN: 'Indiana',
      IA: 'Iowa',
      KS: 'Kanasas',
      KY: 'Kentucky',
      LA: 'Louisiana',
      ME: 'Maine',
      MA: 'Massachusetts',
      MI: 'Michigan',
      MN: 'Minnesota',
      MS: 'Mississippi',
      MO: 'Missouri',
      MT: 'Montana',
      NE: 'Nebraska',
      NV: 'Nevada',
      NH: 'New Hampshire',
      NJ: 'New Jersey',
      NM: 'New Mexico',
      NY: 'New York',
      NC: 'North Carolina',
      ND: 'North Dakota',
      OH: 'Ohio',
      OK: 'Oklahoma',
      OR: 'Oregon',
      PA: 'Pennsylvania',
      RI: 'Rhode Island',
      SC: 'South Carolina',
      SD: 'South Dakota',
      TN: 'Tennessee',
      TX: 'Texas',
      UT: 'Utah',
      VT: 'Vermont',
      VA: 'Virginia',
      WA: 'Washington',
      WV: 'West Virginia',
      WI: 'Wisconsin',
      WY: 'Wyoming'
    }
    const noWhiteSpace = place.replace(/\s+/g, '');
    const arrayed = noWhiteSpace.split(',');
    const city = arrayed[0].toLowerCase();

    const formatState = rawState => {
      let formattedState;
      if ( stateDictionary[rawState.toUpperCase()] ) {
        formattedState = stateDictionary[rawState.toUpperCase()];
      } else {
        formattedState = rawState;
      }
      return formattedState.toLowerCase();
    }

    if (arrayed.length === 2) {
      let state = formatState(arrayed[1]);
      return `${city},${state}`;
    } else if (arrayed.length === 3) {
      let state = formatState(arrayed[1]);
      return `${city},${state},${arrayed[2].toLowerCase()}`
    }

    return city;
  },
  formatCityForUI: place => {
    const arrayed = place.split(',');
    const city = arrayed[0].toLowerCase().trim();
    const formattedCity = city[0].toUpperCase() + city.slice(1);

    const formatState = rawState => {
      const trimmed = rawState.trim();
      const isAbbrev = trimmed.length <= 3;
      const fullName = trimmed.split(' ').map(word => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }).join(' ');

      const formattedState = isAbbrev ? trimmed.toUpperCase() : fullName;
      return formattedState;
    }

    if (arrayed.length === 2) {
      let state = formatState(arrayed[1]);
      return `${formattedCity}, ${state}`;
    } else if (arrayed.length === 3) {
      let state = formatState(arrayed[1]);
      return `${formattedCity}, ${state}, ${formatState(arrayed[2])}`
    }
    return formattedCity;
  }
}