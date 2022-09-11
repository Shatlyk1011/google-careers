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
