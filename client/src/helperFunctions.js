module.exports = {
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

  kelvinConverter: temp => {
    return Math.round((temp - 273.15) * 9 / 5 + 32, 2);
  }
}