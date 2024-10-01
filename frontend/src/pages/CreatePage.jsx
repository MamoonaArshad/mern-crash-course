import { Box, Container, Heading, Input, VStack, useColorModeValue } from "@chakra-ui/react";


import { useState } from "react"
const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box
        w={"full"} bg={useColorModeValue("white", "gray.900")}
        p={6} rounded={"lg"} shadow={"md"}
        >
          <VStack>
            <Input 
            placeholder="Product Name"
            value={newProduct.name}
            name="name"
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}
             />
            <Input
             placeholder="Product Price"
             value={newProduct.price}
             name="price"
             onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})} />


          </VStack>

        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage