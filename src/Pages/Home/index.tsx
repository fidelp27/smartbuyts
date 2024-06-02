import React, { useEffect, useState } from 'react'
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
import { ProductProps } from '../../Interfaces';

export const Home:React.FC=()=> {
  const [items, setItems] = useState<ProductProps[]>([]);
console.log(items);

  useEffect(() => {
    const getData = async () => {
      try{
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        if(!response.ok){
          throw new Error("We can't get data from the server");
        }
        const data:ProductProps[] = await response.json();
        setItems(data);                     
      }catch(error){
        console.error(error);
      }
    }
    getData();
  },[])

  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-slate-800 w-full text-center mt-12 mb-6 ">Soy el home</h1>
      <div className='w-full flex flex-wrap gap-6 justify-center items-center'>
        {items.map((item:ProductProps)=>(
          item.images.length > 0 && !item.images[0].startsWith("[") &&
            <Card 
              title={item.title}
              price={item.price}
              img={item.images}
              category={item.category.name}
              key={item.id}
            />
        ))}
      </div>
    </Layout>
  )
}
