import React, { useState, useEffect } from 'react';

import { api } from '../../services/api';

import { ProductList, Container } from './styles';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    stock: string;
  }

interface ProductFormatted extends Product {
    priceFormatted: string;
  }

const Home = (): JSX.Element => {
    const [products, setProducts] = useState<ProductFormatted[]>([]);
    useEffect(() => {
        async function loadProducts() {
          const response = await api.get('product');
    
          setProducts(
            response.data.map((eachProduct: Product) => {
              return {...eachProduct};
            })
          );
        }
    
        loadProducts();
      }, []);
  return (
    <Container>
        <ProductList>
            {products.map((product) => {
            return (
                    <li>
                        <img src={product.image} alt={product.name} />
                        <strong>{product.name}</strong>
                        <span>{product.price}</span>
                        <small>{product.stock}</small>
                        <button
                            type="button"
                            data-testid="add-product-button"
                        >
                            <span>ADICIONAR AO CARRINHO</span>
                        </button>
                    </li>
                )
            })}
        </ProductList>
    </Container>
  );
};

export default Home;
