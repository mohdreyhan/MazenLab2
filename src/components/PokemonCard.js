import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    showBackSide: false,
  };

  handleClick = () => {
    this.setState({
      showBackSide: !this.state.showBackSide,
    });
  };

  render() {
    const pokemonData = this.props.pokemonData;
    return (
      <React.Fragment>
        {pokemonData.map((value) => {
          return (
            <Card>
              <div>
                <div className="image">
                  <img
                    alt="oh no!"
                    src={
                      this.state.showBackSide
                        ? value.sprites.back
                        : value.sprites.front
                    }
                    onClick={this.handleClick}
                  />
                </div>
                <div className="content">
                  <div className="header">{value.name}</div>
                </div>
                <div className="extra content">
                  <span>
                    <i className="icon heartbeat red" />
                    {value.hp}
                  </span>
                </div>
              </div>
            </Card>
          );
        })}
      </React.Fragment>
    );
  }
}

export default PokemonCard;
