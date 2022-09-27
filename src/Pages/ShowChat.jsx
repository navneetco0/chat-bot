import { Box } from "@chakra-ui/react"
import { Navbar } from "../components/Home/Navbar"
import { NormalBox } from "../components/Home/NormalBox"

export const ShowChat = ()=>{
    return (
        <Box id="home">
            <Navbar/>
            <NormalBox vis="admin"/>    
        </Box>
    )
}