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
    this.state = { arrChartData: [], canvasHeight: '', canvasWidth: '',
      cWidth: '', cHeight: '', cMargin: '', cSpace: '',
      cMarginSpace: '', cMarginHeight:  '',
      bWidth: '', bMargin: '', totalBars: '', maxDataValue: '',
      bWidthMargin: '', ctr: '', numctr: '', speed: '', totLabelsOnYAxis: ''
     }
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

    console.log('arrChartData: ' + arrChartData);

    var arrData = arrChartData;

    console.log(arrData);

    this.chartSettings(arrData);
    this.drawAxisLabelMarkers(arrData);
    // this.drawChartWithAnimation(arrData);

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
    this.setState({ cMargin: 25 });
    this.setState({ cSpace: 60 });
    this.setState({ cHeight: this.state.canvasHeight - 2 * this.state.cMargin - this.state.cSpace });
    this.setState({ cWidth: this.state.canvasWidth - 2 * this.state.cMargin - this.state.cSpace });
    this.setState({ cMarginSpace: this.state.cMargin + this.state.cSpace });
    this.setState({ cMarginHeight: this.state.cMargin + this.state.cHeight });

    // bar properties
    this.bMargin = 15;
    this.totalBars = arrData.length;
    this.bWidth = (this.state.cWidth / this.totalBars) - this.bMargin;

    // find maximum value to plot on chart
    this.maxDataValue = 0;
    for (var i = 0; i < this.totalBars; i++) {
      var arrVal = arrData[i].split(',');
      var barVal = parseInt(arrVal[2]) - parseInt(arrVal[1]); //parseInt(arrVal[1]);
      if (parseInt(barVal) > parseInt(this.maxDataValue))
            this.maxDataValue = barVal;
    };


    this.totLabelsOnYAxis = 10;
    this.context.font = '10pt Garamond';

    // initialize Animation variables
    this.ctr = 0;
    this.numctr = 100;
    this.speed = 10;

  };

  // draw chart axis, labels and markers
  drawAxisLabelMarkers(arrData) {

    console.log('drawaxislabelmarkers:' + arrData);

    this.context.lineWidth = '2.0';

    // draw y axis
    this.drawAxis(this.state.cMarginSpace, this.state.cMarginHeight, this.state.cMarginSpace, this.state.cMargin);

    // draw x axis
    this.drawAxis(this.state.cMarginSpace, this.state.cMarginHeight, this.state.cMarginSpace + this.state.cWidth, this.state.cMarginHeight);

    this.context.lineWidth = '1.0';
    //drawMarkers(arrData);
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

  // // draw chart markers on X and Y Axis
  // drawMarkers(arrData) {
  //
  //   var numMarkers = parseInt(maxDataValue / totLabelsOnYAxis);
  //   context.textAlign = 'right';
  //   context.fillStyle = '#000';
  //
  //   // Y Axis
  //   for (var i = 0; i <= totLabelsOnYAxis; i++) {
  //     markerVal = i * numMarkers;
  //     markerValHt = i * numMarkers * cHeight;
  //     var xMarkers = cMarginSpace - 5;
  //     var yMarkers = cMarginHeight - (markerValHt / maxDataValue);
  //     context.fillText(markerVal, xMarkers, yMarkers, cSpace);
  //   }
  //
  //   // X Axis
  //   context.textAlign = 'center';
  //   for (var i = 0; i < totalBars; i++) {
  //       arrval = arrData[i].split(",");
  //       name = arrval[0];
  //
  //       markerXPos = cMarginSpace + bMargin + (i * (bWidth + bMargin)) + (bWidth / 2);
  //       markerYPos = cMarginHeight + 10;
  //
  //       context.fillText(name, markerXPos, markerYPos, bWidth);
  //
  //   }
  //
  //   context.save();
  //
  //   // Add Y Axis title
  //   context.translate(cMargin + 10, cHeight / 2);
  //   context.rotate(Math.PI * -90 / 180);
  //   context.fillText('Amount in USD', 0, 0);
  //
  //   context.restore();
  //
  //   // Add X Axis Title
  //   context.fillText('Cash FLow (YTD)', cMarginSpace + (cWidth / 2), cMarginHeight + 30);
  //
  // };
  //
  // drawChartWithAnimation(arrData) {
  //   // Loop through the total bars and draw
  //   for (var i = 0; i < totalBars; i++) {
  //     var arrVal = arrData[i].split(",");
  //     bVal = parseInt(arrVal[2]) - parseInt(arrVal[1]);
  //
  //     // If Profit draw Green Bar else draws Orange Bar
  //     if (bVal >= 0) {
  //       bHt = (bVal * cHeight / maxDataValue);
  //       bX = cMarginSpace + (i * (bWidth + bMargin)) + bMargin;
  //       bY = cMarginHeight - bHt - 2;
  //       drawGreenRectangle(bX, bY, bWidth, bHt, true);
  //     } else {
  //       bVal = bVal * -1;
  //       bHt = (bVal * cHeight / maxDataValue);
  //       bX = cMarginSpace + (i * (bWidth + bMargin)) + bMargin;
  //       bY = cMarginHeight - bHt - 2;
  //       drawOrangeRectangle(bX, bY, bWidth, bHt, true);
  //     }
  //   }
  // };
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
  //
  // drawGreenRectangle(x, y, w, h, fill) {
  //   // Draws Green Bars
  //   context.beginPath();
  //   context.rect(x, y, w, h);
  //   context.closePath();
  //
  //   if (fill) {
  //       var gradient = context.createLinearGradient(0, 0, 0, h);
  //       gradient.addColorStop(0, 'green');
  //       gradient.addColorStop(1, 'green');
  //       context.fillStyle = gradient;
  //       context.strokeStyle = gradient;
  //       context.fill();
  //   }
  //
  //   context.stroke();
  // }
  //
  // drawOrangeRectangle(x, y, w, h, fill) {
  //   //Draws Orange Bars
  //   context.beginPath();
  //   context.rect(x, y, w, h);
  //   context.closePath();
  //   //context.stroke();
  //
  //   if (fill) {
  //       var gradient = context.createLinearGradient(0, 0, 0, h);
  //       gradient.addColorStop(0, 'yellow');
  //       gradient.addColorStop(1, 'red');
  //       context.fillStyle = gradient;
  //       context.strokeStyle = gradient;
  //       context.fillRect(x, y, w, h);
  //       //context.fill();
  //   }
  //   context.stroke();
  // }

  componentDidMount() {

    const canvas = this.refs.canvas;
    this.context = canvas.getContext("2d");
    this.setState({ canvasHeight: canvas.height });
    this.setState({ canvasWidth: canvas.width });

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
