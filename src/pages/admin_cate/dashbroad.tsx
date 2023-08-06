import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { getAll } from "../../api/categorys"

import { ICategory } from "../../interfaces/auth"
import { deleteCategory } from "../../api/categorys"

const Dashbroad_cate = () => {
    const [categorys, setCategory] = useState<ICategory[]>([])

    const fetchCategory = async () => {
        const { data } = await getAll()
        setCategory(data)
    }
    const handleDeleteProduct = async (categoyId: number) => {
        // Gọi API để xóa sản phẩm
        await deleteCategory(categoyId);
        // Cập nhật danh sách sản phẩm
        await fetchCategory();

    }

    useEffect(() => {
        fetchCategory()

    }, [])
    return <div className=" flex flex-col overflow-x-auto ">

        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Id danh mục
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Tên danh mục
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            CRUD
                        </th>

                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {categorys.map(categorys => (
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {/* <Link to={`/admin/product/${categorys.id}`}>
                                </Link> */}
                                {categorys.id}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"> {categorys.name}</td>
                            
                            <td className="grid grid-cols-2 gap-2 mt-24">
                                <button className="bg-red-600 text-white rounded-md p-2"
                                // onClick={() =>handleDeletecategorys(categorys.id)}
                                >Xoá</button>
                                <button className="bg-green-500 text-white rounded-md p-2">
                                    <Link to={`/admin/categorys/${categorys.id}`}>
                                        Sửa
                                    </Link>
                                </button>
                                <button className="bg-blue-500 text-white rounded-md p-2">
                                    <Link to={`/admin/categorys/add`}>
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
export default Dashbroad_cate