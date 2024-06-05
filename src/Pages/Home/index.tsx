import React, { useContext} from 'react'
import { Layout } from '../../Components/LayoutProducts'
import { Card } from '../../Components/Card'
import { ProductProps } from '../../Interfaces'
import { ContextApp } from '../../Context'
import { LayoutAside } from '../../Components/LayoutAside'
import { ProductDetails } from '../../Components/ProductDetail'


export const Home:React.FC=()=> {
  const {items, handleOpenAside, productDetail} = useContext(ContextApp);
  //&& item.images[0].startsWith("[")
  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-slate-800 w-full text-center mt-12 mb-6 ">Soy el home</h1>
      <div className='w-full flex flex-wrap gap-6 justify-center items-center' onClick={handleOpenAside}>
        {items.map((item:ProductProps)=>(
          item.images.length > 0  && item.images[0].startsWith("[") &&
            <Card 
              title={item.title}
              price={item.price}
              img={item.images}
              img_card={item.images[0]}
              category={item.category.name}
              key={item.id}
              description={item.description}
            />
        ))}
      </div>
      <LayoutAside title="Specifications">
        {productDetail &&
      <ProductDetails 
        title={productDetail.title} 
        price={productDetail.price} 
        description={productDetail.description} 
        img = {productDetail.img} 
        category={productDetail.category} 
      />
        }
    </LayoutAside>
    
    </Layout>
  )
    
}
