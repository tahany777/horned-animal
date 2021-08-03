import react from 'react';
import HornedBeast from './HornedBeast';
import data from '../json/data.json';

class Main extends react.Component {
  render(){
    return(
      <main className='d-flex flex-row justify-content-around align-items-center flex-wrap p-2'>
        {data.map(animal =>
          <HornedBeast
            key={animal.title}
            title={animal.title}
            imageUrl={animal.image_url}
            description={animal.description}
          />
        )}
      </main>
    );
  }
}

export default Main;
