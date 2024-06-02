export interface NavRoute{
    path: string;
    label: string;
}

export interface ChildrenProps{
    children: React.ReactNode;
}

export interface CategoryPrductsProps{
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}

export interface ProductProps{
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: CategoryPrductsProps;
}

// uso extends para heredar las propiedades de ProductProps y Pick para seleccionar las propiedades que necesito
export interface CardProps extends Pick<ProductProps, 'title' | 'price'> {
    category: string;
    img: string[];
  };

export interface ImagesCardsProps{
    images: string[];
}
