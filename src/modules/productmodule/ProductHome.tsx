import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import Button from '../../uikit/Button/Button';
import Input from '../../uikit/Input/Input';
import { RootState } from '../../store';
import styles from './producthome.module.css';

import { addProductItem } from './store/productReducers';
import ProductItem from './ProductItem';

const cx = classNames.bind(styles);

type InitialValuesType = {
  name: string;
  imageUrl: string;
  price: number;
};

const initialValues = {
  name: '',
  imageUrl: '',
  price: 0,
};

const ProductHome = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(({ productsReducers }: RootState) => {
    return {
      products: productsReducers.products,
    };
  });
  const handleOnSubmit = (values: InitialValuesType) => {
    dispatch(addProductItem(values));
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleOnSubmit,
  });
  return (
    <div>
      <div className={cx('field')}>
        <Input
          name={'name'}
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder={'product name'}
        />
      </div>
      <div className={cx('field')}>
        <Input
          name={'imageUrl'}
          onChange={formik.handleChange}
          value={formik.values.imageUrl}
          placeholder={'image'}
        />
      </div>
      <div className={cx('field')}>
        <Input
          name={'price'}
          onChange={formik.handleChange}
          value={`${formik.values.price}`}
          placeholder={'price'}
        />
      </div>
      <Button onClick={formik.handleSubmit}>add more Product</Button>

      <div>
        {products.map(({ imageUrl, name, price }) => (
          <ProductItem
            key={imageUrl}
            imageUrl={imageUrl}
            name={name}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductHome;
