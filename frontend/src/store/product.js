import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProduct: (products) => set({products}),
  createProduct: async (newproduct) => {
    if (!newproduct.name || !newproduct.price || !newproduct.image) {
      
      return{success:false , message:"Please fill in all fields"};
      
    }
    else{
      const res = await fetch("http://localhost:3500/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newproduct),
      });
      const data = await res.json();
      set((state) => ({
        products: [...state.products, data.data],
      }));
      return{success:true , message:"product added"};
    }
  },

  fetchProducts: async () => {
    const res = await fetch("http://localhost:3500/products");
    const data = await res.json();
    set({ products: data.data });
  },
   
  deleteProduct: async (id) => {
    const res = await fetch(`http://localhost:3500/products/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if(!data.success){
      return{success:false , message:"product not deleted"};
    }
    else{
      set((state) => ({
        products: state.products.filter((product) => product._id !== id),
      }));
      return{success:true , message:"product deleted"};
    }
    
  },

  updatedProduct: async (id, updateProduct) => {
    const res = await fetch(`http://localhost:3500/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    });
    const data = await res.json();
    if(!data.success){
      return{success:false , message:"product not updated"};
    }
    set((state) => ({
      products: state.products.map((product) =>
        product._id === id ? data.data : product
      ),
    }));
    return{success:true , message:"product updated"};
  }
 
}));

