import react from 'react';
class HornedBeast extends react.Component{
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt=""/>
                <p>{this.props.description}</p>
            </div>  
        )   
    }
}
export default HornedBeast;