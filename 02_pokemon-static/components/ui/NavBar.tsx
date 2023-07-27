import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"
import NextLink from "next/link"



const NavBar = () => {

    const {theme} = useTheme()
  return (
    <div style={
        {
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray500.value
        }
    }>
      <Image 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"   
        alt="icono de la app"
        width={70}   
        height={70}
      />
      
        <NextLink href="/" passHref legacyBehavior>
          <Link>
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okémon</Text>
          </Link>
         
        </NextLink>
     
        <Spacer css = {{ flex: 1 }}/>

        <NextLink href="/favorites" legacyBehavior passHref>
          <Link>
          <Text color='white' >Favoritos</Text>
          </Link>
          
        </NextLink>
          

    </div>
  )
}

export default NavBar
