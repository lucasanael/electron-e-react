import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props);
    const parametros = this.getHashParams()
    const token = parametros.acess_token
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    console.log(this.token)
    return hashParams;
  }
  topTracksLorde = () => {
    $.ajax({
      method: "GET",
      dataType: "Json",
      url: "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?country=BR",
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    })
      .then(dados => {
        console.log(dados.tracks[0].name)
      })
  }

  render() {
    return (
      <div className="App">
        <button><a href='http://localhost:8888'> Logar com Spotify </a></button>
        <button onClick={this.topTracksLorde}>Buscar top tracks da Lorde</button>
      </div>
    );
  }
}


export default App;
