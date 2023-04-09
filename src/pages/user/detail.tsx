import { Outlet } from 'react-router-dom'
// import footer from './footer'
import {useParams} from 'react-router-dom'
import { IProduct } from '../../interfaces/auth'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getById } from '../../api/products'
import Header from '../../componets/user/header'
import Slider from '../../componets/user/slider'
import Footer from '../../componets/user/footer'

const ProductDetail = () => {
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const {id} = useParams()
    const fetchProductById = async () => {
        const {data} = await getById(id!)
        setProduct(data)
    }
    useEffect(()=>{
        fetchProductById()
    },[id])

    return <>
        <h2 className="text-lg ml-24 py-4 font-semibold text-gray-800">{product.name}</h2>

        <hr className="" />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">



            <div className="lg:flex  lg:justify-between">
                <div className="flex-1 min-w-0">

                    <img className=" w-[358px] object-cover lg:h-full lg:w-96" src={product.images?.[0].base_url} alt="Product Image" />
                </div>
                <div className=" flex lg:mt-0 lg:ml-10 ">
                    <div className="max-w-2xl flex flex-col justify-between">
                        <div className="mt-4">
                            <span className="mt-1 text-2xl  font-semibold text-red-500">{product.price} ₫</span>   <span className="mt-1 ml-1 text-sm font-semibold text-gray-500">18.000.000 ₫</span>
                            <p className=" text-sm font-sans text-gray-600 mt-5"> {product.description}.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="mt-10 ml-24 flex">

                <div className="flex -mx-2">
                    <div className="w-1/12 h-12 w-12 ">
                        <img className=" w-full object-cover cursor-pointer" src={product.images?.[0].base_url} alt="Thumbnail 1" />
                    </div>
                    <div className="w-1/12 w-12 h-12">
                        <img className=" w-full  object-cover cursor-pointer"src={product.images?.[1].base_url} alt="Thumbnail 2" />
                    </div>
                    <div className="w-1/12 h-12 w-12 ">
                        <img className=" w-full object-cover cursor-pointer" src={product.images?.[0].base_url} alt="Thumbnail 3" />
                    </div>
                    <div className="w-1/12 h-12 w-12 ">
                        <img className=" w-full object-cover cursor-pointer" src={product.images?.[1].base_url} alt="Thumbnail 4" />
                    </div>
                </div>
                <div className="grid grid-cols-2 w-96 m-auto">
                    <div className="">

                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold text-sm py-2 px-14 rounded">
                            Mua ngay
                        </button>
                    </div>

                </div>

            </div>
            <div className="flex flex-col mt-10   bg-gray-100 p-4">
                <h1 className="text-red-500 text-lg font-bold mb-4 justify-center text-center">ĐẶC ĐIỂM NỔI BẬT</h1>
                <p className="text-sm mt-3">Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</p>
                <p className="text-sm mt-3">Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ phân giải Full HD+, 120Hz mượt mà</p>
                <p className="text-sm mt-3">Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G, RAM lên đến 8 GB</p>
                <p className="text-sm mt-3">Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh, hỗ trợ sạc nhanh 25 W</p>
            </div>
            <div className='my-10'>
                <p>Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!</p>
            </div>
            <h3 className='text-xl mt-5'>Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</h3>
            <div className='my-2'>
                <p>Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về chiếc</p>
            </div>
            <h3 className='text-xl mt-10'>Thiết kế sang trọng, màn hình Super AMOLED</h3>
            <div className='my-2'>
                <p>Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p>
            </div>
            <div className='my-3'>
                <p>Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả năng mang theo để tiện đi lại cho người dùng. Giờ đây, bạn có thể mang theo chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc nào.</p>
                <p className='mt-5'>Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và có thể di chuyển dễ dàng.</p>
            </div>
        </div>
        <div className='text-center '>
            <button className='text-xl border-gray-500 border-2 px-20	rounded-xl 	'>Xem Thêm</button>
            </div>
    </>
}

export default ProductDetail