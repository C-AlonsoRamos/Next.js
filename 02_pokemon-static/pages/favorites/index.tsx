import { Layout } from "@/components/layouts"
import FavoritePokemns from "@/components/pokemon/FavoritePokemns";
import NoFavorites from "@/components/ui/NoFavorites"
import { localFavorites } from "@/utils";

import { useState, useEffect } from 'react';




const FavoritesPage = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    
    setFavoritesPokemons(localFavorites.pokemons())

  }, []);
  

  return (
    <Layout title='pokemons favoritos'>
      {
        favoritesPokemons.length === 0 ? <NoFavorites/>  : (
         <FavoritePokemns favoritesPokemons={favoritesPokemons}/>
        )
      }
       
    </Layout>
  )
}

export default FavoritesPage
