import { useQuery } from '@apollo/client';
import React from 'react'
import { getPokemon } from '../gql/queries/get-pokemon';

function Pokemon({pokemon}: { pokemon: string}) {

    const { data, loading } = useQuery(getPokemon, { variables: {
        pokemon,
        abilityId: 1
      } });
    
      if (loading) {
        return <>Loading...</>
      }
    
      console.log('data: ', data);
    return (
        <div>
            <h2>{data.pokemon.name}</h2>
            {data.pokemon.abilities.map((a, i) => (
                <li key={i}>{a.ability.name}</li>
            ))}
        </div>
    )
}

export default Pokemon;
