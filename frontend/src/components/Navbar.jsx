import { Button, Container, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";

import { ColorModeButton, useColorModeValue } from "./ui/color-mode";
import { use } from "react";

const Navbar = () => {
	//const { colorMode, toggleColorMode } = useColorMode();

  
  
  

	return (
		<Container maxW={"1140px"} px={4} > 
			<Flex
				h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					base: "column",
					sm: "row",
				}}
			>
				<Text
          //_dark={{ color: "white" }}
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient="to-r" gradientFrom="gray.300" gradientTo="blue.500"
          bgClip='text'
          //color='black'
				>
					<Link to={"/"}>Product Store 🛒</Link>
				</Text>

				<HStack spacing={2} alignItems={"center"}>
					<Link to={"/create"}>
						<IconButton  bg={useColorModeValue("gray.500","white")}>
						<PlusSquareIcon  fontSize={20}  />
						</IconButton>
						
					</Link>
					
					 <ColorModeButton  />
					
					
				</HStack>
			</Flex>
		</Container>
	);
};
export default Navbar;