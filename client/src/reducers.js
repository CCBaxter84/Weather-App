export const reducer = (state, action) => {
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
}

export const reducer2 = (state, action) => {
  switch(action.type) {
    case 'city':
      return { ...state, currentCity: action.value };
    case 'state':
      return { ...state, currentState: action.value };
    case 'country':
      return { ...state, currentCountry: action.value };
    case 'all':
      return { ...state, currentCity: action.city, currentState: action.state, currentCountry: action.country };
    default:
      return state;
  }
}