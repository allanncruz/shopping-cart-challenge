import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Cart } from './styles';
import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <Container>
      <Link to="/">Shopping Cart Challenge</Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-cy="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
      </Cart>
    </Container>
  );
};

export default Header;
