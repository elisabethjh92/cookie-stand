'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allStores = [];

Store.allStores = [];

Store.allStoresTotal = 0;

var tableData = document.getElementById('tableData');

function Store(minCustomerEachHour, maxCustomerEachHour, averageCookiesPerCustomer, locationName) {
  this.minCustomerEachHour = minCustomerEachHour;
  this.maxCustomerEachHour = maxCustomerEachHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.locationName = locationName;
  this.cookiesEachHour = [];
  this.customersEachHour = [];
  this.totalCookiesForTheDay = 0;
  Store.allStores.push(this);
};

console.log(this.maxCustomerEachHour);

Store.prototype.calculateCustomers = function() {
    for(var i = 0; i < hours.length; i++) {
        var randomCustomer = Math.floor(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour + 1) + this.minCustomerEachHour);
        this.customersEachHour.push(randomCustomer);
    }
};


Store.prototype.calculateCookies = function() {
    this.calculateCustomers();
    for(var i = 0; i < hours.length; i++) {
        var cookies = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
        console.log(this.totalCookiesForTheDay);
        this.cookiesEachHour.push(cookies);
        this.totalCookiesForTheDay += cookies;
    }
};

Store.prototype.generateHourlyCookies = function() {
  for (var i = 0; i < hours.length; i++) {
    var randomCustomer = Math.floor(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour + 1) + this.minCustomerEachHour);
    this.customersEachHour.push(randomCustomer);
  }
};

//table assembly
//header row
var renderHeaderRow = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl);
  }
  var tdElem = document.createElement('td');
  tdElem.textContent = 'Total';
  trEl.appendChild(tdElem);
  tableData.appendChild(trEl);
};

renderHeaderRow();

//shop row
Store.prototype.renderShopRow = function() {
    this.generateHourlyCookies();
    this.calculateCookies();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locationName;
  trEl.appendChild(tdEl);

  for( var i = 0; i < this.cookiesEachHour.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
  }

  var tdElem = document.createElement('td');
  tdElem.textContent = this.totalCookiesForTheDay;
  trEl.appendChild(tdElem);
  tableData.appendChild(trEl);
};

//footer row
var renderFooterRow = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Totals: ';
  trEl.appendChild(tdEl);

  for( var i = 0; i < hours.length; i++) {
    var storesHourlyTotals = 0;
    var td = document.createElement('td');

    for( var j = 0; j < Store.allStores.length; j++) {
      storesHourlyTotals += Store.allStores[j].cookiesEachHour[i];
    }
    td.textContent = storesHourlyTotals;
    trEl.appendChild(td);
  }

  var tdElem = document.createElement('td');
  tdElem.textContent = Store.allStoresTotal;
  trEl.appendChild(tdElem);
  tableData.appendChild(trEl);
};

var seattleStore = new Store(23, 65, 6.3, 'Seattle');
var tokyoStore = new Store(3, 24, 1.2, 'Tokyo');
var dubaiStore = new Store(11, 38, 3.7, 'Dubai');
var parisStore = new Store(20, 38, 2.3, 'Paris');
var limaStore = new Store(2, 16, 4.6, 'Lima');


seattleStore.renderShopRow();
tokyoStore.renderShopRow();
dubaiStore.renderShopRow();
parisStore.renderShopRow();
limaStore.renderShopRow();
renderFooterRow();
