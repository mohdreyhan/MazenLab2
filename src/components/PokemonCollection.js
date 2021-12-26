import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  render() {
    const pokemonData = this.props.pokemonData;
    const count = pokemonData.length
    return (
      <React.Fragment>
        <h1>Hello From Pokemon Collection - {count}</h1> 
        <Card.Group itemsPerRow={6}>
          <PokemonCard pokemonData={pokemonData} />
        </Card.Group>
      </React.Fragment>
    );
  }
}

export default PokemonCollection;
