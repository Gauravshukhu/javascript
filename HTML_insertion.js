let a =document.getElementsByTagName("div")[0]
// a.innerHTML = a.innerHTML + '<h1>hello world</h1>';

// 2 method
let div=document.createElement('div');
div.innerHTML='<h1> i am suri </h1>';
// all the element shoud come under the i am suri by using prepend
// a.prepend(div);
//a.append(div);
// a.before(div);
// a.after(div);
a.replaceWith(div);
