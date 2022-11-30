// var obj1 = {
//     name:"Person 1",
//     age:5
// }
// var obj2 ={
//     name :"Person 1",
//     age:5
    
// }
// if(JSON.stringify(obj1)===JSON.stringify(obj2)){
//     console.log("True")
// }
// else{
//     console.log("False")
// }
// //OUTPUT:
// True

// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload=function(){
//     var data = request.response
//     var result=JSON.parse(data)
//      console.log(result.flag);
//      for(i=0;i<result.length;i++){
//         console.log(result[i].flag)
//      }
// }
// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload=function(){
//     var data =request.response
//     var result = JSON.parse(data)
//     for(i=0;i<result.length;i++){
//         console.log(result[i].name.common,result[i].region,result[i].subregion,result[i].population)
//     }
// }