import { Box } from "@chakra-ui/react";
import { Navbar } from "../components/Home/Navbar";
import '../components/Home/home.css'
import { Chat } from "../components/Home/Chat";

export const Home = ()=>{
    return (
        <Box id="home">
            <Navbar/>
            <Chat/>
        </Box>
    )
}