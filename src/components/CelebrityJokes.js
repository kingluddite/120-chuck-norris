import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { getCelebrityData } from '../utils/chucknorris-api';

class CelebrityJokes extends Component {
  constructor() {
    super();
    this.state = { jokes: [] };
  }

  componentDidMount() {
    this.getCelebrityJokes();
  }

  getCelebrityJokes() {
    getCelebrityData().then(jokes => {
      this.setState({ jokes });
    });
  }

  render() {
    const { jokes } = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center">Privileged Chuck Norris Celebrity Jokes</h3>
        <hr />

        {jokes.map(joke => (
          <div className="col-sm-6" key={joke.id}>
            <div className="panel panel-danger">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <span className="btn">#{joke.id}</span>
                </h3>
              </div>
              <div className="panel-body">
                <p> {joke.joke}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <h2>View Food Jokes</h2>
            <Link className="btn btn-lg btn-success" to="/">
              Chuck Norris Food Jokes
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CelebrityJokes;
