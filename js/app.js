function getName() {
    // 'use strict';
    
    console.log(this);
    
    this.name = 'Putri';
}

getName();

var a = {
    name: 'Tira',
    log: function () {
        // 'use strict';
        console.log(this);
        
        var self = this;
        
        var changeName = function (newName) {
            self.name = newName;
        };
        
        changeName('Putri Nurzarith Atirah');
        
        console.log(self);
    }
};

a.log();