// Arrays
const names = ['tino','kaisa','smia']

console.log(names[1]);

names.pop()
names.push('jesus')
names.sort()

for(i = 0; i < names.length; i++){
  console.log(names[i])
}



// DOM EVENTS
function ChangeColor(obj){
  obj.style.color = "gold";
}

document.getElementById("MyButton").onclick = ChangeBackgroundColor;

function ChangeBackgroundColor() {
  document.querySelector("body").style.backgroundColor = "honeydew"
}

function RemoveLetterFromH1() {
  var h1 = document.querySelector("h1");
  h1.textContent = h1.textContent.slice(0,-1);
}

function MouseOver(obj) {
  obj.innerHTML = "GET OFF ME!!!"
}

function MouseOut(obj) {
  obj.innerHTML = "Thank you ;)"
}