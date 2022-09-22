import {Center } from "@chakra-ui/react";
import "./App.css";
import { Register } from "./Pages/Register";

function App() {
  return (
    <Center position={"relative"} w={"100%"} minH="100vh" >
       <Register />
    </Center>
  );
}

export default App;