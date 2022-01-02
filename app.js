const request=require('request')

const url = 'https://jsonplaceholde.typicode.com/todos/1'

// request({url : url},(error,response)=>{
//     const data=JSON.parse(response.body)
//      //console.log(response.body);
//        console.log(data);
// })

request({url : url, json:true},(error,response)=>{
    if (error) {
       console.log('some thing was wrong , unable to connect to database');  
    }
       console.log(response.body);
})
