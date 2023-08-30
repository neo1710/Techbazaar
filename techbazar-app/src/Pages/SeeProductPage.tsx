


// import React, { useEffect, useState } from 'react';

// const SeeProductPage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://happy-blue-lab-coat.cyclic.app/products');
//         const data = await response.json();

//         if (response.ok) {
//           setProducts(data);
//         } else {
//           // Handle error cases
//           console.error('Error fetching products');
//         }
//       } catch (error) {
//         console.error('Error fetching products', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleDeleteProduct = async (productId) => {
//     try {
//       const response = await fetch(`https://happy-blue-lab-coat.cyclic.app/products/${productId}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         // Product deleted successfully, 
//         setProducts(products.filter((product) => product.id !== productId));
//       } else {
//         //  error 
//         console.error('Error deleting product');
//       }
//     } catch (error) {
//       console.error('Error deleting product', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Products</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>{product.name}</td>
//               <td>{product.description}</td>
//               <td>{product.price}</td>
//               <td>
//                 <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SeeProductPage;





// import React, { useEffect, useState } from 'react';

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
// }

// const SeeProductPage: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://happy-blue-lab-coat.cyclic.app/products');
//         const data = await response.json();

//         if (response.ok) {
//           setProducts(data);
//         } else {
//           // Handle error cases
//           console.error('Error fetching products');
//         }
//       } catch (error) {
//         console.error('Error fetching products', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleDeleteProduct = async (productId: number) => {
//     try {
//       const response = await fetch(`https://happy-blue-lab-coat.cyclic.app/products/${productId}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         // Product deleted successfully, update the products state
//         setProducts(products.filter((product) => product.id !== productId));
//       } else {
//         // Handle error cases
//         console.error('Error deleting product');
//       }
//     } catch (error) {
//       console.error('Error deleting product', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Products</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>{product.name}</td>
//               <td>{product.description}</td>
//               <td>{product.price}</td>
//               <td>
//                 <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SeeProductPage;





import React, { useEffect, useState } from 'react';
import { Box, Button, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

const SeeProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://techbazaar.onrender.com/products');
        const data = await response.json();

        if (response.ok) {
          setProducts(data);
        } else {
          // Handle error cases
          console.error('Error fetching products');
        }
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, [products]);

  const handleDeleteProduct = async (productId: number) => {
    try {
      const response = await fetch(`https://techbazaar.onrender.com/products/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Product deleted successfully, update the products state
        setProducts(products.filter((product) => product.id !== productId));
      } else {
        // Handle error cases
        console.error('Error deleting product');
      }
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  return (
    <Box  margin={'80px 80px 0px 80px'}>
      <h2>Products</h2>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Price</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr key={product.id}>
              <Td>{product.title}</Td>
              <Td>{product.description}</Td>
              <Td>{product.price}</Td>
              <Td>
                <Button colorScheme="red" onClick={() => handleDeleteProduct(product.id)}>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default SeeProductPage;