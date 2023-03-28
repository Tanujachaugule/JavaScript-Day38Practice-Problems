const weeks = [
    ,
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  let digit = 3;
  for (let index = 0; index < weeks.length; index++) {
    if (digit == index) console.log(digit + ' = ' + weeks[index]);
  }