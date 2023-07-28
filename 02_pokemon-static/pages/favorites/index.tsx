import { Layout } from "@/components/layouts"
import NoFavorites from "@/components/ui/NoFavorites"
import { localFavorites } from "@/utils";
import { Card, Grid } from "@nextui-org/react";
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
          <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
              favoritesPokemons.map(id => (
                <Grid xs={6} sm={3} md={2} xl={1} key={id} >
                <Card isHoverable isPressable css={{ padding: 10}} >
                  <Card.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  width={'100%'}
                  height={140}
                  />
                </Card>
              </Grid>
              ))
              
            }
          </Grid.Container>
        )
      }
       
    </Layout>
  )
}

export default FavoritesPage
