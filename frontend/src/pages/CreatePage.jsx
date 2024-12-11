import { Container, Heading, VStack ,Box ,Input, Button } from '@chakra-ui/react';
import React from 'react'
import { useColorModeValue } from '../components/ui/color-mode';
import { useState } from 'react';
import { useProductStore } from '../store/product';
import { Toaster, toaster } from "../components/ui/toaster";
import { set } from 'mongoose';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  
  const {createProduct} = useProductStore();

  const handleAddProduct = async () => {
    console.log(newProduct);
   const {success,message} = await createProduct(newProduct);
   if(success){
    
    toaster.create({
      title: "Success",
      description: "Product added successfully",
      type: "success",
      duration: 3000,
      
    })
   }
   else{
    toaster.create({
      title: "Error",
      description: "Please fill all fields",
      type: "error",
      duration: 3000,
      
    })
   }
   setNewProduct({
    name: "",
    price: "",
    image: "",
   });
   
  };
  return (
    <>
    <Toaster />
      <Container maxW="lg">
      <VStack spacing={8}>
        <Heading>Create new product</Heading>
        <Box w={"full"} bg={useColorModeValue("white", "gray.900")} p={8} rounded={"lg"} shadow={"md"}>
          <VStack>
            <Input 
              

              _dark={{outlineColor:"white"}}
               
              placeholder='Name'
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              
            />
            <Input  
              placeholder='Price'
              price='price'
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <Input  
              placeholder='Image'
              image="image"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
               
            
            />
            <Button my={"20px"} w={"full"} onClick={handleAddProduct}>Create</Button>
          </VStack>
        </Box>

      </VStack>


    </Container>
    </>
    
  )
}

export default CreatePage