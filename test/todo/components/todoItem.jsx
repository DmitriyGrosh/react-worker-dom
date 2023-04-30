var React = require('react');
var axios = require('axios');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      playerStatistics: [],
      isLoading: false,
    }
  },

  componentDidMount: function () {
    const getPlayerStatistics = ()=> {
      return [
        {
          "player": {
            "id": 2931,
            "name": "T. Heaton",
            "firstname": "Thomas David",
            "lastname": "Heaton",
            "age": 37,
            "birth": {
              "date": "1986-04-15",
              "place": "Chester",
              "country": "England"
            },
            "nationality": "England",
            "height": "188 cm",
            "weight": "85 kg",
            "injured": false,
            "photo": "https://media-3.api-sports.io/football/players/2931.png"
          },
          "statistics": [
            {
              "team": {
                "id": 33,
                "name": "Manchester United",
                "logo": "https://media-1.api-sports.io/football/teams/33.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-1.api-sports.io/football/leagues/39.png",
                "flag": "https://media-1.api-sports.io/flags/gb.svg",
                "season": 2022
              },
              "games": {
                "appearences": 0,
                "lineups": 0,
                "minutes": 0,
                "number": null,
                "position": "Goalkeeper",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": 0,
                "out": 0,
                "bench": 23
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": 0,
                "conceded": 0,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": 0,
                "yellowred": 0,
                "red": 0
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": 0
              }
            },
            {
              "team": {
                "id": 33,
                "name": "Manchester United",
                "logo": "https://media-3.api-sports.io/football/teams/33.png"
              },
              "league": {
                "id": 3,
                "name": "UEFA Europa League",
                "country": "World",
                "logo": "https://media-1.api-sports.io/football/leagues/3.png",
                "flag": null,
                "season": 2022
              },
              "games": {
                "appearences": 0,
                "lineups": 0,
                "minutes": 0,
                "number": null,
                "position": "Goalkeeper",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": 0,
                "out": 0,
                "bench": 9
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": 0,
                "conceded": 0,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": 0,
                "yellowred": 0,
                "red": 0
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": 0
              }
            }
          ]
        }
      ]
    };

    const data = getPlayerStatistics(this.props.id, 2022);

    this.setState({playerStatistics: data});
  },

  render: function() {
    const sleep = (ms, data) => {
      const start = performance.now();

      while (performance.now() - start < ms) {
        console.log(data, Math.floor(performance.now() - start));
      }
    };

    sleep(1000);

    if (this.state.isLoading) {
      return <div>Loading...</div>
    }

    return (
      <div className="player-stats">
        {!this.state.playerStatistics.length ? (
          <p className="player-stats__no-games">has not played yet</p>
        ) : (
          <div>
            {[].map(({ statistics, player }) => statistics.map((el) => (
              <div className="player-stats__game" key={`${el.league.name}-${el.league.season}-${id}-${el.team.name}`}>
                <div className="player-stats__game-header">
                  <div className="player-stats__stat-var">
                  </div>

                  <div className="player-stats__stat-var">
                    {el.games.minutes}
                    <span className="player-stats__stat-label">min</span>
                  </div>
                </div>

                <div className="player-stats__game-body">
                  <div>
                    <div className="player-stats__stat-var">
                      {el.goals.total}
                      <span className="player-stats__stat-label">points</span>
                    </div>

                    <div className="player-stats__stat-var">
                      {el.passes.total}
                      <span className="player-stats__stat-label">rebounds</span>
                    </div>

                    <div className="player-stats__stat-var">
                      {el.duels.total}
                      <span className="player-stats__stat-label">assists</span>
                    </div>

                    <div className="player-stats__stat-var">
                      {el.cards.yellowred}
                      <span className="player-stats__stat-label">blocks</span>
                    </div>
                  </div>
                </div>
              </div>
            )))}
          </div>
        )}
      </div>
    );
  }
});
