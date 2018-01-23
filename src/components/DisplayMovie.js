import React, { Component } from 'react';


export default class DisplayMovie extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: this.props.movieList
    }
  }

  componentDidMount(){
    this.setState({
      movie: null
    });
  }



  render(){
    const movies = this.state.movies;
    console.log(movies);

    return(
      <div>
        <p className="text-center">Result: {movies.Search.length}</p>
        <ul className="row">
          {movies.Search.map((movie, index) => {
            return(
              <li className="col list-group-item list-group-item-action" key={index}>
                <figure className="img-fluid">
                  <img src={movie.Poster} alt={movie.Title}/>
                </figure>
                <p className="text-cente">{movie.Title}</p>
              </li>
            );
          })
          }
        </ul>
      </div>
    );
  }
}
