'use strict';

const isNan = (value) => {
  //  Turns out nodejs does not have isNan() out of the box
  return (typeof value !== 'number' || value === 0 || !value || value !== value);
};

const valOrDefault = (value, defaultVal) => {
  return isNan(value) ?defaultVal : Math.ceil(value);
};

const howManyPizza = (people, slicesPerPerson, slicesPerPizza) => {

  const pizzaToSliceRatio = valOrDefault(slicesPerPerson, 3)/valOrDefault(slicesPerPizza, 8);

  if ( isNan(people) ){
    return 0;
  } else {
    return Math.ceil( Math.ceil(people) * pizzaToSliceRatio );
  }

};

module.exports = howManyPizza;
