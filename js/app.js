var person = {
    firstName: 'Tira',
    lastName: 'Zainal',
    getFullName: function () {
        'use strict';
        
        return this.firstName + ' ' + this.lastName;
    }
};

var personTwo = {
    firstName: 'Putri Nurzarith Atirah',
    lastName: 'Megat Zainal'
};

var log = function () {
    'use strict';
    console.log('Last accessed by: ' + this.getFullName());
};

log.call(person);
console.log(person.getFullName.call(personTwo));
