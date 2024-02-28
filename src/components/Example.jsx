import React from 'react';
import { useProducts } from '../hooks';

export default function Example() {
    const { data: {products}, status, error, isFetching, isPending, isError } = useProducts();
    console.log(products);
  return (
    <div className='max-w-2xl mx-auto m-2'>
       {
        isPending ? (<h2 className='text-3xl font-medium'>Loading products.... </h2>)
        : isError ? (<h2 className='text-3xl font-medium'>Error fetching  products....{error.message} </h2>)
        : <div>
            {
             products.length > 0 ? (products.map(product => (
                <h2 key={product.id}>{product.title}</h2>
             ))): <p>No product found.</p>
           }
        </div>
       }
    </div>
  )
}
