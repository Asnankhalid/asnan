/*  at a very high level ,there are two data type in javascript
1-primitive data type: undefin ,null ,num, string, boolean , symbol
2-reference data type: arrays and object
*/
var arr=[1,2,"babu",4]
// console.log(arr);


// Operators in javascript
// Arithmetic Operation
var c=34;
var d=56;
// console.log("this is value of c+d is",c+d);
// console.log("this is value of c-d is",c-d);
// console.log("this is value of c*d is",c*d);
// console.log("this is value of c/d is",c/d);

// assignment ooperater
var h=c;
h+=2; 
h*=2;
h/=2;
// console.log(h)

// comparison operators
var x=34;
var y=56;
// console.log(x==y)
// console.log(x>=y)
// console.log(x<=y)


// LOGICAL Operator

// logic end 
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)
 

// logic or
// console.log(true ||true)
//  console.log(true|| false)
//   console.log(false ||true)
// console.log(false ||false)

// logic not
//  console.log(!true)
//  console.log(!false)
  

// function in javascript


function avg(a,b){
    c=(a+b)/2
    return c;

}
// Dry= do not repeat  yourself
c1=(4,6);
c2=(14,16);
// console.log(c1,c2)

// conditional in javascript

/*
var age=3;
if(age>8){
    console.log('this is not a kid')
}
else{
    console.log('this is  a kid')
}
*/
//  loop in javascript
// var arr=[1,2,3,4,5,6];
// // console.log(arr);
//  for(var i=0;i<arr.length;i++)
// console.log(arr[i])
// arr.forEach(function(element){
//     console.log(element)
// })
//  let j=0;
// while(j<arr.length){
// console.log(arr[j])
// j++;
// }
// do{
//     console.log(arr[j])
//      j++;
// }while(j<arr.length)

var arr=[1,2,3,4,5,6];
// // console.log(arr);
//  for(var i=0;i<arr.length;i++){
//          if(i==3){
//     // break;
//     continue;
//          }
//          console.log(arr[i])
//         }
// let myarr=["fan","camera",34,null,true]
// // Arry Method
// console.log(myarr.length)
// //  myarr.pop()
// // myarr.push("harry")
// // myarr.shift()
// myarr.unshift("harry")
// console.log(myarr)

// string method in javascrpit
 let mylovelystring="harry is my baby my my "
// console.log(mylovelystring.length)
// console.log(mylovelystring.indexOf("my"))
// console.log(mylovelystring.lastIndexOf("my"))

// console.log(mylovelystring.slice(1,3))

// d = mylovelystring.replace("Harry" ,"Asnan");

// console.log(d , mylovelystring)

// let myDate=new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getSeconds());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getHours());

// DOM Manipulation
// let elem=document.getElementById("click");
// console.log(elem)
// elem.style.background="yellow";
// let elemclass=document.getElementsByClassName("container")
// console.log(elemclass)
// // elemclass[0].style.background="red"
// elemclass[0].classList.add("bg-primary")
// elemclass[0].classList.add("text")

// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);
tn=document.getElementsByTagName("div")
console.log(tn)
createdelement=document.createElement("p")
createdelement.innertext="this a created paragraph"
tn[0].appendChild(createdelement)

createdelement2=document.createElement("b")
createdelement2.innertext="this a created bold"
tn[0].replaceChild(createdelement2,createdelement);
// remove element

// selecting using query
sel=document.querySelector('.container')
console.log(sel)
sel=document.querySelectorAll('.container')
console.log(sel)
