import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./SearchMovies";


class Main extends React.Component {
  render() {
    return (
      <section className='section'>
      <div className="container">
       
        <h1 className="title"> Movie Search</h1>
        
        <SearchMovies/>
        
      </div>
      </section>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
export default Main;