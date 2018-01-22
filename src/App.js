import React, { Component } from 'react';

//IMBD API KEY
const IMBD_API = "http://www.omdbapi.com/?apikey=1f17b25e&s=";

class App extends Component {

    constructor(){
      super();
      this.state = {
        movies: [],
        movieName: 'batman'
      }

    }


    //api search for movie
    getMovie = () =>{
      //variables
      const req = new XMLHttpRequest();
      let data;

      //request for searching the movie
      req.open('GET', IMBD_API + encodeURI(this.state.movieName));

      //parsing data
      req.onload = () =>{
        data = JSON.parse(req.responseText);
        this.setState({
          movies: data
        });
      }
      req.send();
    }

    movieSearch = (e) =>{
      this.setState({
        movieName: e.target.value
      });
    }


    //rendering component
    render(){
      return(
        <div className="container-fluid">
          <div className="jumbotron">
            <input type="text" onChange={this.movieSearch}/>
            <button className="btn btn-secondary" onClick={this.getMovie}>Search</button>
          </div>

          <div className="container">
            <div>
              <ul className="row">
                {
                  this.state.movies.length === undefined ? this.state.movies.Search.map((movie, index) =>{
                    return(
                      <li key={index} className="col list-group-item list-group-item-action">
                        <h3>{movie.Title}</h3>
                        <img src={movie.Poster} alt={movie.Title}/>
                        <p>{movie.Description}</p>
                      </li>
                    )
                  }) : <h1>Search a movie to se the result</h1>
                }
              </ul>
            </div>
          </div>
        </div>
      );
    }
}

export default App;
