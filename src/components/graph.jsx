import React from 'react';

export class Graph extends React.Component {

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

  }

  // barchart constructor
  barChart(year) {

    var arrChartData = [];

    if (parseInt(year, 10) === 2018) {

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

    } else if (parseInt(year, 10) === 2017) {

      var jan2017_One = {name: "Property One", month: "Jan", exp: 750, inc: 1600};
      var feb2017_One = {name: "Property One", month: "Feb", exp: 650, inc: 1600};
      var mar2017_One = {name: "Property One", month: "Mar", exp: 820, inc: 1600};
      var apr2017_One = {name: "Property One", month: "Apr", exp: 950, inc: 1600};
      var may2017_One = {name: "Property One", month: "May", exp: 833, inc: 1600};
      var jun2017_One = {name: "Property One", month: "Jun", exp: 250, inc: 1600};
      var jul2017_One = {name: "Property One", month: "Jul", exp: 920, inc: 1650};
      var aug2017_One = {name: "Property One", month: "Aug", exp: 670, inc: 1650};
      var sep2017_One = {name: "Property One", month: "Sep", exp: 880, inc: 1650};
      var oct2017_One = {name: "Property One", month: "Oct", exp: 750, inc: 1650};
      var nov2017_One = {name: "Property One", month: "Nov", exp: 987, inc: 1650};
      var dec2017_One = {name: "Property One", month: "Dec", exp: 670, inc: 1650};

      arrChartData.push(jan2017_One, feb2017_One, mar2017_One, apr2017_One, may2017_One, jun2017_One, jul2017_One, aug2017_One, sep2017_One, oct2017_One, nov2017_One, dec2017_One);

    } else {

      var jan2017_Two = {name: "Property Two", month: "Jan", exp: 450, inc: 950};
      var feb2017_Two = {name: "Property Two", month: "Feb", exp: 560, inc: 950};
      var mar2017_Two = {name: "Property Two", month: "Mar", exp: 550, inc: 950};
      var apr2017_Two = {name: "Property Two", month: "Apr", exp: 750, inc: 975};
      var may2017_Two = {name: "Property Two", month: "May", exp: 540, inc: 975};
      var jun2017_Two = {name: "Property Two", month: "Jun", exp: 650, inc: 975};
      var jul2017_Two = {name: "Property Two", month: "Jul", exp: 430, inc: 975};
      var aug2017_Two = {name: "Property Two", month: "Aug", exp: 450, inc: 975};
      var sep2017_Two = {name: "Property Two", month: "Sep", exp: 630, inc: 975};
      var oct2017_Two = {name: "Property Two", month: "Oct", exp: 750, inc: 975};
      var nov2017_Two = {name: "Property Two", month: "Nov", exp: 550, inc: 975};
      var dec2017_Two = {name: "Property Two", month: "Dec", exp: 740, inc: 975};

      arrChartData.push(jan2017_Two, feb2017_Two, mar2017_Two, apr2017_Two, may2017_Two, jun2017_Two, jul2017_Two, aug2017_Two, sep2017_Two, oct2017_Two, nov2017_Two, dec2017_Two);

    }

    var arrData = arrChartData;

    this.chartSettings(arrData);
    this.drawAxisLabelMarkers(arrData);
    this.drawChartWithAnimation(arrData);

    //drawBlueLine(arrData);
    //drawRedLine(arrData);

  };

  //initialize the chart and bar values
  chartSettings(arrData) {

    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

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
    this.bWidth = (this.cWidth / this.totalBars) - this.bMargin;

    // find maximum value to plot on chart
    this.maxDataValue = 0;
    for (var i = 0; i < this.totalBars; i++) {
      //var arrVal = arrData[i].split(',');
      //console.log(arrVal);
      //var barVal = parseInt(arrVal[2]) - parseInt(arrVal[1]); //parseInt(arrVal[1]);
      var barVal = parseInt(arrData[i].inc, 10) - parseInt(arrData[i].exp, 10); //parseInt(arrVal[1]);
      if (parseInt(barVal, 10) > parseInt(this.maxDataValue, 10))
            this.maxDataValue = barVal;
    }

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

    this.context.beginPath();
    this.context.moveTo(x, y);
    this.context.lineTo(X, Y);
    this.context.closePath();
    this.context.stroke();
  };

  // draw chart markers on X and Y Axis
  drawMarkers(arrData) {

    var numMarkers = parseInt(this.maxDataValue / this.totLabelsOnYAxis, 10);
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
    this.context.fillText('Cash FLow (YTD)', this.cMarginSpace + (this.cWidth / 2), this.cMarginHeight + 30)

  };

  drawChartWithAnimation(arrData) {

    // Loop through the total bars and draw
    for (var i = 0; i < this.totalBars; i++) {
      //var arrVal = arrData[i].split(",");
      var bVal = parseInt(arrData[i].inc, 10) - parseInt(arrData[i].exp, 10);

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

  drawGreenRectangle(x, y, w, h, fill) {

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

    var fY = this.props.fiscalYearProp;

    this.barChart(fY);

  }

  componentDidUpdate() {

    const canvas = this.refs.canvas;
    this.context = canvas.getContext("2d");
    this.canvasHeight = canvas.height;
    this.canvasWidth = canvas.width;

    var fY = this.props.fiscalYearProp;

    this.barChart(fY);

  }

  render() {
    return (
      <div className="Graph">
        <canvas ref="canvas" width={600} height={400} />
      </div>
    );
  }
}

//export default Graph;
