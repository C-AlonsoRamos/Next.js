import { Spacer, Text, useTheme } from "@nextui-org/react"


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
      
      <Text color='white' h2>P</Text>
      <Text color='white' h3>okémon</Text>

        <Spacer css = {{ flex: 1 }}/>

      <Text color='white' >Favoritos</Text>

    </div>
  )
}

export default NavBar
