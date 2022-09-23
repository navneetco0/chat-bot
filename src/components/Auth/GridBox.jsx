import { Grid } from '@chakra-ui/react'

export const GridBox = ({children})=>{
    return (
        <Grid
        templateColumns={['repeat(1, 100%)', 'repeat(2, 49%)']}
        gap="2%"
        m="10px 0px"
        w="100%"
        h="fit-content"
        pb={["70px","30px"]}
      >
       {children}
      </Grid>
    )
}