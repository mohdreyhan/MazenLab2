import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  state = {
    pokemonData: [],
  };

  getPokemonData = async () => {
    const results = await fetch("http://localhost:3000/pokemon");
    const jsonResults = await results.json();
    this.setState({
      pokemonData: jsonResults,
    });
  };

  async componentDidMount() {
    await this.getPokemonData();
  }
  render() {
    console.log("pokemon data", this.state.pokemonData)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search />
        <br />
        <PokemonCollection pokemonData = {this.state.pokemonData}/>
      </Container>
    );
  }
}

export default PokemonPage;
