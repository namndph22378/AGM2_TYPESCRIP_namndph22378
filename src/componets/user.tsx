import { Outlet } from 'react-router-dom'
// import footer from './footer'
import Header from './user/header'
import Slider from './user/slider'
import Footer from './user/footer'
const UserLayout = () => {
    return <>
        <Header />
        {/* <Slider /> */}
        <Outlet />
        <Footer />
    </>
}

export default UserLayout