// ------ Sleep Debt Calculator ------

// Function to return numbers of hours slept on the chosen day
const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
    default:
      return 'Please pick a valid day.';
  }
}


// Find total hours actually slept, number of hour of sleep preferred & Calulate sleep debt
const getActualSleepHours = () => 
  getSleepHours('monday') + 
  getSleepHours('tuesday') + 
  getSleepHours('wednesday') + 
  getSleepHours('thursday') + 
  getSleepHours('friday') + 
  getSleepHours('saturday') + 
  getSleepHours('sunday');

// Ideal hours for sleep
  const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
  };

// Calculation for sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    return 'Perfect amount of sleep!';
  } else if (actualSleepHours > idealSleepHours) {
    return 'You\'ve slept more than needed.';
  } else {
    return 'You need some rest!';
  }
};


// Call the program
console.log(calculateSleepDebt());







