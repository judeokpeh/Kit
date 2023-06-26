
import {BiLogoApple} from 'react-icons/bi'
const Footer = () => {
  return (
    <div className="bg-black p-45 w-full h-full">  
      <footer>
        <div className="mx-4 text-white">
          <p><BiLogoApple color='white' size={30}/></p>
          <p className='text-white'>Home</p>
          <p className='text-white'>Pricing</p>
          <p>Blog</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
