import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { getAll } from "../../api/products"
import { getById } from "../../api/products"

import { IProduct } from "../../interfaces/auth"
import { Axios } from "axios"
import {deleteProduct} from '../../api/products'

const Dashbroad = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  const fetchProducts = async () => {
    const { data } = await getAll()
    setProducts(data)
  }
  const handleDeleteProduct = async (productId: number) => {
    // Gọi API để xóa sản phẩm
    await deleteProduct(productId);
    // Cập nhật danh sách sản phẩm
    await fetchProducts();
    
  }
  
  useEffect(() => {
    fetchProducts()
    
  }, [])
  return <div className=" flex flex-col overflow-x-auto ">

    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
        <thead>
          <tr>
            <th
              className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              Tên sản phẩm
            </th>
            <th
              className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              Giá
            </th>
            <th
              className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              Giá khuyến mãi
            </th>
            <th
              className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              Hình ảnh
            </th>
            <th
              className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              Thao tác
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {products.map(product => (
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <Link to={`/admin/product/${product.id}`}>
                  {product.name}
                </Link>
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.price.toLocaleString()}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.original_price.toLocaleString()}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <img className="w-[40%]" src={product.images?.[0].base_url} alt="" />
              </td>
              <td className="grid grid-cols-2 gap-2 mt-24">
                <button className="bg-red-600 text-white rounded-md p-2" 
                  // onClick={() =>handleDeleteProduct(product.id)}
                >Xoá</button>
                <button className="bg-green-500 text-white rounded-md p-2">
                    <Link to={`/admin/product/${product.id}`}>
                         Sửa
                    </Link>
                </button>
                <button className="bg-blue-500 text-white rounded-md p-2">
                    <Link to={`/admin/product/add`}>
                         Thêm
                    </Link>
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
}
export default Dashbroad