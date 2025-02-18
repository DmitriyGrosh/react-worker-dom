var React = require('react');
var TodoItem = require('./todoItem.jsx');

module.exports = React.createClass({
  getInitialState(){
    return {
      playersArray: [],
      selectedPlayer: null,
    }
  },
  componentDidMount(){
    console.log('==========>2', 3);
    console.log('==========>2', 2);
    const getPlayers = () => {
      return [
        {
          "id": 882,
          "name": "David de Gea",
          "age": 33,
          "number": 1,
          "position": "Goalkeeper",
          "photo": "https://media-1.api-sports.io/football/players/882.png"
        },
        {
          "id": 2931,
          "name": "T. Heaton",
          "age": 37,
          "number": 22,
          "position": "Goalkeeper",
          "photo": "https://media-1.api-sports.io/football/players/2931.png"
        },
        {
          "id": 20319,
          "name": "N. Bishop",
          "age": 24,
          "number": 30,
          "position": "Goalkeeper",
          "photo": "https://media-1.api-sports.io/football/players/20319.png"
        },
        {
          "id": 2930,
          "name": "J. Butland",
          "age": 30,
          "number": 31,
          "position": "Goalkeeper",
          "photo": "https://media-1.api-sports.io/football/players/2930.png"
        },
        {
          "id": 889,
          "name": "V. Lindelöf",
          "age": 29,
          "number": 2,
          "position": "Defender",
          "photo": "https://media-3.api-sports.io/football/players/889.png"
        },
        {
          "id": 888,
          "name": "P. Jones",
          "age": 31,
          "number": 4,
          "position": "Defender",
          "photo": "https://media-2.api-sports.io/football/players/888.png"
        },
        {
          "id": 2935,
          "name": "H. Maguire",
          "age": 30,
          "number": 5,
          "position": "Defender",
          "photo": "https://media-2.api-sports.io/football/players/2935.png"
        },
        {
          "id": 2467,
          "name": "Lisandro Martínez",
          "age": 25,
          "number": 6,
          "position": "Defender",
          "photo": "https://media-3.api-sports.io/football/players/2467.png"
        },
        {
          "id": 37145,
          "name": "T. Malacia",
          "age": 24,
          "number": 12,
          "position": "Defender",
          "photo": "https://media-3.api-sports.io/football/players/37145.png"
        },
        {
          "id": 742,
          "name": "R. Varane",
          "age": 30,
          "number": 19,
          "position": "Defender",
          "photo": "https://media-1.api-sports.io/football/players/742.png"
        },
        {
          "id": 886,
          "name": "Diogo Dalot",
          "age": 24,
          "number": 20,
          "position": "Defender",
          "photo": "https://media-3.api-sports.io/football/players/886.png"
        },
        {
          "id": 891,
          "name": "L. Shaw",
          "age": 28,
          "number": 23,
          "position": "Defender",
          "photo": "https://media-3.api-sports.io/football/players/891.png"
        },
        {
          "id": 18846,
          "name": "A. Wan-Bissaka",
          "age": 26,
          "number": 29,
          "position": "Defender",
          "photo": "https://media-3.api-sports.io/football/players/18846.png"
        },
        {
          "id": 138806,
          "name": "B. Williams",
          "age": 23,
          "number": 33,
          "position": "Defender",
          "photo": "https://media-1.api-sports.io/football/players/138806.png"
        },
        {
          "id": 284363,
          "name": "R. Bennett",
          "age": 20,
          "number": 66,
          "position": "Defender",
          "photo": "https://media-3.api-sports.io/football/players/284363.png"
        },
        {
          "id": 1485,
          "name": "Bruno Fernandes",
          "age": 29,
          "number": 8,
          "position": "Midfielder",
          "photo": "https://media-2.api-sports.io/football/players/1485.png"
        },
        {
          "id": 174,
          "name": "C. Eriksen",
          "age": 31,
          "number": 14,
          "position": "Midfielder",
          "photo": "https://media-1.api-sports.io/football/players/174.png"
        },
        {
          "id": 1159,
          "name": "M. Sabitzer",
          "age": 29,
          "number": 15,
          "position": "Midfielder",
          "photo": "https://media-1.api-sports.io/football/players/1159.png"
        },
        {
          "id": 905,
          "name": "Fred",
          "age": 30,
          "number": 17,
          "position": "Midfielder",
          "photo": "https://media-2.api-sports.io/football/players/905.png"
        },
        {
          "id": 747,
          "name": "Casemiro",
          "age": 31,
          "number": 18,
          "position": "Midfielder",
          "photo": "https://media-1.api-sports.io/football/players/747.png"
        },
        {
          "id": 70078,
          "name": "F. Pellistri",
          "age": 22,
          "number": 28,
          "position": "Midfielder",
          "photo": "https://media-2.api-sports.io/football/players/70078.png"
        },
        {
          "id": 547,
          "name": "D. van de Beek",
          "age": 26,
          "number": 34,
          "position": "Midfielder",
          "photo": "https://media-3.api-sports.io/football/players/547.png"
        },
        {
          "id": 903,
          "name": "S. McTominay",
          "age": 27,
          "number": 39,
          "position": "Midfielder",
          "photo": "https://media-3.api-sports.io/football/players/903.png"
        },
        {
          "id": 284295,
          "name": "Zidane Iqbal",
          "age": 20,
          "number": 55,
          "position": "Midfielder",
          "photo": "https://media-2.api-sports.io/football/players/284295.png"
        },
        {
          "id": 284322,
          "name": "K. Mainoo",
          "age": 18,
          "number": 73,
          "position": "Midfielder",
          "photo": "https://media-3.api-sports.io/football/players/284322.png"
        },
        {
          "id": 908,
          "name": "A. Martial",
          "age": 28,
          "number": 9,
          "position": "Attacker",
          "photo": "https://media-1.api-sports.io/football/players/908.png"
        },
        {
          "id": 909,
          "name": "M. Rashford",
          "age": 26,
          "number": 10,
          "position": "Attacker",
          "photo": "https://media-1.api-sports.io/football/players/909.png"
        },
        {
          "id": 9971,
          "name": "Antony",
          "age": 23,
          "number": 21,
          "position": "Attacker",
          "photo": "https://media-3.api-sports.io/football/players/9971.png"
        },
        {
          "id": 18,
          "name": "J. Sancho",
          "age": 23,
          "number": 25,
          "position": "Attacker",
          "photo": "https://media-3.api-sports.io/football/players/18.png"
        },
        {
          "id": 25416,
          "name": "W. Weghorst",
          "age": 31,
          "number": 27,
          "position": "Attacker",
          "photo": "https://media-3.api-sports.io/football/players/25416.png"
        },
        {
          "id": 153430,
          "name": "A. Elanga",
          "age": 21,
          "number": 36,
          "position": "Attacker",
          "photo": "https://media-3.api-sports.io/football/players/153430.png"
        },
        {
          "id": 284324,
          "name": "A. Garnacho",
          "age": 19,
          "number": 49,
          "position": "Attacker",
          "photo": "https://media-1.api-sports.io/football/players/284324.png"
        }
      ];
    };
    const players = getPlayers(33);
    console.log('==========>players', players)

    this.setState({playersArray: players});
    // this.setState({ playersArray: players });
  },

  handlePlayerClick: function(player) {
    this.setState({ selectedPlayer: player })
  },

  render: function() {
    console.log('==========>this.state', this.state);
    return (
      <div className="players-list">
        <ul className="players-list__menu">
          {this.state.playersArray.map((player) => {
            const isSelected = this.state.selectedPlayer && this.state.selectedPlayer.id === player.id;

            return (
              <li key={player.id}>
                <button
                  onClick={() => this.handlePlayerClick(player)}
                  className={`player-list__player-btn ${
                    isSelected ? "player-list__player-btn--selected" : ""
                  }`}>
                  {player.name}
                </button>
              </li>
            );
          })}
        </ul>
        {!!this.state.selectedPlayer ? <TodoItem id={this.state.selectedPlayer.id} /> : <div>Not selected Player</div>}
      </div>
    );
  }
});
