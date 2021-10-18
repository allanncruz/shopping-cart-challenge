import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Cart } from './styles';

const Header = (): JSX.Element => {

  return (
    <Container>
      <Link to="/">Shopping Cart Challenge</Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
        </div>
      </Cart>
    </Container>
  );
};

export default Header;
