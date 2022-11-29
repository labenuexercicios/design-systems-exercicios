import axios from "axios";
import { ChakraProvider, Flex } from '@chakra-ui/react'
import Card from "./components/Card"
import { useState } from "react";



export default function App() {
  
  const [pessoas, setPessoas] = useState(["Marcos","Carla","Pedro"])
console.log(pessoas)
  return (
    <ChakraProvider>
      <Flex gap={16}>
        {pessoas &&
        pessoas.map((pessoas)=>{
          return <Card 
          pessoas={pessoas} 
          key={pessoas}
          setPessoas={setPessoas}/>
        })}
      </Flex>
    </ChakraProvider>
  )
}