'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

SalmonCookieShop.allStores = [];

SalmonCookieShop.allStoresTotal = 0;

var tableData = document.getElementById('tableData');

var tableBody = document.getElementById('tableBody');

function SalmonCookieShop(minCustomerEachHour, maxCustomerEachHour, averageCookiesPerCustomer, locationName) {
  this.minCustomerEachHour = minCustomerEachHour;
  this.maxCustomerEachHour = maxCustomerEachHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.locationName = locationName;
  this.cookiesEachHour = [];
  this.customersEachHour = [];
  this.totalCookiesForTheDay = 0;
  SalmonCookieShop.allStores.push(this);
  this.calculateCustomers();
  this.calclulateCookies();
  this.renderShopRow();
};

SalmonCookieShop.prototype.calculateCustomers = function() {
      for(var i = 0; i < hours.length; i++) {
          var randomCustomer = Math.floor(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour + 1) + this.minCustomerEachHour);
          this.customersEachHour.push(randomCustomer);
          console.log(calculateCustomers);
      }
  };

SalmonCookieShop.prototype.generateHourlyCookies = function() {
  for (var i = 0; i < hours.length; i++) {
    var randomCustomer = Math.floor(Math.random() * (this.maxCustomerEachHour - this.minCustomerEachHour + 1) + this.minCustomerEachHour);
    this.customersEachHour.push(randomCustomer);
    console.log(generateHourlyCookies);
  }
};

SalmonCookieShop.prototype.calculateCookies = function() {
    for(var i = 0; i < hours.length; i++) {
        var cookies = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
        this.totalCookiesForTheDay += cookies;
        console.log(this.totalCookiesForTheDay);
        this.cookiesEachHour.push(cookies);
        console.log(calculateCookies);
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
  tableBody.appendChild(trEl);
}

renderHeaderRow();

//shop row
SalmonCookieShop.prototype.renderShopRow = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locationName;
  trEl.appendChild(tdEl);

  for( var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCookiesTotal[i];
    trEl.appendChild(tdEl);
  }

  var tdElem = document.createElement('td');
  tdElem.textContent = this.dailyCookies;
  trEl.appendChild(tdElem);
  tableBody.appendChild(trEl);
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

    for( var j = 0; j < SalmonCookieShop.allStores.length; j++) {
      storesHourlyTotals =+ SalmonCookieShop.allStores[j].hourlyCookiesTotal[i];
    }
    td.textContent = storesHourlyTotals;
    trEl.appendChild(td);
  }

  var tdElem = document.createElement('td');
  tdElem.textContent = SalmonCookieShop.allStoresTotal;
  trEl.appendChild(tdElem);
  SalmonCookieShop.tableDataEl.appendChild(trEl);
};

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);