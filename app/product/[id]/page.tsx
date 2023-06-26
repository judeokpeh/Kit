import ProductImg from "@/components/ProductImg";
import {notFound} from 'next/navigation'
interface IdProps{
    params: 
    
    { id:string;}
   
}

const ProductPage:React.FC<IdProps> = async({params:{id}}) => {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product:Product = await res.json()
  return (
    <div className="mt-48 px-4 pb-10 mx-auto flex flex-col max-w-5xl md:flex-row items-center gap-8 ">
      <p><ProductImg  product={product}/></p>
      <div className="divide-y">
        <div className="space-y-2 pb-8">
            <h1 className="text-2xl md:text-4xl font-bold">{product.title}</h1>
            <h2 className="text-gray-500 font-bold text-xl md:text-3xl">${product.price}</h2>
        </div>
        <div className="pt-8">
            <p className="text-xs md:text-sm text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
  )
    } catch(error){
        notFound()

    }
    
}

export default ProductPage
