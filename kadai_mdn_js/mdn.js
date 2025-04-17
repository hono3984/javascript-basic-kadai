const today = new Date();
const [month, day, year] = [
  today.getMonth(),
  today.getDate(),
  today.getFullYear(),
];

console.log (today.getFullYear() +'年',today.getMonth() + '月', today.getDate() + '日', );