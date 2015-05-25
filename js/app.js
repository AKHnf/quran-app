var a = {
    greeting: 'Hello'
}

var b = a;

console.log(a);
console.log(b);

function changeGreeting(obj) {
    obj.greeting = 'Hola!';
}

changeGreeting(b);

console.log(a);
console.log(b);

