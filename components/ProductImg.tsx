'use client'
import Image from "next/image";
import { useState } from "react";
interface ProductImgProp
 {
    product:Product;
    fill?:boolean
}
const ProductImg:React.FC<ProductImgProp> = ({product, fill}) => {
const [loading, setLoading] = useState(false)
  return (
    <>
    {fill ? (
        <Image  alt={product.title}
        src={product.image} fill
        
        className={`object-contain duration-700 ease-in-out group-hover:opacity-75 
        ${loading
        ? "scale-110 blur-2xl grayscale" : 'scale-100 blur-0 grayscale-0'
       
        }`}
        onLoadingComplete = {()=>setLoading(false)}
        />
        
    ): 
    (
        <Image 
        alt= {product.title}
        src={product.image}
        width={400}
        height={1000}
        className={`object-contain duration-700 ease-in-out group-hover:opacity-75 
        ${loading
        ? "scale-110 blur-2xl grayscale" : 'scale-100 blur-0 grayscale-0'
       
        }`}
        onLoadingComplete = {()=>setLoading(false)}
        />
    )}
    </>
  );
}

export default ProductImg
