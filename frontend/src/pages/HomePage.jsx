import { Container, VStack, Text, HStack, textDecoration, SimpleGrid } from '@chakra-ui/react'
import { FcLikePlaceholder  } from "react-icons/fc";
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';
import Product from '../../../backend/models/product.model';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }) 
  console.log('products', products)
  return (
    <Container maxW={Container.x1} py={12}>
      <VStack spacing={0}>
      <HStack>
        <Text
        fontSize={"30"}
        fontWeight={"bold"}
        textAlign={"center"}
        bgGradient={"linear(to-r, cyan.400, blue.500)"}
        bgClip={"text"}>
          Current Products
        </Text>
        <FcLikePlaceholder />
        </HStack>

        <SimpleGrid column={10} spacing={20}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product}/>
            ))}
        </SimpleGrid>

        <Text
        fontSize={"15"}
        fontWeight={"bold"}
        textAlign={"center"}
        bgGradient={"linear(to-r, cyan.400, blue.500)"}
        bgClip={"text"}>
          No products found
        </Text>
        <Link to="/create"> 

        <Text
        fontSize={"10"}
        fontWeight={"bold"}
        textAlign={"center"}
        bgGradient={"linear(to-r, cyan.400, blue.500)"}
        bgClip={"text"}
        _hover={{textDecoration: "underline cyan"}}>
          Create products now
          
        </Text>
        </Link>


      </VStack>

    </Container>

   
  )
}

export default HomePage