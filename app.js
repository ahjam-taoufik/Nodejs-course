import chalk  from 'chalk';  //npm install chalk
const error=chalk.red.inverse
const success=chalk.green.inverse



const text1=error('this is error')
const text2=success('this is success')
console.log(text1);
console.log(text2);

