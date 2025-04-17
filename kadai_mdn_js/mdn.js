const today = new Date();
const [month, day, year] = [
  today.getMonth() +1 ,
  today.getDate(),
  today.getFullYear(),
];

console.log (today.getFullYear() +'年'+(today.getMonth() +1) + '月'+today.getDate() + '日');