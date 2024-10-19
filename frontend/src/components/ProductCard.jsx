/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";

import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/product";
import { useState } from "react";
const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("white", "grey");
  const { deleteProduct, updateProduct } = useProductStore();
  
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updatedProduct, setUpdatedPrduct] = useState(product);

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);

    console.log("message", message);
    console.log("success", success);

    if (!success) {
      toast({
        title: "error",
        description: message,
        isCloseaable: true,
        duration: 2000,
      });
    } else {
      toast({
        title: "success",
        description: message,
        isCloseaable: true,
        duration: 2000,
      });
    }
  };


  const handleUpdateProduct = async (pid, updatedProduct) => {
   await updateProduct(pid, updatedProduct);
   onClose()
   const { success, message } = await updateProduct(pid);

    console.log("message", message);
    console.log("success", success);

    if (!success) {
      toast({
        title: "error",
        description: message,
        isCloseaable: true,
        duration: 2000,
      });
    } else {
      toast({
        title: "success",
        description: message,
        isCloseaable: true,
        duration: 2000,
      });
    }
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
          <IconButton onClick={onOpen} icon={<EditIcon />} colorScheme="blue" />
          <IconButton
            onClick={() => handleDeleteProduct(product._id)}
            icon={<DeleteIcon />}
            colorScheme="red"
          />
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Content</ModalHeader>
          <ModalBody>
            <VStack spacing={8}>
              <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                Create New Product
              </Heading>
              <Box
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                p={6}
                rounded={"lg"}
                shadow={"md"}
              >
                <VStack>
                  <Input placeholder="Product Name" name="name"
                  value={updatedProduct.name}
                  onChange={(e) => setUpdatedPrduct({...updateProduct, name: e.target.value})} />
                  <Input placeholder="Product Price" name="price"
                  onChange={(e) => setUpdatedPrduct({...updateProduct, price: e.target.value})} 
                  value={updatedProduct.price}/>
                  <Input placeholder="Image URL" name="image" 
                  value={updatedProduct.image}
                  onChange={(e) => setUpdatedPrduct({...updateProduct, image: e.target.value})}/>
                </VStack>
              </Box>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}
            onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
              Update
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
              </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;
