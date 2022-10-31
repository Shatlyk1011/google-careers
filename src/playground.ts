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

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const numbers2 = numbers.filter(number => number > 5);
console.log(numbers2); //[ 6, 7, 8, 9 ]

const jobs = [
  { title: 'react', org: 'google' },
  { title: 'vue', org: 'bahar' },
  { title: 'angular', org: 'google' },
];

const jobs2 = jobs.filter(orag => orag.org === 'google');
console.log(jobs2);
 */

// <!--=============== REACTIVITY ===============-->
// const { ref, reactive, computed } = require('vue');
// example 1
/* let a = ref(2);
let b = ref(4);

let c = computed(() => a.value + b.value);
console.log(c.value);

a.value = 10;
console.log(c.value); */

// example 2
/* const name = ref('Shat');
const title = computed(() => name.value);
console.log(title.value);

name.value = 'Igor';
console.log(title.value);
 */

// Object Reactivity
/* const person = reactive({
  firstName: 'Shat',
  lastName: 'Abdullayev',
});

const title = computed(() => `${person.firstName} ${person.lastName} Good job`);
const titleLength = computed(() => title.value.length);
console.log(title.value);
console.log(titleLength.value);

person.firstName = 'Bayram';
console.log(title.value);
 */

// <!--=============== TS ===============-->
import { GlobalState } from '@/store/types';

const state: Partial<GlobalState> = {};
