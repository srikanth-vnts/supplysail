import { ProductTypes } from './store/productreducers.types';

type Props = {
  key: string;
} & ProductTypes;

const ProductItem = ({ name, imageUrl, price, key }: Props) => {
  return (
    <div key={key}>
      <p>Product name: {name}</p>
      <img src={imageUrl} alt={name} />
      <p>Rs. {price}</p>
    </div>
  );
};

export default ProductItem;
