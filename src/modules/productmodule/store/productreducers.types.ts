export type ProductTypes = {
  name: string;
  price: number;
  imageUrl: string;
};

export type ProductInitialStateType = {
  isLoading: boolean;
  error: string;
  products: ProductTypes[];
};
