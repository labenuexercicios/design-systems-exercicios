import {ChakraProvider, Flex} from "@chakra-ui/react";
import Card from "./componentes/Card"
import produtos from "./produtos.json"


function App (){
     

  return(
    <ChakraProvider resetCSS >
     <Flex gap={"16px"} justify={"center"} wrap={"wrap"}>
      {produtos.map((produto)=>{
        return <Card produto={produto}
        key={produto.id}
        />


      })}
     </Flex>
    </ChakraProvider>
  )
}

export default App;