const fs=require('fs')

//fs.writeFileSync('note.txt','Hello word. this file is created by nodejs')
//fs.writeFileSync('note.txt','this code will be overriding the last code')

fs.appendFileSync('note.txt',' this code wille be append in your file')

