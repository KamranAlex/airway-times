import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Home() {
  const theme = useSelector((state) => state.theme.value);

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
    <div
      style={{ padding: '3rem' }}
      className={theme ? 'theme_dark' : 'theme_light'}
    >
      <ul>
        {products.map((product) => (
          <li>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
