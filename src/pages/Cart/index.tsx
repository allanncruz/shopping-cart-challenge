import React from 'react';

import ImgProduct from '../../assets/images/1.jpg';
import { Container, ProductTable, Total } from './styles';

const Cart = (): JSX.Element => {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
            <tr data-testid="product">
                <td>
                  <img src={ImgProduct} alt="Nome do produto" />
                </td>
                <td>
                  <strong>Nome do produto</strong>
                  <span>R$ 11,98</span>
                </td>
                <td>
                  <div>
                    <button
                      type="button"
                    >
                        MdAddCircleOutline
                    </button>
                    <input
                      type="text"
                      data-testid="product-amount"
                      readOnly
                      value="amount"
                    />
                    <button
                      type="button"
                      data-testid="increment-product"
                    >
                    </button>
                  </div>
                </td>
                <td>
                  <strong>subTotal</strong>
                </td>
                <td>
                  <button
                    type="button"
                    data-testid="remove-product"
                  >
                  </button>
                </td>
              </tr>          
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 11,98</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
