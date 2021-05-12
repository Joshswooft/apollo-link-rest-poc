import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { getPokemon } from '../gql/queries/get-pokemon';

// Set `RestLink` with your endpoint
const apiUrl = "https://pokeapi.co/api/v2/"
const restLink = new RestLink({ 
    uri: apiUrl,
    typePatcher: {
        Pokemon: (
          data: any,
          outerType: string,
          patchDeeper: RestLink.FunctionalTypePatcher,
        ): any => {
          if (data.results != null) {
            data.abilities =
              data.abilities.map(ability => ({ __typename: "Ability", ...ability }));
          }
          return data;
        },
        // ... other nested type patchers
      },
 });

// Setup your client
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink
});

