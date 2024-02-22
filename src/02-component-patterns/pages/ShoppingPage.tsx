import { ProductImage, ProductTitle, ProductButtons } from '../components';
import { ProductCard } from '../components';
import '../styles/custom-styles.css';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 4,
          maxCount: 15,
        }}
      >
        {({ reset, increaseBy, count, isMaxReached }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};
