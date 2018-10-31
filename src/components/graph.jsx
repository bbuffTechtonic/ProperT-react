import React from 'react';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.context = '';
    this.bWidth = '';
    this.bMargin = '';
    this.totalBars = '';
    this.maxDataValue = '';
    this.bWidthMargin=  '';
    this.ctr = '';
    this.numctr = '';
    this.speed = '';
    this.totLabelsOnYAxis = '';
    this.state = { arrChartData: [] };
    this.canvasHeight = '';
    this.canvasWidth = '';
    this.cWidth = '';
    this.cHeight = '';
    this.cMargin = '';
    this.cSpace = '';
    this.cMarginSpace = '';
    this.cMarginHeight =  '';
    this.bWidth = '';
    this.bMargin = '';
    this.totalBars = '';
    this.maxDataValue = '';
    this.bWidthMargin = '';
    this.ctr = '';
    this.numctr = '';
    this.speed = '';
    this.totLabelsOnYAxis = '';

     //this.mockData = this.mockData.bind(this);
  }

  async mockData() {

    // copy current list of items
    const arrChartData = [...this.state.arrChartData];

    arrChartData.push("Property One","Jan", 850, 1650);
    arrChartData.push("Property One","Feb", 943, 1650);
    arrChartData.push("Property One","Mar", 580, 1650);
    arrChartData.push("Property One","Apr", 570, 1650);
    arrChartData.push("Property One","May", 890, 1650);
    arrChartData.push("Property One","Jun", 750, 1650);
    arrChartData.push("Property One","Jul", 790, 1700);
    arrChartData.push("Property One","Aug", 650, 1700);
    arrChartData.push("Property One","Sep", 990, 1700);
    arrChartData.push("Property One","Oct", 850, 1700);

    // update state with new list, reset the new item input
    this.setState({arrChartData});

    await this.barChart('');

  }

  // barchart constructor
  barChart(year) {

    // canvas = document.getElementById('bchart');
    // if (canvas && canvas.getContext) {
    //   context = canvas.getContext('2d');
    // }

    // if (!year) {
    //   this.loadChart('2018');
    // } else {
    //   this.loadChart(year);
    // }

    //this.loadChart(year);

    var arrChartData = [];

    var jan2018_One = {name: "Property One", month: "Jan", exp: 850, inc: 1650};
    var feb2018_One = {name: "Property One", month: "Feb", exp: 943, inc: 1650};
    var mar2018_One = {name: "Property One", month: "Mar", exp: 580, inc: 1650};
    var apr2018_One = {name: "Property One", month: "Apr", exp: 570, inc: 1650};
    var may2018_One = {name: "Property One", month: "May", exp: 890, inc: 1650};
    var jun2018_One = {name: "Property One", month: "Jun", exp: 750, inc: 1650};
    var jul2018_One = {name: "Property One", month: "Jul", exp: 790, inc: 1700};
    var aug2018_One = {name: "Property One", month: "Aug", exp: 650, inc: 1700};
    var sep2018_One = {name: "Property One", month: "Sep", exp: 990, inc: 1700};
    var oct2018_One = {name: "Property One", month: "Oct", exp: 850, inc: 1700};

    arrChartData.push(jan2018_One, feb2018_One, mar2018_One, apr2018_One, may2018_One, jun2018_One, jul2018_One, aug2018_One, sep2018_One, oct2018_One);

    console.log('arrChartData: ' + arrChartData);

    var arrData = arrChartData;

    console.log(arrData);

    this.chartSettings(arrData);
    this.drawAxisLabelMarkers(arrData);
    //this.drawChartWithAnimation(arrData);

    //drawBlueLine(arrData);
    //drawRedLine(arrData);

  };

  //initialize the chart and bar values
  chartSettings(arrData) {

    console.log('chartsettings');

    //canvas.height = canvas.height;
    //canvas.width = canvas.width;

    this.context.clearRect(0, 0, this.state.canvasWidth, this.state.canvasHeight);

    // chart properties
    this.cMargin = 25;
    this.cSpace = 60;
    this.cHeight = this.canvasHeight - 2 * this.cMargin - this.cSpace;
    this.cWidth = this.canvasWidth - 2 * this.cMargin - this.cSpace;
    this.cMarginSpace = this.cMargin + this.cSpace;
    this.cMarginHeight = this.cMargin + this.cHeight;

    // bar properties
    this.bMargin = 15;
    this.totalBars = arrData.length;
    this.bWidth = (this.state.cWidth / this.totalBars) - this.bMargin;

    // find maximum value to plot on chart
    this.maxDataValue = 0;
    for (var i = 0; i < this.totalBars; i++) {
      //var arrVal = arrData[i].split(',');
      //console.log(arrVal);
      //var barVal = parseInt(arrVal[2]) - parseInt(arrVal[1]); //parseInt(arrVal[1]);
      var barVal = parseInt(arrData[i].inc) - parseInt(arrData[i].exp); //parseInt(arrVal[1]);
      if (parseInt(barVal) > parseInt(this.maxDataValue))
            this.maxDataValue = barVal;
    };

    console.log('maxdata: ' + this.maxDataValue);

    this.totLabelsOnYAxis = 10;
    this.context.font = '10pt Garamond';

    // initialize Animation variables
    this.ctr = 0;
    this.numctr = 100;
    this.speed = 10;

  };

  // draw chart axis, labels and markers
  drawAxisLabelMarkers(arrData) {

    this.context.lineWidth = '2.0';

    // draw y axis
    this.drawAxis(this.cMarginSpace, this.cMarginHeight, this.cMarginSpace, this.cMargin);

    // draw x axis
    this.drawAxis(this.cMarginSpace, this.cMarginHeight, this.cMarginSpace + this.cWidth, this.cMarginHeight);

    this.context.lineWidth = '1.0';

    this.drawMarkers(arrData);



  };

  // draw X and Y axis
  drawAxis(x, y, X, Y) {

    console.log('drawaxis x:' + x);

    this.context.beginPath();
    this.context.moveTo(x, y);
    this.context.lineTo(X, Y);
    this.context.closePath();
    this.context.stroke();
  };

  // draw chart markers on X and Y Axis
  drawMarkers(arrData) {

    var numMarkers = parseInt(this.maxDataValue / this.totLabelsOnYAxis);
    this.context.textAlign = 'right';
    this.context.fillStyle = '#000';

    // Y Axis
    for (var i = 0; i <= this.totLabelsOnYAxis; i++) {
      var markerVal = i * numMarkers;
      var markerValHt = i * numMarkers * this.cHeight;
      var xMarkers = this.cMarginSpace - 5;
      var yMarkers = this.cMarginHeight - (markerValHt / this.maxDataValue);
      this.context.fillText(markerVal, xMarkers, yMarkers, this.cSpace);
    }

    // X Axis
    this.context.textAlign = 'center';

    for (i = 0; i < this.totalBars; i++) {
        //arrval = arrData[i].split(",");
        var name = arrData[i].month;

        var markerXPos = this.cMarginSpace + this.bMargin + (i * (this.bWidth + this.bMargin)) + (this.bWidth / 2);
        var markerYPos = this.cMarginHeight + 10;

        this.context.fillText(name, markerXPos, markerYPos, this.bWidth);

    }

    this.context.save();

    // Add Y Axis title
    this.context.translate(this.cMargin + 10, this.cHeight / 2);
    this.context.rotate(Math.PI * -90 / 180);
    this.context.fillText('Amount in USD', 0, 0);

    this.context.restore();

    // Add X Axis Title
    this.context.fillText('Cash FLow (YTD)', this.cMarginSpace + (this.cWidth / 2), this.cMarginHeight + 30);

    this.drawChartWithAnimation(arrData);

  };

  drawChartWithAnimation(arrData) {

    console.log('drawChartWithAnimation ' + arrData.length);
    // Loop through the total bars and draw
    for (var i = 0; i < this.totalBars; i++) {
      //var arrVal = arrData[i].split(",");
      var bVal = parseInt(arrData[i].inc) - parseInt(arrData[i].exp);

      // If Profit draw Green Bar else draws Orange Bar
      if (bVal >= 0) {
        var bHt = (bVal * this.cHeight / this.maxDataValue);
        var bX = this.cMarginSpace + (i * (this.bWidth + this.bMargin)) + this.bMargin;
        var bY = this.cMarginHeight - bHt - 2;
        this.drawGreenRectangle(bX, bY, this.bWidth, bHt, true);
      } else {
        bVal = bVal * -1;
        bHt = (bVal * this.cHeight / this.maxDataValue);
        bX = this.cMarginSpace + (i * (this.bWidth + this.bMargin)) + this.bMargin;
        bY = this.cMarginHeight - bHt - 2;
        this.drawOrangeRectangle(bX, bY, this.bWidth, bHt, true);
      }
    }
  };
  //
  // drawBlueLine(arrData) {
  //   var prevX, prevY = 0;
  //
  //   prevX = cMarginSpace;
  //   prevY = cMarginHeight;
  //
  //   // Loop through the total bars and draw
  //   for (var i = 0; i < totalBars; i++) {
  //
  //       var arrVal = arrData[i].split(",");
  //       bVal = parseInt(arrVal[2]);
  //       bHt = (bVal * cHeight / maxDataValue);
  //       bX = cMarginSpace + (i * (bWidth + bMargin)) + bMargin;
  //       bY = cMarginHeight - bHt - 2;
  //
  //       //Draw connecting lines
  //       drawLine(prevX, prevY, bX + (bWidth / 2), bY, 'blue', 3);
  //       prevX = bX + (bWidth / 2);
  //       prevY = bY;
  //   }
  // };
  //
  // drawRedLine(arrData) {
  //   var prevX, prevY = 0;
  //
  //   prevX = cMarginSpace;
  //   prevY = cMarginHeight;
  //
  //   // Loop through the total bars and draw
  //   for (var i = 0; i < totalBars; i++) {
  //
  //       var arrVal = arrData[i].split(",");
  //       bVal = parseInt(arrVal[1]);
  //       bHt = (bVal * cHeight / maxDataValue);
  //       bX = cMarginSpace + (i * (bWidth + bMargin)) + bMargin;
  //       bY = cMarginHeight - bHt - 2;
  //
  //       //Draw connecting lines
  //       drawLine(prevX, prevY, bX + (bWidth / 2), bY, 'red', 3);
  //
  //       prevX = bX + (bWidth / 2);
  //       prevY = bY;
  //   }
  // };
  //
  // // Draws the Lines on the Chart
  // drawLine(startX, startY, endX, endY, strokeStyle, lineWidth) {
  //   if (strokeStyle != null) context.strokeStyle = strokeStyle;
  //   if (lineWidth != null) context.lineWidth = lineWidth;
  //   context.beginPath();
  //   context.moveTo(startX, startY);
  //   context.lineTo(endX, endY);
  //   context.stroke();
  //   context.closePath();
  // };

  drawGreenRectangle(x, y, w, h, fill) {

    console.log('drawgreen' + x);
    // Draws Green Bars
    this.context.beginPath();
    this.context.rect(x, y, w, h);
    this.context.closePath();

    if (fill) {
        var gradient = this.context.createLinearGradient(0, 0, 0, h);
        gradient.addColorStop(0, 'green');
        gradient.addColorStop(1, 'green');
        this.context.fillStyle = gradient;
        this.context.strokeStyle = gradient;
        this.context.fill();
    }

    this.context.stroke();
  }

  drawOrangeRectangle(x, y, w, h, fill) {

    console.log('draworange' + x);
    //Draws Orange Bars
    this.context.beginPath();
    this.context.rect(x, y, w, h);
    this.context.closePath();
    //context.stroke();

    if (fill) {
        var gradient = this.context.createLinearGradient(0, 0, 0, h);
        gradient.addColorStop(0, 'yellow');
        gradient.addColorStop(1, 'red');
        this.context.fillStyle = gradient;
        this.context.strokeStyle = gradient;
        this.context.fillRect(x, y, w, h);
        //context.fill();
    }
    this.context.stroke();
  }

  componentDidMount() {

    const canvas = this.refs.canvas;
    this.context = canvas.getContext("2d");
    this.canvasHeight = canvas.height;
    this.canvasWidth = canvas.width;

    this.mockData();

  }

  render() {
    return (
      <div className="Graph">
        <canvas ref="canvas" width={600} height={400} />
      </div>
    );
  }
}

export default Graph;
