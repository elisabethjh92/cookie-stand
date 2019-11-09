'use strict';

var seattleShopElement = document.getElementById 
('seattleShop');

var liEl = document.createElement('li');

liEL.textContent = 'proof of life';

seattleShopElement.appendChild(liEl);

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seattleShop = {
    minCustomerEachHour: 23,
    maxCustomerEachHour: 65,
    averageCookiesPerCustomer: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForTheDay: 0,

    render function() {
        for(var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl = `${hours[i]} Cookies: 34`;
            this.appendChild(liEl);
        }
    },

    randomNumber function(min, max){
        return Math.floor(Math.random()*(max - min)) + min;
    }
};

seattleShop.render();

var tokyoShopElement = document.getElementById 
('tokyoShop');

var liEl = document.createElement('li');

liEL.textContent = 'proof of life';

tokyoShopElement.appendChild(liEl);

var tokyoShop = {
    minCustomerEachHour: 3,
    maxCustomerEachHour: 24,
    averageCookiesPerCustomer: 1.2,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForTheDay: 0,

    render function() {
        for(var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl = `${hours[i]} Cookies: 34`;
            this.appendChild(liEl);
        }
    },

    randomNumber function(min, max){
        return Math.floor(Math.random()*(max - min)) + min;
    }
};

tokyoShop.render();

var dubaiShopElement = document.getElementById 
('dubaiShop');

var liEl = document.createElement('li');

liEL.textContent = 'proof of life';

dubaiShopElement.appendChild(liEl);

var dubaiShop = {
    minCustomerEachHour: 11,
    maxCustomerEachHour: 38,
    averageCookiesPerCustomer: 3.7,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForTheDay: 0,

    render function() {
        for(var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl = `${hours[i]} Cookies: 34`;
            this.appendChild(liEl);
        }
    },

    randomNumber function(min, max){
        return Math.floor(Math.random()*(max - min)) + min;
    }
};

dubaiShop.render();

var parisShopElement = document.getElementById 
('parisShop');

var liEl = document.createElement('li');

liEL.textContent = 'proof of life';

parisShopElement.appendChild(liEl);

var parisShop = {
    minCustomerEachHour: 20,
    maxCustomerEachHour: 38,
    averageCookiesPerCustomer: 2.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForTheDay: 0,

    render function() {
        for(var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl = `${hours[i]} Cookies: 34`;
            this.appendChild(liEl);
        }
    },

    randomNumber function(min, max){
        return Math.floor(Math.random()*(max - min)) + min;
    }
};

parisShop.render();

var limaShopElement = document.getElementById 
('limaShop');

var liEl = document.createElement('li');

liEL.textContent = 'proof of life';

limaShopElement.appendChild(liEl);

var limaShop = {
    minCustomerEachHour: 2,
    maxCustomerEachHour: 16,
    averageCookiesPerCustomer: 4.6,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForTheDay: 0,

    render function() {
        for(var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl = `${hours[i]} Cookies: 34`;
            this.appendChild(liEl);
        }
    },

    randomNumber function(min, max){
        return Math.floor(Math.random()*(max - min)) + min;
    }
};



