import React, { useContext} from 'react'
import { Layout } from '../../Components/LayoutProducts'
import { Card } from '../../Components/Card'
import { ProductProps } from '../../Interfaces'
import { ContextApp } from '../../Context'
import { LayoutAside } from '../../Components/LayoutAside'
import { ProductDetails } from '../../Components/ProductDetail'
import { IoSearch } from "react-icons/io5";

export const Home:React.FC=()=> {
  const {items, handleOpenAside, productDetail, setSearch, search, filteredItems, filterItems} = useContext(ContextApp);
  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value);
  }
  const itemsToRender = (search && search.length > 0) || (filterItems && filterItems.length > 0) ? filteredItems : items;
  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-slate-800 w-full text-center mt-12 mb-6">Exclusives Products</h1>
      <div className="flex justify-center items-center relative mb-6">
        <div className="relative w-1/3">
          <input
            type="text"
            className="p-3 border-2 border-neutral-300 rounded-full text-sm w-full pl-10 focus:outline-none focus:border-gray-500 transition duration-200 ease-in-out"
            placeholder="Search a product..."
            onChange={handleSearch}
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <IoSearch className="text-xl" />
          </span>
        </div>
      </div>
      <div className='w-full flex flex-wrap gap-6 justify-center items-center' onClick={handleOpenAside}>
        {itemsToRender && itemsToRender.length > 0 && itemsToRender.map((item:ProductProps)=>(
          item.images.length > 0  && !item.images[0].startsWith("[") &&
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
        {items.length === 0 && <h1 className='text-2xl font-semibold text-slate-800'>No products found</h1>}
        {filteredItems && filteredItems.length === 0 && <h1 className='text-2xl font-semibold text-slate-800'>No products found</h1>}
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
