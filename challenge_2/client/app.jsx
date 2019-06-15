import React from 'react';
import classes from "./LineGraph.module.css";
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
const axios = require('axios');
let myLineChart;



class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      bpi: {},
      chart: {},
    }
    this.handleBtc = this.handleBtc.bind(this);
  }

  handleBtc () {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then( (response) => {
      // handle success
      console.log('successful btc get request');
      // window.response = response;
      this.setState({bpi : Object.values(response.data.bpi)})
    })
    .catch( (error) => {
      // handle error
      console.log('error getting btc data:', error);
    })
  }

  chartRef = React.createRef();

  componentDidMount() {
      this.buildChart();
  }

  componentDidUpdate() {
      this.buildChart();
  }

  buildChart = () => {
      const myChartRef = this.chartRef.current.getContext("2d");
      const { data, average, labels } = this.props;

      if (typeof myLineChart !== "undefined") myLineChart.destroy();

      myLineChart = new Chart(myChartRef, {
          type: "line",
          data: {
              //Bring in data
              labels: labels,
              datasets: [
                  {
                      label: "Sales",
                      data: data,
                      fill: false,
                      borderColor: "#6610f2"
                  },
                  {
                      label: "National Average",
                      data: average,
                      fill: false,
                      borderColor: "#E0E0E0"
                  }
              ]
          },

        }
    )}
}

export default App;