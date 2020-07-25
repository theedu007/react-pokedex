import React from 'react';
import { Container, Grid, Card, CardContent, CardHeader, Box } from '@material-ui/core'

import SearchBox from './components/searchbox.component'
import ImageCarousel from './components/carousel.component'
import PokemonDescriptionContainer from './components/pokemonDescriptionContainer.component'

import { getPokemonData, getPokemonSpecies } from './utils/fetchPokemon'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm : '',
      pokemonData : {},
      speciesData: {}
    }
  }

  handleFetch = () => (
    getPokemonData(this.state.searchTerm)
    .then(data => this.setState({ pokemonData: data}))
  );

  handleSpeciesFetch = (url) => (
    getPokemonSpecies(url)
    .then(data => this.setState({ speciesData: data }))
  );

  componentDidUpdate (prevProps, prevState) {
    if(prevState.pokemonData !== this.state.pokemonData) {
      const { species } = this.state.pokemonData;
      this.handleSpeciesFetch(species.url);
    }
  }

  render () {
    const { searchTerm, pokemonData, speciesData } = this.state;
    const { name, sprites } = pokemonData;
    return (
      <div>
        <Container style={{paddingTop: '20px'}}>
          <Grid pt={4} container spacing={2}>
            <Grid item xs={12} sm={6} style={{ height: '100%' }}>
              <Card style={{ height: '350px'}}  >
                  <CardContent >
                    <SearchBox handleFetch={ this.handleFetch } searchTerm={searchTerm} handleChange={e => (this.setState({ searchTerm: e.target.value.toLowerCase() }))} />
                  </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card style={{ textAlign: 'center', height: '275px'}}>
                <CardHeader title={ !name ? 'Pokemon' : name.charAt(0).toUpperCase() + name.slice(1) } />
                  <CardContent>
                    <ImageCarousel sprites={sprites} name={ name } />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
