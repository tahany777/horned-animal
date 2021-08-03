import React, { Component } from 'react';
import heart from '../img/heart.png';
import SelectedBeast from './SelectedBeast';

class HornedBeast extends Component {
  constructor() {
    super();
    this.state = {
      favorites: 0,
      show: false,
    };
  }
  addFavorite = () => {
    this.setState({
      favorites: this.state.favorites + 1,
    });
  };
  createModal = () => {
    this.setState({
      show: true,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    return (
      <div className='card d-flex align-items-center m-2'style={{ width: '20rem', height: '30rem' }}>
        <h4 className='card-header'>{this.props.title}</h4>
        <img
          style={{ maxWidth: '100%', height: '300px', cursor: 'pointer' }}
          onClick={this.createModal}
          src={this.props.imageUrl}
          alt=""
        />
        <p className='card-text text-center p-2'>{this.props.description}</p>
        <img
          onClick={this.addFavorite}
          style={{ width: '20px', height: '20px', cursor: 'pointer' }}
          src={heart}
          alt=""
        />
        <p>{this.state.favorites}</p>
        <SelectedBeast
          show={this.state.show}
          title={this.props.title}
          img={this.props.imageUrl}
          desc={this.props.description}
          handle={this.handleClose}
        />
      </div>
    );
  }
}
export default HornedBeast;
