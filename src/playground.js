/* const favoriteFood = 'sushi';

const food = {
  [favoriteFood]: true,
};

console.log(food); // sushi: true
 */
// <!--=============== Timeout ===============-->
/* const interval = setInterval(() => {
  console.log('I will print in 2 seconds');
}, 2000);

setTimeout(() => {
  clearInterval(interval);
}, 6000); */

// <!--=============== AXIOS + async await ===============-->
/* const axios = require('axios');

const url = 'http://localhost:3000/jobs';

const fetchJobsV1 = () => {
  axios.get(url).then(response => {
    console.log(response.data);
  });
};

fetchJobsV1();

const fetchJobsV2 = async () => {
  const response = await axios.get(url);
  console.log(response.data);
};

fetchJobsV2();
 */
// <!--=============== SETS ===============-->
// arrays - order
// objects - association
// set - uniqueness

/* const numbers = new Set();
numbers.add('hello');
numbers.add('Gello');
numbers.add(1);
numbers.add(15);
numbers.add(15);

console.log(numbers); */

// <!--=============== filter ARRAY ===============-->

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const numbers2 = numbers.filter(number => number > 5);
console.log(numbers2); //[ 6, 7, 8, 9 ]

const jobs = [
  { title: 'react', org: 'google' },
  { title: 'vue', org: 'bahar' },
  { title: 'angular', org: 'google' },
];

const jobs2 = jobs.filter(orag => orag.org === 'google');
console.log(jobs2);
