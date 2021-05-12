import { gql } from '@apollo/client';

export interface GetPokemonVars {
  pokemon: string;
}

export const getPokemon = gql`
  query Pokemon($pokemon: String!) {
    pokemon(pokemon: $pokemon) @rest(type: "Pokemon", path: "pokemon/:pokemon") {
      id
      name
      abilities {
        ability {
          name
        }
      }
    }
  }
`;