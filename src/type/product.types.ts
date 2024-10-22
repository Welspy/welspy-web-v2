export interface ProductProps {
  data: [
    {
      idx: number;
      name: string;
      description: string;
      price: number;
      discount: number;
      discountedPrice: number;
      imageUrl: string;
      productUrl: string;
    }
  ];
}
