import ProductHome from '../modules/productmodule/ProductHome';
import { RouteType } from './routetypes';

export const RouteList: RouteType[] = [
  {
    path: '/',
    label: 'producthome',
    component: () => <ProductHome />,
  },
];
