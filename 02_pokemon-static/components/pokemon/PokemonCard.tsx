import { Card, Grid, Row, Text } from "@nextui-org/react";
import { FC } from "react"
import { SmallPokemon } from "@/interfaces"


interface Props {
    pokemon: SmallPokemon
}

const PokemonCard: FC<Props> = ({pokemon}) => {
  return (
    <Grid key={pokemon.id} xs={ 6 } sm={ 3 } ms={ 2 } xl={ 1 } >  
                <Card isHoverable isPressable  >
                 <Card.Body css={{ p: 1 }}>
                  <Card.Image
                    src={pokemon.img}
                    width='100%'
                    height={ 140 }>
                  </Card.Image>
                 </Card.Body>
                 <Card.Footer>
                  <Row justify='space-between'>
                    <Text transform='capitalize'>{ pokemon.name }</Text>
                    <Text># { pokemon.id }</Text>
                  </Row>
                 </Card.Footer>
                </Card>
              </Grid>
  )
}

export default PokemonCard
