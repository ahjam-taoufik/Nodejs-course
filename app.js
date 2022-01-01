const validator=require('validator')



const email= 'toto@gmail.com'
const isvalid=validator.isEmail(email)
console.log(isvalid)


const text= ''
const isvalid2=validator.isEmpty(text)
console.log(isvalid2)


