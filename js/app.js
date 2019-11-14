'use strict';

var seattleShopElement = document.getElementById 
('seattleShop');

var liEl = document.createElement('li');

seattleShopElement.appendChild(liEl);

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var storeSales = document.getElementById('stores');

var seattleShop = {
    storeName: 'Seattle Shop',
    minCustomerEachHour: 23,
    maxCustomerEachHour: 65,
    averageCookiesPerCustomer: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForTheDay: 0,

    calculateCustomers: function() {
        for(var i = 0; i < hours.length; i++) {
            var randomCustomer = getRandom(this.minCustomerEachHour, this.maxCustomerEachHour);
            this.customersEachHour.push(randomCustomer)
        }
    }

    calculateCookies: function() {
        for(var i = 0; i < this.customersEachHour.length; i++);
        var cookies = Math.round(i * this.customersEachHour[i] * this.averageCookiesPerCustomer);
        this.totalCookiesPerDay += cookies;
        this.cookiesEachHour.push(cookies);
    }
//generates a number between min and max including min and max (inclusive)
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render function() {
        this.calculateCustomers();
        this.calculateCookies();
        var ulEl = document.createElement('ul');
        var h2El = document.createElement('h2');
        h2El.textContent = this.storeName;
        storeSales.appendChild(h2El);
        for(var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]} : ${this.cookiesEachHour[i]} Cookies`;
            storeSales.appendChild(liEl);

        }
        liEl = document.createElement('li');
        liEl.textContent = 'Total: ${this.totalCookiesForTheDay} Cookies`;
        ulEl.appendChild(liEl);
        storeSales.appendChild(ulEl); 
        
    };
            // randomNumber function(min, max) {
            //     return Math.floor(Math.random()*(max - min)) + min;
}

seattleShop.render();

var tokyoShopElement = document.getElementById 
('tokyoShop');

var liEl = document.createElement('li');

liEL.textContent = 'proof of life';

tokyoShopElement.appendChild(liEl);

var tokyoShop = {
    storeName: 'Tokyo Shop',
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

    randomNumber function(min, max) {
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
    storeName: 'Dubai Shop',
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

    randomNumber function(min, max) {
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
    storeName: 'Paris Shop',
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

    randomNumber function(min, max) {
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
    storeName: 'Lima Shop',
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

    randomNumber function(min, max) {
        return Math.floor(Math.random()*(max - min)) + min;
    }
};



