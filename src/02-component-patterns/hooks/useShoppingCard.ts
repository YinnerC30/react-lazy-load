import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCard = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart(shoppingCart => {
      if (count == 0) {
        const { [product.id]: toDelete, ...rest } = shoppingCart;
        return {
          ...rest,
        };
      }

      return {
        ...shoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };
  return {
    shoppingCart,
    onProductCountChange,
  };
};
