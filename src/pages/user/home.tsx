import Product from "../../componets/user/product"
import { getAll } from "../../api/products"
import { IProduct } from '../../interfaces/auth'
import { useEffect, useState } from "react"

import Slider from "../../componets/user/slider"
const Home = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const fetchProduct = async () => {
        try {
            const { data } = await getAll()
            // console.log(data.);
            setProducts(data)

        } catch (err) {

        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    return <div className="container mx-auto">
        <Slider/>
        <h1 className="text-xl m-7 font-sans ">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
        <div className="grid grid-cols-4 gap-3">
        {products.map(product => <Product
                data={product}
                key={product.id} />)}
        </div>
    </div>
}

export default Home