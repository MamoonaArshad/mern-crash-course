import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FcAddImage, FcIdea, FcNoIdea } from "react-icons/fc";

const Navbar = () => {
  const { colorMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140px"} px={4} >
      <Flex
        h={16}
        alignItems={"centre"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product store</Link>
        </Text>

        <HStack spacing={4} alignItems={"centre"}>
        <Link to={"/create"}>
          <Button>
            <FcAddImage fontSize={20} />
          </Button>
        </Link>


        <Button onClick={toggleColorMode}>
          {colorMode == 'dark' ? <FcIdea fontSize={20}/> : <FcNoIdea fontSize={20}/> }
          
        </Button>
        </HStack>
      </Flex>
      </Container>
    
  );
};

export default Navbar;
