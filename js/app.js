'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


var seattleShopElement = document.getElementById('seattle');

var seattleSales = document.getElementById('seattle');

var seattleShop = {
    storeName: 'Seattle',
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
        }
    },

    calculateCookies: function() {
        for(var i = 0; i < hours.length; i++) {
           var cookies = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
           this.totalCookiesForTheDay += cookies;
           console.log(this.totalCookiesForTheDay);
           this.cookiesEachHour.push(cookies);
        }
    },

    render: function() {
        this.calculateCustomers();
        this.calculateCookies();
        var ulEl = document.createElement('ul');
        var h3El = document.createElement('h3');
        h3El.textContent = this.storeName;
        seattleSales.appendChild(h3El);
        for(var i = 0; i < hours.length; i++) {
            var array = [hours[i], this.cookiesEachHour[i]];
            var liEl = document.createElement("li");
            liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`;
            ulEl.appendChild(liEl);
        }

        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
        ulEl.appendChild(liEl);
        seattleSales.appendChild(ulEl);
    },
};


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1));
}

seattleShop.render();

var tokyoShopElement = document.getElementById('tokyo');

var tokyoSales = document.getElementById('tokyo');

var tokyoShop = {
    storeName: 'Tokyo',
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
        }
    },

    calculateCookies: function() {
        for(var i = 0; i < hours.length; i++) {
           var cookies = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
           this.totalCookiesForTheDay += cookies;
           console.log(this.totalCookiesForTheDay);
           this.cookiesEachHour.push(cookies);
        }
    },

    render: function() {
        this.calculateCustomers();
        this.calculateCookies();
        var ulEl = document.createElement('ul');
        var h3El = document.createElement('h3');
        h3El.textContent = this.storeName;
        tokyoSales.appendChild(h3El);
        for(var i = 0; i < hours.length; i++) {
            var array = [hours[i], this.cookiesEachHour[i]];
            var liEl = document.createElement("li");
            liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`;
            ulEl.appendChild(liEl);
        }

        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
        ulEl.appendChild(liEl);
        tokyoSales.appendChild(ulEl);
    },
};

tokyoShop.render();

var dubaiShopElement = document.getElementById('dubai');

var dubaiSales = document.getElementById('dubai');

var dubaiShop = {
    storeName: 'Dubai',
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
        }
    },

    calculateCookies: function() {
        for(var i = 0; i < hours.length; i++) {
           var cookies = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
           this.totalCookiesForTheDay += cookies;
           console.log(this.totalCookiesForTheDay);
           this.cookiesEachHour.push(cookies);
        }
    },

    render: function() {
        this.calculateCustomers();
        this.calculateCookies();
        var ulEl = document.createElement('ul');
        var h3El = document.createElement('h3');
        h3El.textContent = this.storeName;
        dubaiSales.appendChild(h3El);
        for(var i = 0; i < hours.length; i++) {
            var array = [hours[i], this.cookiesEachHour[i]];
            var liEl = document.createElement("li");
            liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`;
            ulEl.appendChild(liEl);
        }

        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
        ulEl.appendChild(liEl);
        dubaiSales.appendChild(ulEl);
    },
};

dubaiShop.render();

var parisShopElement = document.getElementById('paris');

var parisSales = document.getElementById('paris');

var parisShop = {
    storeName: 'Paris',
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
        }
    },

    calculateCookies: function() {
        for(var i = 0; i < hours.length; i++) {
           var cookies = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
           this.totalCookiesForTheDay += cookies;
           console.log(this.totalCookiesForTheDay);
           this.cookiesEachHour.push(cookies);
        }
    },

    render: function() {
        this.calculateCustomers();
        this.calculateCookies();
        var ulEl = document.createElement('ul');
        var h3El = document.createElement('h3');
        h3El.textContent = this.storeName;
        parisSales.appendChild(h3El);
        for(var i = 0; i < hours.length; i++) {
            var array = [hours[i], this.cookiesEachHour[i]];
            var liEl = document.createElement("li");
            liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`;
            ulEl.appendChild(liEl);
        }
        
        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
        ulEl.appendChild(liEl);
        parisSales.appendChild(ulEl);
    },
};

parisShop.render();

var limaShopElement = document.getElementById('lima');

var limaSales = document.getElementById('lima');

var limaShop = {
    storeName: 'Lima',
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
        }
    },

    calculateCookies: function() {
        for(var i = 0; i < hours.length; i++) {
           var cookies = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
           this.totalCookiesForTheDay += cookies;
           console.log(this.totalCookiesForTheDay);
           this.cookiesEachHour.push(cookies);
        }
    },

    render: function() {
        this.calculateCustomers();
        this.calculateCookies();
        var ulEl = document.createElement('ul');
        var h3El = document.createElement('h3');
        h3El.textContent = this.storeName;
        limaSales.appendChild(h3El);
        for(var i = 0; i < hours.length; i++) {
            var array = [hours[i], this.cookiesEachHour[i]];
            var liEl = document.createElement("li");
            liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} Cookies`;
            ulEl.appendChild(liEl);
        }
        
        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
        ulEl.appendChild(liEl);
        limaSales.appendChild(ulEl);
    },
};

limaShop.render();



