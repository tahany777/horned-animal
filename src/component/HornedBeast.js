import react from 'react';
import heart from '../img/heart.png';

class HornedBeast extends react.Component{
  constructor(){
    super();
    this.state = {
      favorites: 0
    };
  }
  addFavorite = (favorites) => {
    let fav = 1 + favorites;
    this.setState({
      favorites: fav
    });
  }
  render(){
    return(
      <div className='card flex align-items-center m-2' style ={{width:'20rem', height: '30rem'}}>
        <h4 className='card-header'>{this.props.title}</h4>
        <img style ={{maxWidth:'100%', height:'300px', cursor: 'pointer'}} onClick={() => this.addFavorite(this.state.favorites)} src={this.props.imageUrl} alt=""/>
        <p className='card-text text-center p-2'>{this.props.description}</p>
        <img style={{width: '20px',height: '20px'}} src={heart} alt=''/>
        <p>{this.state.favorites}</p>
      </div>
    );
  }
}
export default HornedBeast;
