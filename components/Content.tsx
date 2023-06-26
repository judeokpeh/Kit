import ProductItems from "./ProductItems"


const Content = async() => {
  const response = await fetch('https://fakestoreapi.com/products')
  const products:Product[] = await response.json() 

  return (
    <main className=" mt-40 min-h-screen max-w-7xl mx-auto px-8 xl:p-0">
    <div className="flex flex-col space-y-12 pb-44">
      <p className="text-4xl font-bold text-center md:text-7xl text-green-800 ">KIT DEAL OF THE DAY</p>
        
        <div className="shadow-md grid xl:grid-cols-4 sm:grid-2 md:grid-cols-3 gap-x-6 gap-y-10 xl:gap-x-8">
        {products.map((product)=>(
          <ProductItems key = {product.id}
          product = {product}
          />
        ))}
        </div>
        </div>
    </main>
  )
}

export default Content
