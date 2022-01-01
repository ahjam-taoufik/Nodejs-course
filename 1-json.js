const fs=require('fs')
//part1 of exercice  create and write in  file Json
// const book={
//      title: "the first workbook",
//      author: "taoufik ahjam",
//      descrition: "lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
// }
// const stringText=JSON.stringify(book)
// fs.writeFileSync('data.json', stringText)


//part2 of exercice read file Json
const buffer= fs.readFileSync('data.json')
const stringtext=buffer.toString()
const jsontext=JSON.parse(stringtext)
console.log(jsontext);



