import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { deleteUser, getAll } from "../../api/user"

import { IUser } from "../../interfaces/auth"
import { deleteCategory } from "../../api/categorys"

const Dashbroad_user = () => {
    const [users, setUsers] = useState<IUser[]>([])

    const fetchUser= async () => {
        const { data } = await getAll()
        setUsers(data)
    }
    const handleDeleteUser = async (userId: number) => {
        // Gọi API để xóa sản phẩm
        await deleteUser(userId);
        // Cập nhật danh sách sản phẩm
        await fetchUser();

    }

    useEffect(() => {
        fetchUser()

    }, [])
    return <div className=" flex flex-col overflow-x-auto ">

        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Id Người dùng
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Tên người dùng
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Email
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Password
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            confirmPassword
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            CRUD
                        </th>

                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {users.map(users => (
                        
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {users.id}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"> {users.name}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"> {users.email}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"> {users.password}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"> {users.confirmPassword}</td>

                            
                            <td className="grid grid-cols-2 gap-2 mt-24">
                                <button className="bg-red-600 text-white rounded-md p-2"
                                onClick={() =>handleDeleteUser(users.id)}
                                >Xoá</button>
                                <button className="bg-green-500 text-white rounded-md p-2">
                                    <Link to={`/admin/users/${users.id}`}>
                                        Sửa
                                    </Link>
                                </button>
                                <button className="bg-blue-500 text-white rounded-md p-2">
                                    <Link to={`/admin/users/add`}>
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
export default Dashbroad_user