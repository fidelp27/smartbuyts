import React, { useContext} from 'react'
import { Layout } from '../../Components/LayoutProducts'
import { Card } from '../../Components/Card'
import { ProductProps } from '../../Interfaces'
import { ContextApp } from '../../Context'
import { LayoutAside } from '../../Components/LayoutAside'


export const Home:React.FC=()=> {
  const {items, handleOpenAside} = useContext(ContextApp);

  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-slate-800 w-full text-center mt-12 mb-6 ">Soy el home</h1>
      <div className='w-full flex flex-wrap gap-6 justify-center items-center' onClick={handleOpenAside}>
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
      <LayoutAside title="Categorias">
      <ul>
        <li className="mb-2">Todas</li>
        <li className="mb-2">Hombres</li>
        <li className="mb-2">Mujeres</li>
        <li className="mb-2">Niños</li>
      </ul>
    </LayoutAside>
    </Layout>
  )
    
}
