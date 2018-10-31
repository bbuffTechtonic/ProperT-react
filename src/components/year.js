// import React from 'react';
//
// class Year extends React.Component {
//   render() {
//     return (
//       <section className="year">
//
//       </section>
//     );
//   }
// }
//
// export default Year;
//
//
//
// //=====================================================
// // Data Engine for Chart using JQuery and LocalStorage
// //=====================================================
//
//
// Year.prototype.loadChart = function(year) {
//
//   this.restoreCalendar(year);
//
//   var totIncome = 0;
//   var totExpenses = 0;
//   var totProfit = 0;
//   arrChartData = [];
//
//   if (!this.myYear) {
//     alert("There is no Data available");
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     return false;
//   }
//
//   for (var i = 0;i < this.myYear.length;i++) {
//
//
//     arrChartData[i] = this.myYear[i].month + ", " + this.myYear[i].totExpenses + ", " + this.myYear[i].totIncome;
//     totIncome = totIncome + this.myYear[i].totIncome;
//     totExpenses = totExpenses + this.myYear[i].totExpenses;
//
//   }
//
//   totProfit = totIncome - totExpenses;
//
//   $( "#totIncome" ).html( totIncome.toFixed(2) );
//   $( "#totExpenses" ).html( totExpenses.toFixed(2) );
//   $( "#totProfit" ).html( totProfit.toFixed(2) );
//
//   return arrChartData; //Authors array from bookShelf
// };
//
// document.addEventListener("DOMContentLoaded", function(e){
//
//   window.gYear = new Year();
//
//   window.jan2017_One = new propMonth("Property One","Jan", 750, 1600);
//   window.feb2017_One = new propMonth("Property One","Feb", 650, 1600);
//   window.mar2017_One = new propMonth("Property One","Mar", 820, 1600);
//   window.apr2017_One = new propMonth("Property One","Apr", 950, 1600);
//   window.may2017_One = new propMonth("Property One","May", 833, 1600);
//   window.jun2017_One = new propMonth("Property One","Jun", 250, 1600);
//   window.jul2017_One = new propMonth("Property One","Jul", 920, 1650);
//   window.aug2017_One = new propMonth("Property One","Aug", 670, 1650);
//   window.sep2017_One = new propMonth("Property One","Sep", 880, 1650);
//   window.oct2017_One = new propMonth("Property One","Oct", 750, 1650);
//   window.nov2017_One = new propMonth("Property One","Nov", 987, 1650);
//   window.dec2017_One = new propMonth("Property One","Dec", 670, 1650);
//
//   window.jan2018_One = new propMonth("Property One","Jan", 850, 1650);
//   window.feb2018_One = new propMonth("Property One","Feb", 943, 1650);
//   window.mar2018_One = new propMonth("Property One","Mar", 580, 1650);
//   window.apr2018_One = new propMonth("Property One","Apr", 570, 1650);
//   window.may2018_One = new propMonth("Property One","May", 890, 1650);
//   window.jun2018_One = new propMonth("Property One","Jun", 750, 1650);
//   window.jul2018_One = new propMonth("Property One","Jul", 790, 1700);
//   window.aug2018_One = new propMonth("Property One","Aug", 650, 1700);
//   window.sep2018_One = new propMonth("Property One","Sep", 990, 1700);
//   window.oct2018_One = new propMonth("Property One","Oct", 850, 1700);
//
//   window.jan2017_Two = new propMonth("Property Two","Jan", 450, 950);
//   window.feb2017_Two = new propMonth("Property Two","Feb", 560, 950);
//   window.mar2017_Two = new propMonth("Property Two","Mar", 550, 950);
//   window.apr2017_Two = new propMonth("Property Two","Apr", 750, 975);
//   window.may2017_Two = new propMonth("Property Two","May", 540, 975);
//   window.jun2017_Two = new propMonth("Property Two","Jun", 650, 975);
//   window.jul2017_Two = new propMonth("Property Two","Jul", 430, 975);
//   window.aug2017_Two = new propMonth("Property Two","Aug", 450, 975);
//   window.sep2017_Two = new propMonth("Property Two","Sep", 630, 975);
//   window.oct2017_Two = new propMonth("Property Two","Oct", 750, 975);
//   window.nov2017_Two = new propMonth("Property Two","Nov", 550, 975);
//   window.dec2017_Two = new propMonth("Property Two","Dec", 740, 975);
//
//   window.jan2018_Two = new propMonth("Property Two","Jan", 540, 975);
//   window.feb2018_Two = new propMonth("Property Two","Feb", 620, 975);
//   window.mar2018_Two = new propMonth("Property Two","Mar", 590, 975);
//   window.apr2018_Two = new propMonth("Property Two","Apr", 750, 1050);
//   window.may2018_Two = new propMonth("Property Two","May", 670, 1050);
//   window.jun2018_Two = new propMonth("Property Two","Jun", 720, 1050);
//   window.jul2018_Two = new propMonth("Property Two","Jul", 450, 1050);
//   window.aug2018_Two = new propMonth("Property Two","Aug", 680, 1050);
//   window.sep2018_Two = new propMonth("Property Two","Sep", 750, 1050);
//   window.oct2018_Two = new propMonth("Property Two","Oct", 500, 1050);
//
//   gYear.cProp1Y17();
//   gYear.cProp1Y18();
//
//   var selYear = $('#my-year').val();
//   gYear.barChart(selYear);
//
//   //landlord1.getUniqueAdd();
//
// });
//
// Year.prototype.cProp1Y18 = function()
// {
//   // Add a book to bookShelf
//   var storeYear = [];
//
//   storeYear.push(jan2018_One);
//   storeYear.push(feb2018_One);
//   storeYear.push(mar2018_One);
//   storeYear.push(apr2018_One);
//   storeYear.push(may2018_One);
//   storeYear.push(jun2018_One);
//   storeYear.push(jul2018_One);
//   storeYear.push(aug2018_One);
//   storeYear.push(sep2018_One);
//   storeYear.push(oct2018_One);
//
//   //convert JSON bookShelf into a string
//   var dehydratedYear = JSON.stringify(storeYear);
//
//   //save it with local storage
//   window.localStorage.setItem('2018', dehydratedYear);
//
//   return true; //True if not already added - false if it already added
// };
//
// Year.prototype.cProp1Y17 = function()
// {
//   // Add a book to bookShelf
//   var storeYear = [];
//
//   storeYear.push(jan2017_One);
//   storeYear.push(feb2017_One);
//   storeYear.push(mar2017_One);
//   storeYear.push(apr2017_One);
//   storeYear.push(may2017_One);
//   storeYear.push(jun2017_One);
//   storeYear.push(jul2017_One);
//   storeYear.push(aug2017_One);
//   storeYear.push(sep2017_One);
//   storeYear.push(oct2017_One);
//   storeYear.push(nov2017_One);
//   storeYear.push(dec2017_One);
//
//   //convert JSON bookShelf into a string
//   var dehydratedYear = JSON.stringify(storeYear);
//
//   //save it with local storage
//   window.localStorage.setItem('2017', dehydratedYear);
//
//   return true; //True if not already added - false if it already added
// };
//
// Year.prototype.cProp2Y18 = function()
// {
//   // Add a book to bookShelf
//   var storeYear = [];
//
//   storeYear.push(jan2018_Two);
//   storeYear.push(feb2018_Two);
//   storeYear.push(mar2018_Two);
//   storeYear.push(apr2018_Two);
//   storeYear.push(may2018_Two);
//   storeYear.push(jun2018_Two);
//   storeYear.push(jul2018_Two);
//   storeYear.push(aug2018_Two);
//   storeYear.push(sep2018_Two);
//   storeYear.push(oct2018_Two);
//
//   //convert JSON bookShelf into a string
//   var dehydratedYear = JSON.stringify(storeYear);
//
//   //save it with local storage
//   window.localStorage.setItem('p2y2018', dehydratedYear);
//
//   return true; //True if not already added - false if it already added
// };
//
// Year.prototype.cProp2Y17 = function()
// {
//   // Add a book to bookShelf
//   var storeYear = [];
//
//   storeYear.push(jan2017_Two);
//   storeYear.push(feb2017_Two);
//   storeYear.push(mar2017_Two);
//   storeYear.push(apr2017_Two);
//   storeYear.push(may2017_Two);
//   storeYear.push(jun2017_Two);
//   storeYear.push(jul2017_Two);
//   storeYear.push(aug2017_Two);
//   storeYear.push(sep2017_Two);
//   storeYear.push(oct2017_Two);
//   storeYear.push(nov2017_Two);
//   storeYear.push(dec2017_Two);
//
//   //convert JSON bookShelf into a string
//   var dehydratedYear = JSON.stringify(storeYear);
//
//   //save it with local storage
//   window.localStorage.setItem('p2y2017', dehydratedYear);
//
//   return true; //True if not already added - false if it already added
// };
//
// Year.prototype.restoreCalendar = function(year)
// {
//   // Restore bookShelf from Local Storage
//
//   this.myYear = [];
//
//   //get 'bookShelf' and rehydrate it  (convert it back JSON)
//   var rehydratedYear = JSON.parse(window.localStorage.getItem(year));
//
//   this.myYear = rehydratedYear;
//
//   return this.myYear;
// }
//
// function Year()
// {
//   this.myYear = new Array();
// };
//
// function propMonth(property, month, totExpenses, totIncome)
// {
//   this.property = property;
//   this.month = month;
//   this.totExpenses = totExpenses;
//   this.totIncome = totIncome;
//
// };
