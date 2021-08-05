import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import data from '../json/data.json';
import { Form } from 'react-bootstrap';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      show: 'flex',
      items: 'none',
      newData: [], 
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let event = e.target.value;
    if(event === 'all') {
      this.setState({
        show: 'flex',
        items: 'none',
      });
    }
    else {this.setState({
      show: 'none',
      items: 'flex',
      newData: data.filter((el) => {return el.horns === parseInt(event)})
    });
  }
    console.log(this.state.newData);
    console.log(event);
  }
  render(){
    return(
      <div>
        <Form.Select style={{cursor: 'pointer'}} onClick={(e) => {this.handleSubmit(e)}} aria-label="Default select example">
        <option disabled>choose the number of horns</option>
          <option value='all'>All</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
          <option value='100'>One Hundred</option>  
        </Form.Select>
        <main style={{display: this.state.show}} 
              className='justify-content-around align-items-center flex-wrap p-2'>
          {data.map(animal =>
            <HornedBeast
              key={animal.title}
              title={animal.title}
              imageUrl={animal.image_url}
              description={animal.description}
            />
          )}
        </main>
        <main style={{display: this.state.items}}
              className='justify-content-around align-items-center flex-wrap p-2'>
              {this.state.newData.map(el =>
            <HornedBeast
              key={el.title}
              title={el.title}
              imageUrl={el.image_url}
              description={el.description}
            />
          )}
        </main>
        
      </div>
    );
  }
}
/**
 * 
*/
export default Main;
