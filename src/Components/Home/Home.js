import React, { useEffect, useState } from 'react';

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products?skip=0&limit=100')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      });
  }, []);
  return (
    <div style={{ marginBottom: '20rem' }}>
      <h2 className='text-center'>Home</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
