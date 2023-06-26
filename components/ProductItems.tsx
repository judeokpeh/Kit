import Link from "next/link";
import ProductImg from "./ProductImg";

interface ProductProps{
    product:Product;
}

const ProductItems:React.FC<ProductProps> = ({product}) => {
  return (
    <Link 
    prefetch = {false}
    href={`/product/${product.id}`} className=" bg-white space-x-6 h-96 flex flex-col p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200">
        <div className="relative max-h-72 flex-1">
            <ProductImg  product = {product} fill />
        </div>
        <div className="font-semibold items-center justify-between flex mt-4 mb-1">
        <p className="w-44 truncate">{product.title}</p>
        <p>${product.price}</p>
        </div>
       <div className="italic text-xs w-64 line-clamp-3 text-gray-600">
        {product.description}
       </div>
    </Link>
  )
}

export default ProductItems
