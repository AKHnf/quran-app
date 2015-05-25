var a, b;

a = {
    greetings: 'Hi!'
};

b = a;

a.greetings = 'Hello!';

console.log(a.greetings);
console.log(b.greetings);