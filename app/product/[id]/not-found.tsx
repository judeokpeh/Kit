import Image from "next/image";

export default function NotFound() {
    return (
      <div className="mt-40 flex flex-col items-center justify-center rounded-md mx-4 bg-white">
      <h1 className="text-red-800 font-bold p-4 text-5xl md:text-7xl md:max-w-md text-center">Not Found</h1>
      <Image  src= '/images/404.png' width={400}
      height={400} alt="404"
      />
      </div>
    )
  }