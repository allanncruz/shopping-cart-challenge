import React from 'react';

import { ProductList, Container } from './styles';

const Home = (): JSX.Element => {
  return (
    <Container>
        <ProductList>
        <li>
            <img src="" alt="Nome do produto" />
            <strong>Nome do produto</strong>
            <span>R$ 11,98</span>
            <button
                type="button"
                data-testid="add-product-button"
            >
                <span>ADICIONAR AO CARRINHO</span>
            </button>
            </li>
        </ProductList>
    </Container>
  );
};

export default Home;
