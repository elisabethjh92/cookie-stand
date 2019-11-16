'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var storeSales = document.getElementById('stores')

var seattleShopElement = document.getElementById('seattleShop');

var seattleShop = {
    minCustomerEachHour: 23,
    maxCustomerEachHour: 65,
    averageCookiesPerCustomer: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForTheDay: 0,

    calculateCustomers: function() {
        for(var i = 0; i < hours.length; i++) {
            var randomCustomer = Math.floor(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour + 1) + this.minCustomerEachHour);
            this.customersEachHour.push(randomCustomer);
            //console.log(this.customersEachHour);
        }
    },

    calculateCookies: function() {
        for(var i = 0; i < hours.length; i++) {
           var cookies = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
           this.totalCookiesForTheDay += cookies;
           console.log(this.totalCookiesForTheDay);
           this.cookiesEachHour.push(cookies);
           //console.log(this.cookiesEachHour, 'is cookies');
        }
    },

    render: function() {
        this.calculateCustomers();
        this.calculateCookies();
        var ulEl = document.createElement('ul');
        var h2El = document.createElement('h2');
        h2El.textContent = this.storeName;
        storeSales.appendChild(h2El);
        for(var i = 0; i < hours.length; i++) {
            var array = [hours[i], this.cookiesEachHour[i]];
            var liEl = document.createElement("li");
            liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`;
            ulEl.appendChild(liEl);
        }
        //console.log(this.cookiesEachHour);
        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
        ulEl.appendChild(liEl);
        storeSales.appendChild(ulEl);
    },
};


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1));
}

seattleShop.render();

var tokyoShopElement = document.getElementById('tokyoShop');

//var liEl = document.createElement('li');

//tokyoShopElement.appendChild(liEl);

var tokyoShop = {
    minCustomerEachHour: 3,
    maxCustomerEachHour: 24,
    averageCookiesPerCustomer: 1.2,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForTheDay: 0,

    calculateCustomers: function() {
        for(var i = 0; i < hours.length; i++) {
            var randomCustomer = Math.floor(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour + 1) + this.minCustomerEachHour);
            this.customersEachHour.push(randomCustomer);
            //console.log(this.customersEachHour);
        }
    },

    calculateCookies: function() {
        for(var i = 0; i < hours.length; i++) {
           var cookies = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
           this.totalCookiesForTheDay += cookies;
           console.log(this.totalCookiesForTheDay);
           this.cookiesEachHour.push(cookies);
           //console.log(this.cookiesEachHour, 'is cookies');
        }
    },

    render: function() {
        this.calculateCustomers();
        this.calculateCookies();
        var ulEl = document.createElement('ul');
        var h2El = document.createElement('h2');
        h2El.textContent = this.storeName;
        storeSales.appendChild(h2El);
        for(var i = 0; i < hours.length; i++) {
            var array = [hours[i], this.cookiesEachHour[i]];
            var liEl = document.createElement("li");
            liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`;
            ulEl.appendChild(liEl);
        }
        //console.log(this.cookiesEachHour);
        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
        ulEl.appendChild(liEl);
        storeSales.appendChild(ulEl);
    },
};

tokyoShop.render();

var dubaiShopElement = document.getElementById('dubaiShop');

//dubaiShopElement.appendChild(liEl);

var dubaiShop = {
    minCustomerEachHour: 11,
    maxCustomerEachHour: 38,
    averageCookiesPerCustomer: 3.7,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForTheDay: 0,

    calculateCustomers: function() {
        for(var i = 0; i < hours.length; i++) {
            var randomCustomer = Math.floor(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour + 1) + this.minCustomerEachHour);
            this.customersEachHour.push(randomCustomer);
            //console.log(this.customersEachHour);
        }
    },

    calculateCookies: function() {
        for(var i = 0; i < hours.length; i++) {
           var cookies = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
           this.totalCookiesForTheDay += cookies;
           console.log(this.totalCookiesForTheDay);
           this.cookiesEachHour.push(cookies);
           //console.log(this.cookiesEachHour, 'is cookies');
        }
    },

    render: function() {
        this.calculateCustomers();
        this.calculateCookies();
        var ulEl = document.createElement('ul');
        var h2El = document.createElement('h2');
        h2El.textContent = this.storeName;
        storeSales.appendChild(h2El);
        for(var i = 0; i < hours.length; i++) {
            var array = [hours[i], this.cookiesEachHour[i]];
            var liEl = document.createElement("li");
            liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`;
            ulEl.appendChild(liEl);
        }
        //console.log(this.cookiesEachHour);
        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
        ulEl.appendChild(liEl);
        storeSales.appendChild(ulEl);
    },
};

dubaiShop.render();

var parisShopElement = document.getElementById('parisShop');

//var liEl = document.createElement('li');

//parisShopElement.appendChild(liEl);

var parisShop = {
    minCustomerEachHour: 20,
    maxCustomerEachHour: 38,
    averageCookiesPerCustomer: 2.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForTheDay: 0,

    calculateCustomers: function() {
        for(var i = 0; i < hours.length; i++) {
            var randomCustomer = Math.floor(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour + 1) + this.minCustomerEachHour);
            this.customersEachHour.push(randomCustomer);
            //console.log(this.customersEachHour);
        }
    },

    calculateCookies: function() {
        for(var i = 0; i < hours.length; i++) {
           var cookies = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
           this.totalCookiesForTheDay += cookies;
           console.log(this.totalCookiesForTheDay);
           this.cookiesEachHour.push(cookies);
           //console.log(this.cookiesEachHour, 'is cookies');
        }
    },

    render: function() {
        this.calculateCustomers();
        this.calculateCookies();
        var ulEl = document.createElement('ul');
        var h2El = document.createElement('h2');
        h2El.textContent = this.storeName;
        storeSales.appendChild(h2El);
        for(var i = 0; i < hours.length; i++) {
            var array = [hours[i], this.cookiesEachHour[i]];
            var liEl = document.createElement("li");
            liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`;
            ulEl.appendChild(liEl);
        }
        //console.log(this.cookiesEachHour);
        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
        ulEl.appendChild(liEl);
        storeSales.appendChild(ulEl);
    },
};

parisShop.render();

var limaShopElement = document.getElementById('limaShop');

//var liEl = document.createElement('li');

//limaShopElement.appendChild(liEl);

var limaShop = {
    minCustomerEachHour: 2,
    maxCustomerEachHour: 16,
    averageCookiesPerCustomer: 4.6,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForTheDay: 0,

    calculateCustomers: function() {
        for(var i = 0; i < hours.length; i++) {
            var randomCustomer = Math.floor(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour + 1) + this.minCustomerEachHour);
            this.customersEachHour.push(randomCustomer);
            //console.log(this.customersEachHour);
        }
    },

    calculateCookies: function() {
        for(var i = 0; i < hours.length; i++) {
           var cookies = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
           this.totalCookiesForTheDay += cookies;
           console.log(this.totalCookiesForTheDay);
           this.cookiesEachHour.push(cookies);
           //console.log(this.cookiesEachHour, 'is cookies');
        }
    },

    render: function() {
        this.calculateCustomers();
        this.calculateCookies();
        var ulEl = document.createElement('ul');
        var h2El = document.createElement('h2');
        h2El.textContent = this.storeName;
        storeSales.appendChild(h2El);
        for(var i = 0; i < hours.length; i++) {
            var array = [hours[i], this.cookiesEachHour[i]];
            var liEl = document.createElement("li");
            liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`;
            ulEl.appendChild(liEl);
        }
        //console.log(this.cookiesEachHour);
        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
        ulEl.appendChild(liEl);
        storeSales.appendChild(ulEl);
    },
};

limaShop.render();

