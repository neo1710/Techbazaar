



// import React, { useState } from 'react';

// const AdminPage = () => {
//   const [productName, setProductName] = useState('');
//   const [productDescription, setProductDescription] = useState('');
//   const [productPrice, setProductPrice] = useState('');

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('https://happy-blue-lab-coat.cyclic.app/products', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: productName,
//           description: productDescription,
//           price: productPrice,
//         }),
//       });

//       if (response.ok) {
//         // Product added successfully
//         console.log('Product added successfully');
//       } else {
//         // error 
//         console.error('Error adding product');
//       }
//     } catch (error) {
//       console.error('Error adding product', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Add Product</h2>
//       <form onSubmit={handleFormSubmit}>
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Product Description"
//           value={productDescription}
//           onChange={(e) => setProductDescription(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Product Price"
//           value={productPrice}
//           onChange={(e) => setProductPrice(e.target.value)}
//         />
//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AdminPage;





// import React, { useState } from 'react';

// const AdminPage: React.FC = () => {
//   const [productName, setProductName] = useState('');
//   const [productDescription, setProductDescription] = useState('');
//   const [productPrice, setProductPrice] = useState('');

//   const handleFormSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('https://happy-blue-lab-coat.cyclic.app/products', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: productName,
//           description: productDescription,
//           price: productPrice,
//         }),
//       });

//       if (response.ok) {
//         // Product added successfully, show success message or redirect
//         console.log('Product added successfully');
//       } else {
//         // Handle error cases
//         console.error('Error adding product');
//       }
//     } catch (error) {
//       console.error('Error adding product', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Add Product</h2>
//       <form onSubmit={handleFormSubmit}>
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Product Description"
//           value={productDescription}
//           onChange={(e) => setProductDescription(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Product Price"
//           value={productPrice}
//           onChange={(e) => setProductPrice(e.target.value)}
//         />
//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AdminPage;



import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const AdminPage: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://happy-blue-lab-coat.cyclic.app/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: productName,
          description: productDescription,
          price: productPrice,
        }),
      });

      if (response.ok) {
        // Product added successfully, show success message or redirect
        console.log('Product added successfully');
      } else {
        // Handle error cases
        console.error('Error adding product');
      }
    } catch (error) {
      console.error('Error adding product', error);
    }
  };

  return (
    <Box margin={'80px 80px 0px 80px'}>
      <Heading as="h2" mb={4}>Add Product</Heading>
      <form onSubmit={handleFormSubmit}>
        <FormControl>
          <FormLabel>Product Name</FormLabel>
          <Input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Product Description</FormLabel>
          <Input
            type="text"
            placeholder="Product Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Product Price</FormLabel>
          <Input
            type="number"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" mt={4}>Add Product</Button>
      </form>
    </Box>
  );
};

export default AdminPage;