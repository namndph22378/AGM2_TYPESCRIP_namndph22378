
// const Product = () => {
//     return <div className="w-full max-w-sm bg-white mb-35 ">
//         <a href="detail/1">
//             <img className="p-1 rounded-t-lg mx-10" src="/dt4.png" alt="product image" />
//         </a>
//         <div className="px-10 pb-10 ">
//             <a href="">
//                 <h5 className="text-base font-roboto tracking-tight text-gray-900 dark:text-white mb-5">iPhone 11 64GB I Chính hãng VN/A</h5>
//             </a>
//             <div className="flex items-center justify-between">
//                 <span className="text-base font-bold text-red-500 dark:text-white ">10.790.000 ₫</span>
//                 <span className="text-sm font-bold text-gray-400 dark:text-white ">18.000.000 ₫</span>
//             </div>
//             <div className="flex items-center mt-2.5 mb-5">
//                 <svg aria-hidden="true" className="w-5 h-5 text-black-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//                 <svg aria-hidden="true" className="w-5 h-5 text-black-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//                 <svg aria-hidden="true" className="w-5 h-5 text-black-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//                 <svg aria-hidden="true" className="w-5 h-5 text-black-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//                 <svg aria-hidden="true" className="w-5 h-5 text-black-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
//             </div>
//         </div>
//     </div>
    

// }

// export default Product


import {Link} from 'react-router-dom'
import { IProduct } from '../../interfaces/auth'

type Props = {
  data: IProduct
}

const Product = ({data}: Props) => {
    return <Link to={`product/${data.id}`} className="block">
    <img
      alt="Art"
      src={data?.images}
      className="h-64 w-full object-cover sm:h-80 lg:h-96"
    />
  
    <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
      {data.name}
    </h3>
{/*   
    <p className="mt-2 max-w-sm text-gray-700">
      {data.description}
    </p> */}
     <div className="flex items-center  mt-2.5 mb-5">
                 <span className="text-base pr-5 font-bold text-red-500 dark:text-white ">{data.price.toLocaleString()} ₫</span>
                 <span className="text-sm font-bold text-gray-400 dark:text-white ">{data.original_price.toLocaleString()} ₫</span>
             </div>

  </Link>
  
}

export default Product