const book={
     title: "the first workbook",
     author: "taoufik ahjam"
}

//convert object to string
const text=JSON.stringify(book)
console.log(text)

//convert object to json database
const text2=JSON.parse(text)
console.log(text2)
console.log(text2.title)
