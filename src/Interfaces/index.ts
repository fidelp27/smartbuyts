export interface NavRoute{
    path: string;
    label: string;
}

export interface ChildrenProps{
    children: React.ReactNode;
}
export interface AsideProps extends ChildrenProps{
    title: string;

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
    description?: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: CategoryPrductsProps;
}

// uso extends para heredar las propiedades de ProductProps y Pick para seleccionar las propiedades que necesito
export interface CardProps extends Pick<ProductProps, 'title' | 'price'  | 'description' > {
    category: string;
    img: string[] ;
    img_card: string;
  };

export interface ProductDetailsProps extends Pick<CardProps, 'title' | 'price' | 'description' | 'category' | 'img'> {}

export interface CartProps extends CardProps{
    qty: number;
}  

export interface ImagesCardsProps{
    images: string[];
}

export interface ContextProps{
    items: ProductProps[];
    cartItems: CartProps[];
    addToCart: (item:CartProps) => void;
    removeFromCart: (item:CartProps) => void;
    filteredItems?: ProductProps[];
    filterItems?: (category:string) => void;
    totalItemsCart: (items:CartProps[]) => number;
    totalAmountCart: (items:CartProps[]) => number;
    openedAside: boolean;
    handleOpenAside?: () => void;
    handleCloseAside?: () => void;
    productDetail: CardProps | null;
    setProductDetail: (item:CardProps) => void;
    openedAsideCart: boolean;
    handleOpenAsideCart: () => void;
}

export interface CartItemsProps{
    items: CartProps[];
}