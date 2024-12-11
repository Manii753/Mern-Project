import { Container, SimpleGrid, Text ,VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';
import { Toaster, toaster } from "../components/ui/toaster";


const Homepage = () => {
  const {fetchProducts,products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts])
  console.log(products)

  
  








  return (
    
    <>
      <Toaster />
      <Container maxW={"xl"} p={12} >
        <VStack spacing={8}>
          <Text 
            _dark={{ color: "white" }}
            fontSize={{ base: "30", sm: "28" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            //bgClip='text'
            color='black'
            marginBottom={"20px"}
          >
            Welcome to the Product Store

          </Text>

          {products.length === 0 && (
            <Text fontSize={{ base: "16", sm: "20" }} fontWeight={"bold"} textAlign={"center"} color={"gray.500"}>
              No Products Found-    
              <Link to={"/create"}>
                <Text color={"blue.400"} as={"span"} _hover={{textDecoration:"underline"}}>Create New Product</Text>
              </Link>
            </Text>
          )}

          <SimpleGrid gap={"20px"} columns={{ base: 1, sm: 2 ,lg :3}} spacing={20} w={"140vh"}>

            {products.map((product) => (<ProductCard key={product._id} product={product} />))}
                
            
          </SimpleGrid>

        </VStack>
        
      </Container>
    </>
  )
}

export default Homepage