import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import CarsContext from './CarsContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
    },
  }
  this.moveCar = this.moveCar.bind(this);
};

  moveCar(car, side) {
    this.setState({ cars: { ...this.state, [car]: side } });
  }

  render() {
    const contextValue = {
      ...this.state,
      moveCar: this.moveCar,
    }
    return (
      <div className="container">
        <CarsContext.Provider value={ contextValue }>
          <Cars />
        </CarsContext.Provider>
        <TrafficSignal />
      </div>
    );
  }
}

export default App;
