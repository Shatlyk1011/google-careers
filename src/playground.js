const favoriteFood = 'sushi';

const food = {
  [favoriteFood]: true,
};

console.log(food); // sushi: true

// <!--=============== Timeout ===============-->
const interval = setInterval(() => {
  console.log('I will print in 2 seconds');
}, 2000);

setTimeout(() => {
  clearInterval(interval);
}, 6000);

// <!--=============== AXIOS + async await ===============-->
const axios = require('axios');

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

// <!--=============== SETS ===============-->
// arrays - order
// objects - association
// set - uniqueness
