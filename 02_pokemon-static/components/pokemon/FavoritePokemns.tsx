import { FC } from 'react' 

import { Grid } from '@nextui-org/react'
import FavoriteCardPokemon from './FavoriteCardPokemon';


interface Props {
  favoritesPokemons: number[];
}


const FavoritePokemns: FC <Props>= ({favoritesPokemons}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
              favoritesPokemons.map(id => (
               <FavoriteCardPokemon  key={id} pokemonId={id} />
              ))
              
            }
          </Grid.Container>
  )
}

export default FavoritePokemns
