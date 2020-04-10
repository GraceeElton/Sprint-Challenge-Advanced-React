import React from "react";
import axios from "axios";

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then((response) => {
        console.log(response.data);
        this.setState({
          players: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.players.map((player) => (
          <div>
            <h2>Name: {player.name}</h2>
            <h2>Country: {player.country}</h2>
            <h2>Searches: {player.searches}</h2>
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}

export default Player;
