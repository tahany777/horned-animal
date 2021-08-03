import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import data from '../json/data.json';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      show: 'flex',
    };
  }
  handleSearch = () => {
    this.setState({
      show: 'none',
    });
  };
  render() {
    return (
      <div>
        <input type='text' onKeyUp={this.handleSearch} />
        <main style={{display: this.state.show}}className="d-flex flex-row justify-content-around align-items-center flex-wrap p-2">
          {data.map((animal) => (
            <HornedBeast
              key={animal.title}
              title={animal.title}
              imageUrl={animal.image_url}
              description={animal.description}
            />
          ))}
        </main>
      </div>
    );
  }
}

export default Main;
