import { Box, Button, Container, Heading, Input, VStack, useColorModeValue,  } from "@chakra-ui/react";
import { useState } from "react"

const emptyProductProperty = {
  name: "",
 price: "",
 image: "",
}
const CreatePage = () => {
  const [newProduct, setNewProduct] = useState(
    emptyProductProperty
  );
  const handleAddProduct = () => {
    console.log(newProduct);
    setNewProduct(emptyProductProperty);
  }
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
             <Input
             placeholder="Image URL"
             value={newProduct.image}
             name="image"
             onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})} />
             <Button colorScheme="blue" onClick={handleAddProduct} w='full'> Add Product </Button>


          </VStack>

        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage