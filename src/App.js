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
      signal: {
        color: 'red'
    },
  }
  this.moveCar = this.moveCar.bind(this);
  this.changeSignal = this.changeSignal.bind(this);
};

  moveCar(car, side) {
    this.setState({ cars: { ...this.state, [car]: side } });
  }

  changeSignal(signalColor) {
    this.setState({ signal: { ...this.state.signal, color: signalColor } })
  }

  render() {
    const contextValue = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }
    return (
      <div className="container">
        <CarsContext.Provider value={ contextValue }>
          <>
            <Cars />
            <TrafficSignal />
          </>
        </CarsContext.Provider>
      </div>
    );
  }
}

export default App;
