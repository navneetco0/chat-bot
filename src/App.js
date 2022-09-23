import {Flex } from "@chakra-ui/react";
import "./App.css";
import { Router } from "./Router";

function App() {
  
  return (
    <Flex position={"relative"} w={"100%"} minH="100vh" justifyContent="center" alignItems={["flex-start","Center"]} >
       <Router/>
    </Flex>
  );
}

export default App;