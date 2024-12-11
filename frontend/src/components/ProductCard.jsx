import { Box, Image , Heading,HStack,IconButton,Text,Button ,VStack,Input} from '@chakra-ui/react'
import React, { useState } from 'react'
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { ColorModeButton, useColorModeValue } from './ui/color-mode';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useProductStore } from '../store/product';
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Toaster, toaster } from './ui/toaster';

const ProductCard = ({product}) => {
  const bg =useColorModeValue("white","gray.800")
  const textColor = useColorModeValue("gray.600", "gray.200")
  const iconBg =useColorModeValue("gray.400","white")
  const {deleteProduct,updatedProduct} = useProductStore();
  const [updateProduct, setUpdateProduct] = useState(product);
  const handleUpdateProduct = async (id) => {
    const {success,message} = await updatedProduct(id,updateProduct);
    if(success){
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
        duration: 3000,

      })
    }
    else{
     toaster.create({
       title: "Error",
       description: message,
       type: "error",
       duration: 3000,

     })
    }

  }
  const handledeleteProduct = async (id) => {
  
    const {success,message} = await deleteProduct(id);
    if(success){
     
     toaster.create({
       title: "Success",
       description: "Product Deleted successfully",
       type: "success",
       duration: 3000,
       
     })
    }
    else{
     toaster.create({
       title: "Error",
       description: "Product Not Deleted",
       type: "error",
       duration: 3000,
       
     })
    }
    
    
   };

  return (
    <>
      <Toaster/>
      <Box
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        transition={"all 0.3s"}
        _hover={{transform:"translateY(-5px)" , shadow : "x1" }}
        bg={bg}
        
      >
        <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

        <Box p={4}>
          <Heading as='h3' size='md' mb={2}>
            {product.name}
          </Heading>

          <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
            ${product.price}
          </Text>

          <HStack spacing={2}>
          
          //Create a dialog box to edit the product
          <DialogRoot >
            <DialogTrigger asChild>
              <IconButton colorPalette={"cyan"}  >
                <FaEdit />
              </IconButton> 
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
              </DialogHeader>
              <DialogBody>
              <VStack>
                <Input 
                  
                  placeholder='Name'
                  value={updateProduct.name}
                  onChange={(e) => setUpdateProduct({...updateProduct,name:e.target.value})}
                  
                />
                <Input  
                  placeholder='Price'
                  value={updateProduct.price}
                  onChange={(e) => setUpdateProduct({...updateProduct,price:e.target.value})}
                  
                />
                <Input  
                  placeholder='Image'
                  value={updateProduct.image}
                  onChange={(e) => setUpdateProduct({...updateProduct,image:e.target.value})}
                
                />
                
              </VStack>
              </DialogBody>
              <DialogFooter>
                <DialogActionTrigger asChild>
                  <Button  variant="outline">Cancel</Button>
                </DialogActionTrigger>
                <DialogActionTrigger asChild>
                  <Button colorScheme="blue" onClick={() => handleUpdateProduct(product._id)}>Update</Button>
                </DialogActionTrigger>
              </DialogFooter>
              <DialogCloseTrigger />
            </DialogContent>
          </DialogRoot>
            <IconButton colorPalette={"red"}  onClick={() => handledeleteProduct(product._id)}>
              <MdDelete />
            </IconButton>
          </HStack>

          
        </Box>

        


      </Box>
    </>
  )
}

export default ProductCard