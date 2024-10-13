/* eslint-disable react/prop-types */
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  useColorModeValue,
  useToast
} from "@chakra-ui/react";

import { DeleteIcon, EditIcon} from "@chakra-ui/icons";
import { useProductStore } from "../store/product";


const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("white", "grey");
  const { deleteProduct } = useProductStore()
  const toast = useToast()
  


  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);

    console.log("message", message);
    console.log("success", success);

    if (!success) {toast({
      title: 'error',
      description: message,
      isCloseaable: true,
      duration: 2000,

    })} else {toast({
      title: 'success',
      description: message,
      isCloseaable: true,
      duration: 2000
    })}
    
  }
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "x1" }}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box px={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize="x1" color={textColor} mb={4}>
          ${product.price}
        </Text>
        <HStack spacing={2}>
          <IconButton  icon={<EditIcon />} colorScheme="blue" />
          <IconButton onClick={() => handleDeleteProduct(product._id)} icon={<DeleteIcon />} colorScheme="red" />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
