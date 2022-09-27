import { Box } from "@chakra-ui/react";
import { Navbar } from "../components/Home/Navbar";
import '../components/Home/home.css'
import { Chat } from "../components/Home/Chat";
import { useSelector } from "react-redux";
import { WatchContacts } from "../components/Home/WatchContacts";

export const Home = ()=>{
    const {userData} = useSelector(state=>state.authReducer);
    return (
        <Box id="home">
            <Navbar/>
            {userData.type==='admin'?<WatchContacts/>:<Chat/>}
        </Box>
    )
}