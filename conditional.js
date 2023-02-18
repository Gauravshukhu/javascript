//conditional expressions 
// let a =prompt("hey ISA,")
// a = Number.parseInt(a) // converting string into a number
// if(a>45)
// {
//   alert("i am hero");
// }
// else{
//   alert ("i am not hero");
  
// }

//if else if 
//  let a =prompt("hey ISA,")
//  a = Number.parseInt(a) // converting string into a number
// if(a<0)
//  {
//   alert("this is invalid age");
//  }
//  else if(a>9){
//    alert ("you cant drive and dont think for drive");
//  }
// else if(a>18){
//   alert("yes, u can drive now a car or sometyhing")
// }
// else{
//   alert("you can above 18")
// }

//switch case
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
 
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

 