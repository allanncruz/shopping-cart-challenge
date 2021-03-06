import React from 'react';
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';
import { Container, ProductTable, Total } from './styles';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  amount: number;
}

interface ProductFormatted extends Product{
  priceFormatted: string;
  subTotal: string;
}

const Cart = (): JSX.Element => {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted: ProductFormatted[] = cart.map((product) => (
    { ...product, priceFormatted: formatPrice(product.price), subTotal: formatPrice(product.price * product.amount)}
  ))

  const total = formatPrice(cart.reduce((sumTotal, product) => {
      sumTotal += product.price * product.amount;
      return sumTotal;
    }, 0)
  )

  function handleProductIncrement(product: Product) {
    const newProductAmount = product.amount + 1;
    updateProductAmount({productId: product.id, amount: newProductAmount});
  }

  function handleProductDecrement(product: Product) {
    const newProductAmount = product.amount - 1;
    updateProductAmount({productId: product.id, amount: newProductAmount});
  }

  function handleRemoveProduct(productId: string) {
    removeProduct(productId);
  }

  function handleRequestProduct() {
    console.log('Finalizar pedido!');
  }

  return (
    <Container>
      <ProductTable>
        <thead>
        <tr>
          <th aria-label="product image" />
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th aria-label="delete icon" />
        </tr>
        </thead>
        <tbody>
        {cartFormatted.map((product) => {
          return (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.name} />
              </td>
              <td>
                <strong>{product.name}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    data-cy="decrement-product"
                    disabled={product.amount <= 1}
                    onClick={() => handleProductDecrement(product)}
                  >
                    <MdRemoveCircleOutline size={20} />
                  </button>
                  <input
                    type="text"
                    data-cy="product-amount"
                    readOnly
                    value={product.amount}
                  />
                  <button
                    type="button"
                    data-cy="increment-product"
                    onClick={() => handleProductIncrement(product)}
                  >
                    <MdAddCircleOutline size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subTotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  data-cy="remove-product"
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  <MdDelete size={20} />
                </button>
              </td>
            </tr>
          )
        })}

        </tbody>
      </ProductTable>

      <footer>
        <button onClick={handleRequestProduct} data-cy="handle-request-product" type="button">
          Finalizar pedido
        </button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
